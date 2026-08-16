/**
 * 2026 Ambient Interactive Luminous Canvas
 * Fluid chromatic light fields, organic stardust & reactive cursor aura
 */

(function() {
    let canvas = null;
    let ctx = null;
    let animationId = null;
    let isRunning = false;
    let width = 0;
    let height = 0;
    let dpr = 1;

    // Mouse tracking with smooth physics spring
    const mouse = {
        x: -1000,
        y: -1000,
        targetX: -1000,
        targetY: -1000,
        radius: 320,
        intensity: 0
    };

    // Ambient floating chromatic orbs
    const orbs = [
        { x: 0.2, y: 0.25, vx: 0.0003, vy: 0.0002, radius: 450, color: '45, 212, 191', alpha: 0.12, baseAlpha: 0.12 },
        { x: 0.8, y: 0.35, vx: -0.00025, vy: 0.0003, radius: 520, color: '56, 189, 248', alpha: 0.10, baseAlpha: 0.10 },
        { x: 0.5, y: 0.75, vx: 0.0002, vy: -0.0002, radius: 480, color: '52, 211, 153', alpha: 0.09, baseAlpha: 0.09 },
        { x: 0.15, y: 0.85, vx: -0.0002, vy: -0.00015, radius: 400, color: '99, 102, 241', alpha: 0.07, baseAlpha: 0.07 }
    ];

    // Luminous micro stardust
    let particles = [];
    const PARTICLE_COUNT = window.innerWidth < 768 ? 45 : 75;

    class StardustParticle {
        constructor() {
            this.reset(true);
        }

        reset(initial = false) {
            this.x = Math.random() * width;
            this.y = initial ? Math.random() * height : height + 10;
            this.z = Math.random() * 2 + 0.6; // depth factor
            this.size = (Math.random() * 1.5 + 0.5) * (this.z * 0.7);
            this.baseAlpha = Math.random() * 0.35 + 0.15;
            this.alpha = this.baseAlpha;
            this.vx = (Math.random() - 0.5) * 0.15 / this.z;
            this.vy = -(Math.random() * 0.25 + 0.1) / this.z;
            this.pulseSpeed = Math.random() * 0.02 + 0.01;
            this.pulseAngle = Math.random() * Math.PI * 2;
            this.isTeal = Math.random() > 0.65;
        }

        update() {
            this.x += this.vx;
            this.y += this.vy;
            this.pulseAngle += this.pulseSpeed;

            // Distance to mouse aura
            const dx = this.x - mouse.x;
            const dy = this.y - mouse.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            let mouseGlow = 0;
            if (dist < mouse.radius) {
                mouseGlow = (1 - dist / mouse.radius) * 0.45;
            }

            const pulse = Math.sin(this.pulseAngle) * 0.12;
            this.alpha = Math.min(1, Math.max(0.05, this.baseAlpha + pulse + mouseGlow));

            // Wrap bounds
            if (this.y < -20 || this.x < -20 || this.x > width + 20) {
                this.reset(false);
            }
        }

        draw(c) {
            c.beginPath();
            c.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            if (this.isTeal) {
                c.fillStyle = `rgba(45, 212, 191, ${this.alpha})`;
            } else {
                c.fillStyle = `rgba(226, 232, 240, ${this.alpha})`;
            }
            c.fill();
        }
    }

    function initCanvas() {
        canvas = document.getElementById('ambient-canvas');
        if (!canvas) return;

        ctx = canvas.getContext('2d', { alpha: true });
        resize();

        particles = [];
        for (let i = 0; i < PARTICLE_COUNT; i++) {
            particles.push(new StardustParticle());
        }

        window.addEventListener('resize', debounce(resize, 150));
        
        window.addEventListener('mousemove', (e) => {
            mouse.targetX = e.clientX;
            mouse.targetY = e.clientY;
            mouse.intensity = Math.min(mouse.intensity + 0.15, 1);
        });

        window.addEventListener('mouseleave', () => {
            mouse.targetX = -1000;
            mouse.targetY = -1000;
        });

        // Touch support
        window.addEventListener('touchmove', (e) => {
            if (e.touches.length > 0) {
                mouse.targetX = e.touches[0].clientX;
                mouse.targetY = e.touches[0].clientY;
                mouse.intensity = 0.8;
            }
        }, { passive: true });

        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                pause();
            } else {
                start();
            }
        });

        start();
    }

    function resize() {
        if (!canvas) return;
        dpr = Math.min(window.devicePixelRatio || 1, 2);
        width = window.innerWidth;
        height = window.innerHeight;

        canvas.width = width * dpr;
        canvas.height = height * dpr;
        ctx.scale(dpr, dpr);
    }

    function render(time) {
        if (!ctx) return;

        // Smooth mouse lerp
        mouse.x += (mouse.targetX - mouse.x) * 0.06;
        mouse.y += (mouse.targetY - mouse.y) * 0.06;
        mouse.intensity *= 0.985;

        // Clear with clean transparency
        ctx.clearRect(0, 0, width, height);

        // 1. Draw Ambient Fluid Chromatic Orbs
        for (let i = 0; i < orbs.length; i++) {
            const orb = orbs[i];
            
            // Morph position gently
            orb.x += orb.vx;
            orb.y += orb.vy;

            if (orb.x < 0.05 || orb.x > 0.95) orb.vx *= -1;
            if (orb.y < 0.05 || orb.y > 0.95) orb.vy *= -1;

            const px = orb.x * width;
            const py = orb.y * height;
            const currentRadius = orb.radius * (1 + Math.sin(time * 0.0008 + i) * 0.08);

            const gradient = ctx.createRadialGradient(px, py, 0, px, py, currentRadius);
            gradient.addColorStop(0, `rgba(${orb.color}, ${orb.alpha})`);
            gradient.addColorStop(0.5, `rgba(${orb.color}, ${orb.alpha * 0.4})`);
            gradient.addColorStop(1, `rgba(${orb.color}, 0)`);

            ctx.fillStyle = gradient;
            ctx.beginPath();
            ctx.arc(px, py, currentRadius, 0, Math.PI * 2);
            ctx.fill();
        }

        // 2. Draw Interactive Cursor Aura
        if (mouse.x > -500 && mouse.y > -500) {
            const auraRadius = mouse.radius;
            const auraGrad = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, auraRadius);
            auraGrad.addColorStop(0, `rgba(45, 212, 191, ${0.08 * (0.4 + mouse.intensity * 0.6)})`);
            auraGrad.addColorStop(0.4, `rgba(56, 189, 248, ${0.04 * (0.4 + mouse.intensity * 0.6)})`);
            auraGrad.addColorStop(1, 'rgba(45, 212, 191, 0)');

            ctx.fillStyle = auraGrad;
            ctx.beginPath();
            ctx.arc(mouse.x, mouse.y, auraRadius, 0, Math.PI * 2);
            ctx.fill();
        }

        // 3. Draw Floating Stardust Particles
        for (let i = 0; i < particles.length; i++) {
            particles[i].update();
            particles[i].draw(ctx);
        }

        if (isRunning) {
            animationId = requestAnimationFrame(render);
        }
    }

    function start() {
        if (!isRunning) {
            isRunning = true;
            animationId = requestAnimationFrame(render);
        }
    }

    function pause() {
        isRunning = false;
        if (animationId) {
            cancelAnimationFrame(animationId);
            animationId = null;
        }
    }

    function debounce(func, wait) {
        let timeout;
        return function(...args) {
            clearTimeout(timeout);
            timeout = setTimeout(() => func.apply(this, args), wait);
        };
    }

    // Expose global init
    window.initAmbientCanvas = initCanvas;
    window.initParticles = function() {
        if (!canvas) initCanvas();
        start();
    };
    window.destroyParticles = function() {
        // Keep running in background across pages for persistent 2026 ambient atmosphere
    };

    // Auto initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initCanvas);
    } else {
        initCanvas();
    }
})();
