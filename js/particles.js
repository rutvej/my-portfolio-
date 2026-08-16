let animationFrameId = null;
let particlesCanvas = null;
let ctx = null;
let particles = [];
let mouse = { x: 0, y: 0 };
let isActive = true;

class Particle {
    constructor(canvasWidth, canvasHeight) {
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
        this.x = Math.random() * canvasWidth;
        this.y = Math.random() * canvasHeight;
        this.z = Math.random() * 2 + 0.1; 
        this.size = (Math.random() * 2 + 1) / this.z;
        this.baseOpacity = Math.random() * 0.5 + 0.3;
        
        // Use accent color occasionally
        this.color = Math.random() > 0.8 ? '185, 80%, 55%' : '0, 0%, 90%'; 
        
        this.vx = (Math.random() - 0.5) * 0.2 / this.z;
        this.vy = (Math.random() - 0.5) * 0.2 / this.z;
        this.angle = Math.random() * Math.PI * 2;
        this.oscillationSpeed = Math.random() * 0.05 + 0.01;
    }

    update(mouseX, mouseY) {
        this.x += this.vx;
        this.y += this.vy;
        this.angle += this.oscillationSpeed;

        // Parallax effect
        const dx = (mouseX - this.canvasWidth / 2) * (0.005 / this.z);
        const dy = (mouseY - this.canvasHeight / 2) * (0.005 / this.z);

        this.x -= dx;
        this.y -= dy;

        // Wrap around
        if (this.x > this.canvasWidth) this.x = 0;
        if (this.x < 0) this.x = this.canvasWidth;
        if (this.y > this.canvasHeight) this.y = 0;
        if (this.y < 0) this.y = this.canvasHeight;
    }

    draw(ctx) {
        const opacity = this.baseOpacity + Math.sin(this.angle) * 0.2;
        ctx.fillStyle = `hsla(${this.color}, ${Math.max(0, opacity)})`;
        
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

function initParticles(canvas) {
    if (!canvas) return;
    particlesCanvas = canvas;
    ctx = particlesCanvas.getContext('2d');
    
    // Set size
    const resizeCanvas = () => {
        particlesCanvas.width = window.innerWidth;
        particlesCanvas.height = window.innerHeight;
        initParticlesArray();
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    window.addEventListener('mousemove', (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
    });

    document.addEventListener("visibilitychange", () => {
        isActive = !document.hidden;
    });

    animate();
}

function initParticlesArray() {
    particles = [];
    const numParticles = window.innerWidth < 768 ? 100 : 200;
    for (let i = 0; i < numParticles; i++) {
        particles.push(new Particle(particlesCanvas.width, particlesCanvas.height));
    }
}

function animate() {
    if (!ctx) return;
    
    if (isActive) {
        ctx.clearRect(0, 0, particlesCanvas.width, particlesCanvas.height);
        
        for (let i = 0; i < particles.length; i++) {
            particles[i].update(mouse.x, mouse.y);
            particles[i].draw(ctx);
            
            // Draw connections
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < 120) {
                    ctx.beginPath();
                    ctx.strokeStyle = `hsla(185, 80%, 55%, ${0.1 * (1 - distance / 120)})`;
                    ctx.lineWidth = 0.5;
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }
        }
    }
    
    animationFrameId = requestAnimationFrame(animate);
}

function destroyParticles() {
    if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
        animationFrameId = null;
    }
    particles = [];
    ctx = null;
    particlesCanvas = null;
}

window.initParticles = initParticles;
window.destroyParticles = destroyParticles;
