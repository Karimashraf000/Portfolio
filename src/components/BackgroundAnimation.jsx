import React, { useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';

const BackgroundAnimation = () => {
    const canvasRef = useRef(null);
    const { isDark } = useTheme();

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        const particles = [];
        const particleCount = 50;

        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.vx = (Math.random() - 0.5) * 1; // Velocity X
                this.vy = (Math.random() - 0.5) * 1; // Velocity Y
                this.size = Math.random() * 2 + 1;

                // Color based on theme
                if (isDark) {
                    this.color = `rgba(${Math.floor(Math.random() * 100 + 100)}, ${Math.floor(
                        Math.random() * 100 + 150
                    )}, 255, ${Math.random() * 0.5 + 0.2})`; // Blue-ish glow for dark mode
                } else {
                    this.color = `rgba(${Math.floor(Math.random() * 100 + 50)}, ${Math.floor(
                        Math.random() * 100 + 100
                    )}, 200, ${Math.random() * 0.5 + 0.2})`; // Darker blue/purple for light mode
                }
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;

                // Bounce off edges
                if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
                if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = this.color;
                ctx.shadowBlur = 10;
                ctx.shadowColor = this.color;
                ctx.fill();
            }
        }

        const init = () => {
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw connections
            particles.forEach((particle, index) => {
                particle.update();
                particle.draw();

                // Draw lines between close particles
                for (let j = index + 1; j < particles.length; j++) {
                    const dx = particle.x - particles[j].x;
                    const dy = particle.y - particles[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 150) {
                        ctx.beginPath();
                        if (isDark) {
                            ctx.strokeStyle = `rgba(100, 150, 255, ${0.1 - distance / 1500})`;
                        } else {
                            ctx.strokeStyle = `rgba(50, 100, 200, ${0.1 - distance / 1500})`;
                        }
                        ctx.lineWidth = 0.5;
                        ctx.moveTo(particle.x, particle.y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        init();
        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, [isDark]); // Re-run when theme changes

    return (
        <canvas
            ref={canvasRef}
            className="w-full h-full block"
        />
    );
};

export default BackgroundAnimation;
