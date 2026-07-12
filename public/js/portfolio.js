/* =============================================
   SHADAB BELIM - PORTFOLIO JAVASCRIPT
   Interactive Features & Animations (Enhanced)
   ============================================= */

document.addEventListener('DOMContentLoaded', () => {

    // ---- Preloader with smooth exit ----
    const preloader = document.getElementById('preloader');
    window.addEventListener('load', () => {
        setTimeout(() => {
            preloader.classList.add('hidden');
            document.body.style.overflow = '';
        }, 800);
    });

    // Fallback - hide preloader after 3 seconds max
    setTimeout(() => {
        preloader.classList.add('hidden');
        document.body.style.overflow = '';
    }, 3000);

    // ---- Initialize AOS with stagger ----
    AOS.init({
        duration: 800,
        easing: 'ease-out-cubic',
        once: true,
        offset: 80,
        disable: window.innerWidth < 768 ? 'phone' : false
    });

    // ---- Custom Cursor (enhanced with trail) ----
    const cursorDot = document.getElementById('cursor-dot');
    const cursorRing = document.getElementById('cursor-ring');
    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;

    if (window.innerWidth > 768) {
        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            cursorDot.style.left = mouseX + 'px';
            cursorDot.style.top = mouseY + 'px';
        });

        function animateRing() {
            ringX += (mouseX - ringX) * 0.12;
            ringY += (mouseY - ringY) * 0.12;
            cursorRing.style.left = ringX - 20 + 'px';
            cursorRing.style.top = ringY - 20 + 'px';
            requestAnimationFrame(animateRing);
        }
        animateRing();

        // Hover effect on interactive elements
        const interactiveElements = document.querySelectorAll('a, button, .btn, .glass-card, .skill-card, .interest-card, .project-card');
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', () => cursorRing.classList.add('hover'));
            el.addEventListener('mouseleave', () => cursorRing.classList.remove('hover'));
        });

        // ---- Mouse Glow Effect on Hero ----
        const heroSection = document.querySelector('.hero-section');
        if (heroSection) {
            heroSection.addEventListener('mousemove', (e) => {
                const rect = heroSection.getBoundingClientRect();
                const x = ((e.clientX - rect.left) / rect.width) * 100;
                const y = ((e.clientY - rect.top) / rect.height) * 100;
                heroSection.style.setProperty('--mouse-x', x + '%');
                heroSection.style.setProperty('--mouse-y', y + '%');
            });
        }
    }

    // ---- Enhanced Particles with Variety ----
    const particlesContainer = document.getElementById('particles-container');
    function createParticles() {
        const colors = ['#6C63FF', '#B24BF3', '#00D4FF', '#FF6B9D', '#00C9A7'];
        for (let i = 0; i < 60; i++) {
            const particle = document.createElement('div');
            particle.classList.add('particle');
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = Math.random() * 100 + '%';
            const size = Math.random() * 4 + 1;
            particle.style.width = size + 'px';
            particle.style.height = size + 'px';
            particle.style.background = colors[Math.floor(Math.random() * colors.length)];
            particle.style.animationDelay = Math.random() * 10 + 's';
            particle.style.animationDuration = (Math.random() * 8 + 5) + 's';
            // Randomize opacity
            particle.style.setProperty('--max-opacity', (Math.random() * 0.5 + 0.2).toFixed(2));
            particlesContainer.appendChild(particle);
        }
    }
    createParticles();

    // ---- Navigation ----
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section, .hero-section');

    // Scroll effect on navbar with smooth transition
    let lastScrollY = 0;
    let ticking = false;

    function updateNavbar() {
        if (window.scrollY > 80) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Hide/show navbar on scroll direction
        if (window.scrollY > lastScrollY && window.scrollY > 500) {
            navbar.style.transform = 'translateY(-100%)';
        } else {
            navbar.style.transform = 'translateY(0)';
        }
        lastScrollY = window.scrollY;
        ticking = false;
    }

    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(updateNavbar);
            ticking = true;
        }
    });

    // Mobile menu toggle
    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu on link click
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Active nav link on scroll (optimized with RAF)
    function updateActiveNav() {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('data-section') === current) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', updateActiveNav);

    // ---- Typewriter Effect (enhanced with natural typing) ----
    const typewriterElement = document.getElementById('typewriter');
    const roles = [
        'Software Engineer',
        'Full Stack Developer',
        'Laravel Developer',
        'Python Developer',
        'MCA Graduate',
        'Problem Solver'
    ];
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 80;

    function typeWriter() {
        const currentRole = roles[roleIndex];

        if (isDeleting) {
            typewriterElement.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 30 + Math.random() * 20; // Natural variation
        } else {
            typewriterElement.textContent = currentRole.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 60 + Math.random() * 60; // Natural typing variation
        }

        if (!isDeleting && charIndex === currentRole.length) {
            isDeleting = true;
            typingSpeed = 2500; // Pause at end
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            typingSpeed = 400; // Pause before typing next
        }

        setTimeout(typeWriter, typingSpeed);
    }

    typeWriter();

    // ---- Skill Bars Animation ----
    const skillBars = document.querySelectorAll('.skill-bar');
    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bar = entry.target;
                const level = bar.getAttribute('data-level');
                bar.style.setProperty('--skill-level', level + '%');
                // Add slight delay for stagger effect
                setTimeout(() => {
                    bar.classList.add('animated');
                }, Math.random() * 300);
                skillObserver.unobserve(bar);
            }
        });
    }, { threshold: 0.3 });

    skillBars.forEach(bar => skillObserver.observe(bar));

    // ---- Counter Animation (with easing) ----
    const statValues = document.querySelectorAll('.stat-value');
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const value = el.getAttribute('data-count');
                animateCounter(el, value);
                counterObserver.unobserve(el);
            }
        });
    }, { threshold: 0.5 });

    statValues.forEach(val => counterObserver.observe(val));

    function easeOutExpo(t) {
        return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
    }

    function animateCounter(element, targetValue) {
        const numericPart = parseInt(targetValue);
        const suffix = targetValue.replace(/[0-9]/g, '');
        const duration = 2500;
        const startTime = performance.now();

        function step(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easedProgress = easeOutExpo(progress);
            const currentValue = Math.floor(numericPart * easedProgress);
            
            element.textContent = currentValue + suffix;
            
            if (progress < 1) {
                requestAnimationFrame(step);
            } else {
                element.textContent = targetValue;
            }
        }
        requestAnimationFrame(step);
    }

    // ---- Back to Top Button ----
    const backToTop = document.getElementById('back-to-top');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });

    // ---- Smooth Scroll ----
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 70;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ---- Parallax Effect on Hero (with smooth interpolation) ----
    let heroParallaxRAF;
    let currentHeroTranslate = 0;
    let targetHeroTranslate = 0;
    
    function updateHeroParallax() {
        const scrolled = window.scrollY;
        const heroContent = document.querySelector('.hero-content');
        const heroBg = document.querySelector('.hero-bg-overlay');

        if (heroContent && scrolled < window.innerHeight) {
            targetHeroTranslate = scrolled * 0.12;
            currentHeroTranslate += (targetHeroTranslate - currentHeroTranslate) * 0.1;
            heroContent.style.transform = `translateY(${currentHeroTranslate}px)`;
            heroContent.style.opacity = 1 - (scrolled / (window.innerHeight * 0.7));
        }
        if (heroBg) {
            heroBg.style.transform = `translateY(${scrolled * 0.25}px)`;
        }
        heroParallaxRAF = requestAnimationFrame(updateHeroParallax);
    }
    updateHeroParallax();

    // ---- Enhanced 3D Tilt Effect on Cards ----
    if (window.innerWidth > 768) {
        const cards = document.querySelectorAll('.project-card, .achievement-card, .experience-card');
        cards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const rotateX = (y - centerY) / 25;
                const rotateY = (centerX - x) / 25;
                
                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px) scale(1.02)`;
                
                // Dynamic light reflection
                const gradX = (x / rect.width) * 100;
                const gradY = (y / rect.height) * 100;
                card.style.setProperty('--light-x', gradX + '%');
                card.style.setProperty('--light-y', gradY + '%');
            });

            card.addEventListener('mouseleave', () => {
                card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0) scale(1)';
                card.style.transition = 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
            });
            
            card.addEventListener('mouseenter', () => {
                card.style.transition = 'transform 0.1s ease';
            });
        });
    }

    // ---- Form Interaction with visual feedback ----
    const formInputs = document.querySelectorAll('.form-group input, .form-group textarea');
    formInputs.forEach(input => {
        input.addEventListener('focus', () => {
            input.parentElement.classList.add('focused');
        });
        input.addEventListener('blur', () => {
            if (!input.value) {
                input.parentElement.classList.remove('focused');
            }
        });
        
        // Character count for textarea
        if (input.tagName === 'TEXTAREA') {
            input.addEventListener('input', () => {
                const maxLength = 500;
                const remaining = maxLength - input.value.length;
                let counter = input.parentElement.querySelector('.char-counter');
                if (!counter) {
                    counter = document.createElement('span');
                    counter.classList.add('char-counter');
                    counter.style.cssText = 'position: absolute; bottom: 8px; right: 12px; font-size: 0.75rem; color: var(--text-muted); font-family: var(--font-mono);';
                    input.parentElement.style.position = 'relative';
                    input.parentElement.appendChild(counter);
                }
                counter.textContent = `${input.value.length}/${maxLength}`;
                counter.style.color = remaining < 50 ? '#FF6B6B' : 'var(--text-muted)';
            });
        }
    });

    // ---- AJAX Form Submission (Formspree) ----
    const contactForm = document.getElementById('contact-form');
    const successModal = document.getElementById('contact-success-modal');
    const closeModalBtn = document.getElementById('close-modal-btn');
    const submitBtn = contactForm ? contactForm.querySelector('.btn-submit') : null;

    if (contactForm && successModal && submitBtn) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Set button to loading state
            submitBtn.classList.add('loading');
            submitBtn.disabled = true;

            const formData = new FormData(contactForm);

            fetch(contactForm.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            })
            .then(response => {
                if (response.ok) {
                    // Show success modal
                    successModal.classList.add('active');
                    // Reset form and input focus styling
                    contactForm.reset();
                    formInputs.forEach(input => {
                        input.parentElement.classList.remove('focused');
                        const counter = input.parentElement.querySelector('.char-counter');
                        if (counter) counter.textContent = '0/500';
                    });
                } else {
                    response.json().then(data => {
                        if (Object.hasOwn(data, 'errors')) {
                            alert(data.errors.map(error => error.message).join(", "));
                        } else {
                            alert("Oops! There was a problem submitting your form.");
                        }
                    });
                }
            })
            .catch(error => {
                alert("Oops! There was a connection problem submitting your form.");
            })
            .finally(() => {
                // Restore button state
                submitBtn.classList.remove('loading');
                submitBtn.disabled = false;
            });
        });

        // Close modal handlers
        if (closeModalBtn) {
            closeModalBtn.addEventListener('click', () => {
                successModal.classList.remove('active');
            });
        }

        // Close modal on clicking overlay background
        successModal.addEventListener('click', (e) => {
            if (e.target === successModal) {
                successModal.classList.remove('active');
            }
        });
    }

    // ---- Magnetic Effect on Buttons ----
    if (window.innerWidth > 768) {
        const magneticBtns = document.querySelectorAll('.btn-primary');
        magneticBtns.forEach(btn => {
            btn.addEventListener('mousemove', (e) => {
                const rect = btn.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
            });

            btn.addEventListener('mouseleave', () => {
                btn.style.transform = 'translate(0, 0)';
                btn.style.transition = 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
            });
            
            btn.addEventListener('mouseenter', () => {
                btn.style.transition = 'transform 0.1s ease';
            });
        });
    }

    // ---- Reveal Animation for sections ----
    const revealSections = document.querySelectorAll('.section');
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
            }
        });
    }, { threshold: 0.05 });

    revealSections.forEach(section => sectionObserver.observe(section));

    // ---- Floating badges parallax on scroll ----
    const floatingBadges = document.querySelectorAll('.floating-badge');
    if (floatingBadges.length > 0 && window.innerWidth > 768) {
        window.addEventListener('scroll', () => {
            const scrolled = window.scrollY;
            floatingBadges.forEach((badge, index) => {
                const speed = 0.05 + (index * 0.02);
                badge.style.transform = `translateY(${-scrolled * speed}px)`;
            });
        });
    }

    // ---- Skill card number reveal on hover ----
    const skillCards = document.querySelectorAll('.skill-card');
    skillCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            const level = card.querySelector('.skill-level');
            if (level) {
                level.style.opacity = '1';
                level.style.transform = 'translateY(0)';
            }
        });
        card.addEventListener('mouseleave', () => {
            const level = card.querySelector('.skill-level');
            if (level) {
                level.style.opacity = '0';
                level.style.transform = 'translateY(5px)';
            }
        });
    });

    // ---- Easter Egg: Konami Code ----
    let konamiIndex = 0;
    const konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
    document.addEventListener('keydown', (e) => {
        if (e.keyCode === konamiCode[konamiIndex]) {
            konamiIndex++;
            if (konamiIndex === konamiCode.length) {
                document.body.style.animation = 'rainbow 2s linear infinite';
                konamiIndex = 0;
                setTimeout(() => {
                    document.body.style.animation = '';
                }, 5000);
            }
        } else {
            konamiIndex = 0;
        }
    });

    // ---- Performance: Cleanup on page hide ----
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            if (heroParallaxRAF) cancelAnimationFrame(heroParallaxRAF);
        } else {
            updateHeroParallax();
        }
    });

});
