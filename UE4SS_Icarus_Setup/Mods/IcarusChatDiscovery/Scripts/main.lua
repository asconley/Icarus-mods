--[[
    IcarusChatDiscovery v0.5 - Safe Parameter Reading

    Hooks ALL confirmed chat functions and reads parameters safely.
    v0.4 crashed on self:GetFullName() — v0.5 skips self inspection
    and focuses on reading the actual Message parameter.

    Author: AgentKush
]]

local LOG_FILE = "Mods\\IcarusChatDiscovery\\discovery_log.txt"
local log_buffer = {}

local function log(msg)
    local entry = os.date("[%H:%M:%S] ") .. tostring(msg)
    table.insert(log_buffer, entry)
    print("[Discovery] " .. tostring(msg))
end

local function flush_log()
    local f = io.open(LOG_FILE, "w")
    if f then
        f:write("=== Icarus Discovery Log v0.5 ===\n")
        f:write("=== Generated: " .. os.date("%Y-%m-%d %H:%M:%S") .. " ===\n\n")
        for _, line in ipairs(log_buffer) do
            f:write(line .. "\n")
        end
        f:close()
    end
end

-- Safe param reader: tries multiple approaches, never crashes
local function read_param(arg, index)
    if arg == nil then
        return "Param[" .. index .. "]: nil"
    end

    -- Try :get() first (UE4SS wrapped parameter)
    local ok_get, val = pcall(function() return arg:get() end)
    if ok_get and val ~= nil then
        -- Try ToString on the unwrapped value
        local ok_str, str = pcall(function() return val:ToString() end)
        if ok_str and str ~= nil then
            return "Param[" .. index .. "] = \"" .. tostring(str) .. "\""
        end

        -- Try GetFullName
        local ok_fn, fn = pcall(function() return val:GetFullName() end)
        if ok_fn and fn ~= nil then
            return "Param[" .. index .. "] (object) = " .. tostring(fn)
        end

        -- Raw tostring on unwrapped
        return "Param[" .. index .. "] (raw) = " .. tostring(val)
    end

    -- Try raw tostring on the wrapper itself
    local ok_raw, raw = pcall(function() return tostring(arg) end)
    if ok_raw then
        return "Param[" .. index .. "] (wrapper) = " .. tostring(raw)
    end

    return "Param[" .. index .. "]: <unreadable>"
end

log("IcarusChatDiscovery v0.5 - Safe Parameter Reading")
log("")

-- All confirmed chat functions from ObjectDump
local targets = {
    "/Script/Icarus.IcarusPlayerController:ServerSendChatMessage",
    "/Script/Icarus.IcarusPlayerController:ChatMessageHook",
    "/Script/Icarus.IcarusPlayerController:ProcessChatMessage",
    "/Script/Icarus.IcarusPlayerController:ClientReceiveChatMessage",
    "/Script/Icarus.IcarusPlayerController:BP_ClientReceiveChatMessage",
    "/Script/OnlineSubsystemIcarus.OnlineSubsystemIcarusSessionFunctionLibrary:SendChatMessage",
    "/Script/Engine.GameMode:Say",
}

local hooked_count = 0

for _, path in ipairs(targets) do
    local ok, err = pcall(function()
        RegisterHook(path, function(self, ...)
            -- Log which hook fired (skip self inspection — it crashes)
            log(">>> HOOK FIRED: " .. path)

            -- Read all parameters safely
            local args = {...}
            log("    Param count: " .. #args)
            for i, arg in ipairs(args) do
                log("    " .. read_param(arg, i))
            end

            flush_log()
        end)
        hooked_count = hooked_count + 1
        log("HOOKED: " .. path)
    end)
    if not ok then
        log("FAILED: " .. path .. " (" .. tostring(err) .. ")")
    end
end

log("")
log("Hooked " .. hooked_count .. "/" .. #targets .. " chat functions")
log("")
log("NOW TYPE IN GAME CHAT - watching for message text...")
flush_log()

RegisterConsoleCommandHandler("discovery_results", function()
    flush_log()
    print("[Discovery] Log flushed to " .. LOG_FILE)
    return true
end)

print("[Discovery v0.5] " .. hooked_count .. " hooks active. Type in game chat!")
