function revealOnScroll() {
            const elements = document.querySelectorAll('.header h1, .verse, .scroll-container');
            const windowHeight = window.innerHeight;
          
            elements.forEach(el => {
                const elTop = el.getBoundingClientRect().top;
                if (elTop < windowHeight - 100 && !el.classList.contains('visible')) {
                    el.classList.add('visible');
                    if (el.classList.contains('scroll-container')) {
                        setTimeout(() => {
                            const paper = el.querySelector('.scroll-paper');
                            paper.classList.add('unrolled');
                        }, 500); // Delay unrolling after reveal
                    }
                }
            });
        }
      
        // Particle animation for falling stars (end-times theme)
        function createParticles() {
            const body = document.body;
            setInterval(() => {
                const particle = document.createElement('div');
                particle.className = 'particle';
                particle.style.width = `${Math.random() * 3 + 1}px`;
                particle.style.height = particle.style.width;
                particle.style.left = `${Math.random() * 100}vw`;
                particle.style.top = '-10px';
                particle.style.animationDuration = `${Math.random() * 3 + 2}s`;
                particle.style.opacity = Math.random() * 0.5 + 0.5;
              
                body.appendChild(particle);
              
                setTimeout(() => {
                    particle.remove();
                }, parseFloat(particle.style.animationDuration) * 1000);
            }, 200);
        }
      
        // Canvas animation: Simple glowing cross with subtle pulse
        function animateCanvas() {
            const canvas = document.getElementById('animationCanvas');
            const ctx = canvas.getContext('2d');
            const centerX = canvas.width / 2;
            const centerY = canvas.height / 2;
            let scale = 1;
            let growing = true;
          
            function drawCross() {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
              
                // Draw vertical bar (increased vertical length)
                ctx.fillStyle = 'rgba(210, 180, 140, 0.8)';
                ctx.fillRect(centerX - 20, centerY - 150, 40, 300);
              
                // Draw horizontal bar (moved further up)
                ctx.fillRect(centerX - 100, centerY - 80, 200, 40);
              
                // Add glow effect
                ctx.shadowColor = 'rgba(255, 215, 0, 0.5)';
                ctx.shadowBlur = 20 * scale;
            }
          
            function animate() {
                if (growing) {
                    scale += 0.005;
                    if (scale >= 1.2) growing = false;
                } else {
                    scale -= 0.005;
                    if (scale <= 1) growing = true;
                }
              
                drawCross();
                requestAnimationFrame(animate);
            }
          
            animate();
        }
      
        // Initialize animations
        window.addEventListener('scroll', revealOnScroll);
        window.addEventListener('load', () => {
            revealOnScroll();
            createParticles();
            animateCanvas();
        });

