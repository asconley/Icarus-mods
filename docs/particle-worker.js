/* ═══════════════════════════════════════════
   Particle Worker — OffscreenCanvas renderer
   Runs on a separate thread to free main thread
   ═══════════════════════════════════════════ */

let canvas, ctx, width, height, particles;
let rgbAccent = '232, 123, 53';

function initParticles() {
    particles = [];
    const count = Math.min(120, Math.floor(width * height / 8000));
    for (let i = 0; i < count; i++) {
        particles.push({
            x: Math.random() * width,
            y: Math.random() * height,
            radius: Math.random() * 2 + 0.5,
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5,
            opacity: Math.random() * 0.5 + 0.1
        });
    }
}

function animate() {
    ctx.clearRect(0, 0, width, height);
    for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${rgbAccent}, ${p.opacity})`;
        ctx.shadowBlur = 10;
        ctx.shadowColor = `rgba(${rgbAccent}, 0.6)`;
        ctx.fill();
    }
    requestAnimationFrame(animate);
}

self.onmessage = function(e) {
    const msg = e.data;

    if (msg.type === 'init') {
        canvas = msg.canvas;
        ctx = canvas.getContext('2d');
        width = msg.width;
        height = msg.height;
        if (msg.accent) rgbAccent = msg.accent;
        canvas.width = width;
        canvas.height = height;
        initParticles();
        animate();
    }

    if (msg.type === 'resize') {
        width = msg.width;
        height = msg.height;
        canvas.width = width;
        canvas.height = height;
        initParticles();
    }
};
