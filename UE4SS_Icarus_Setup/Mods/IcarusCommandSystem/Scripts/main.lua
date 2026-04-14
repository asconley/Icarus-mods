--[[
    IcarusCommandSystem - Server Command Framework
    Version: 0.2

    Hooks into ServerSendChatMessage to intercept /commands.
    Confirmed hook: /Script/Icarus.IcarusPlayerController:ServerSendChatMessage

    Commands:
      /help             - Show available commands
      /motd             - Show message of the day
      /players          - List online players
      /kit <name>       - Give predefined item kits
      /heal             - Restore health and stamina
      /god              - Toggle god mode
      /tp <player>      - Teleport to player

    Author: AgentKush
    Version: 0.2
]]

-- ============================================================
-- CONFIGURATION
-- ============================================================

local CHAT_HOOK_PATH = "/Script/Icarus.IcarusPlayerController:ServerSendChatMessage"
local CMD_PREFIX = "/"
local SERVER_MOTD = "Welcome to the server! Type /help for commands."

-- Starter kit contents (item RowNames from D_ItemTemplate)
local KITS = {
    starter = {
        name = "Starter Kit",
        items = {
            -- Fill with actual item RowNames after testing
            -- { row = "Pickaxe_Stone", count = 1 },
            -- { row = "Axe_Stone", count = 1 },
            -- { row = "CookedMeat", count = 5 },
        }
    },
    builder = {
        name = "Builder Kit",
        items = {
            -- { row = "Wood", count = 200 },
            -- { row = "Stone", count = 100 },
        }
    },
}

-- ============================================================
-- COMMAND REGISTRY
-- ============================================================
local commands = {}

local function register_command(name, description, handler)
    commands[name] = {
        description = description,
        handler = handler,
    }
end

local function parse_command(message)
    if not message or message == "" then return nil end
    if string.sub(message, 1, #CMD_PREFIX) ~= CMD_PREFIX then return nil end

    local cmd_string = string.sub(message, #CMD_PREFIX + 1)
    local parts = {}
    for word in string.gmatch(cmd_string, "%S+") do
        table.insert(parts, word)
    end

    if #parts == 0 then return nil end

    local cmd_name = string.lower(parts[1])
    local args = {}
    for i = 2, #parts do
        table.insert(args, parts[i])
    end

    return cmd_name, args
end

-- Safe message extraction from hook parameter
local function extract_message(param)
    if param == nil then return nil end

    -- Try :get():ToString() (FString parameter)
    local ok1, val1 = pcall(function() return param:get():ToString() end)
    if ok1 and val1 ~= nil then return tostring(val1) end

    -- Try :get() then tostring
    local ok2, val2 = pcall(function() return tostring(param:get()) end)
    if ok2 and val2 ~= nil then return val2 end

    -- Raw tostring
    local ok3, val3 = pcall(function() return tostring(param) end)
    if ok3 then return val3 end

    return nil
end

-- ============================================================
-- COMMAND IMPLEMENTATIONS
-- ============================================================

register_command("help", "Show available commands", function(player, args)
    print("[Commands] === Available Commands ===")
    local sorted = {}
    for name, _ in pairs(commands) do
        table.insert(sorted, name)
    end
    table.sort(sorted)
    for _, name in ipairs(sorted) do
        print("  /" .. name .. " - " .. commands[name].description)
    end
end)

register_command("motd", "Show message of the day", function(player, args)
    print("[MOTD] " .. SERVER_MOTD)
end)

register_command("players", "List connected players", function(player, args)
    local ok, states = pcall(FindAllOf, "PlayerState")
    if ok and states then
        print("[Players] " .. #states .. " online:")
        for i, ps in ipairs(states) do
            local ok_name, name = pcall(function() return ps:GetFullName() end)
            if ok_name and name then
                print("  [" .. i .. "] " .. name)
            end
        end
    else
        print("[Players] Could not enumerate players")
    end
end)

register_command("kit", "Get a starter kit: /kit <name>", function(player, args)
    local kit_name = args[1] or "starter"
    local kit = KITS[string.lower(kit_name)]
    if not kit then
        print("[Kit] Unknown kit: " .. kit_name)
        local names = {}
        for k, _ in pairs(KITS) do table.insert(names, k) end
        print("[Kit] Available: " .. table.concat(names, ", "))
        return
    end
    print("[Kit] Giving " .. kit.name .. "...")
    -- TODO: Implement item spawning via inventory functions
    print("[Kit] Item spawning not yet implemented - needs inventory discovery")
end)

register_command("heal", "Restore health and stamina", function(player, args)
    -- TODO: Find health/stamina properties on Character
    print("[Heal] Not yet implemented - needs character stat discovery")
end)

register_command("god", "Toggle god mode", function(player, args)
    -- TODO: Find damage/invulnerability properties
    print("[God] Not yet implemented - needs damage system discovery")
end)

register_command("tp", "Teleport to player: /tp <name>", function(player, args)
    if #args < 1 then
        print("[TP] Usage: /tp <player name>")
        return
    end
    -- TODO: Find player location/teleport functions
    print("[TP] Not yet implemented - needs location discovery")
end)

-- ============================================================
-- CHAT HOOK
-- ============================================================

local hook_active = false

local function init_chat_hook()
    local ok, err = pcall(function()
        RegisterHook(CHAT_HOOK_PATH, function(self, ...)
            local args = {...}
            -- ServerSendChatMessage has 1 param: Message (FString)
            local message = nil
            for i, arg in ipairs(args) do
                local extracted = extract_message(arg)
                if extracted then
                    message = extracted
                    break
                end
            end

            if not message then return end

            local cmd_name, cmd_args = parse_command(message)
            if not cmd_name then return end  -- Not a command, ignore

            print("[IcarusCommands] Command: /" .. cmd_name .. " (from chat)")
            local cmd = commands[cmd_name]
            if cmd then
                local exec_ok, exec_err = pcall(cmd.handler, self, cmd_args)
                if not exec_ok then
                    print("[IcarusCommands] Error executing /" .. cmd_name .. ": " .. tostring(exec_err))
                end
            else
                print("[IcarusCommands] Unknown command: /" .. cmd_name)
                print("[IcarusCommands] Type /help for available commands")
            end
        end)
    end)

    if ok then
        hook_active = true
        print("[IcarusCommands] Chat hook active on: " .. CHAT_HOOK_PATH)
        return true
    else
        print("[IcarusCommands] FAILED to hook: " .. tostring(err))
        return false
    end
end

-- Console command fallback for testing commands without chat
RegisterConsoleCommandHandler("icmd", function(full, args, output)
    local input = string.match(full, "icmd%s+(.*)")
    if not input then
        print("[IcarusCommands] Usage: icmd /help")
        return true
    end
    local cmd_name, cmd_args = parse_command(input)
    if cmd_name then
        local cmd = commands[cmd_name]
        if cmd then
            cmd.handler(nil, cmd_args)
        else
            print("[IcarusCommands] Unknown: /" .. cmd_name)
        end
    end
    return true
end)

-- ============================================================
-- INIT
-- ============================================================
local cmd_count = 0
for _ in pairs(commands) do cmd_count = cmd_count + 1 end

print("[IcarusCommands] Server Command System v0.2")
print("[IcarusCommands] " .. cmd_count .. " commands registered")
init_chat_hook()
print("[IcarusCommands] Console fallback: type 'icmd /help' in UE4SS console")
