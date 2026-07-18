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
    setTimeout(() => {
        preloader.classList.add('hidden');
        document.body.style.overflow = '';
    }, 3000);

    // ---- Initialize AOS ----
    AOS.init({
        duration: 800,
        easing: 'ease-out-cubic',
        once: true,
        offset: 80,
        disable: window.innerWidth < 768 ? 'phone' : false
    });

    // ---- Custom Cursor ----
    const cursorDot = document.getElementById('cursor-dot');
    const cursorRing = document.getElementById('cursor-ring');
    let mouseX = 0, mouseY = 0, ringX = 0, ringY = 0;

    if (window.innerWidth > 768) {
        document.addEventListener('mousemove', (e) => { mouseX = e.clientX; mouseY = e.clientY; cursorDot.style.left = mouseX + 'px'; cursorDot.style.top = mouseY + 'px'; });
        function animateRing() { ringX += (mouseX - ringX) * 0.12; ringY += (mouseY - ringY) * 0.12; cursorRing.style.left = ringX - 20 + 'px'; cursorRing.style.top = ringY - 20 + 'px'; requestAnimationFrame(animateRing); }
        animateRing();
        document.querySelectorAll('a, button, .btn, .glass-card, .skill-card, .interest-card, .project-card').forEach(el => {
            el.addEventListener('mouseenter', () => cursorRing.classList.add('hover'));
            el.addEventListener('mouseleave', () => cursorRing.classList.remove('hover'));
        });
        const heroSection = document.querySelector('.hero-section');
        if (heroSection) {
            heroSection.addEventListener('mousemove', (e) => {
                const rect = heroSection.getBoundingClientRect();
                heroSection.style.setProperty('--mouse-x', ((e.clientX - rect.left) / rect.width * 100) + '%');
                heroSection.style.setProperty('--mouse-y', ((e.clientY - rect.top) / rect.height * 100) + '%');
            });
        }
    }

    // ---- Enhanced Particles ----
    const particlesContainer = document.getElementById('particles-container');
    (function createParticles() {
        const colors = ['#6C63FF', '#B24BF3', '#00D4FF', '#FF6B9D', '#00C9A7'];
        for (let i = 0; i < 60; i++) {
            const particle = document.createElement('div');
            particle.classList.add('particle');
            particle.style.cssText = `left:${Math.random()*100}%;top:${Math.random()*100}%;width:${Math.random()*4+1}px;height:${Math.random()*4+1}px;background:${colors[Math.floor(Math.random()*colors.length)]};animation-delay:${Math.random()*10}s;animation-duration:${Math.random()*8+5}s;--max-opacity:${(Math.random()*0.5+0.2).toFixed(2)};`;
            particlesContainer.appendChild(particle);
        }
    })();

    // ---- Navigation ----
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section, .hero-section');
    let lastScrollY = 0, ticking = false;

    function updateNavbar() {
        if (window.scrollY > 80) navbar.classList.add('scrolled'); else navbar.classList.remove('scrolled');
        navbar.style.transform = window.scrollY > lastScrollY && window.scrollY > 500 ? 'translateY(-100%)' : 'translateY(0)';
        lastScrollY = window.scrollY; ticking = false;
    }
    window.addEventListener('scroll', () => { if (!ticking) { requestAnimationFrame(updateNavbar); ticking = true; } });
    navToggle.addEventListener('click', () => { navToggle.classList.toggle('active'); navMenu.classList.toggle('active'); });
    navLinks.forEach(link => link.addEventListener('click', () => { navToggle.classList.remove('active'); navMenu.classList.remove('active'); }));

    function updateActiveNav() {
        let current = '';
        sections.forEach(section => { const t = section.offsetTop - 100; const h = section.offsetHeight; if (window.scrollY >= t && window.scrollY < t + h) current = section.getAttribute('id'); });
        navLinks.forEach(link => { link.classList.remove('active'); if (link.getAttribute('data-section') === current) link.classList.add('active'); });
    }
    window.addEventListener('scroll', updateActiveNav);

    // ---- Typewriter Effect ----
    const typewriterElement = document.getElementById('typewriter');
    const roles = ['Software Engineer', 'Full Stack Developer', 'Laravel Developer', 'Python Developer', 'MCA Graduate', 'Problem Solver'];
    let roleIndex = 0, charIndex = 0, isDeleting = false, typingSpeed = 80;
    function typeWriter() {
        const currentRole = roles[roleIndex];
        if (isDeleting) { typewriterElement.textContent = currentRole.substring(0, charIndex - 1); charIndex--; typingSpeed = 30 + Math.random() * 20; }
        else { typewriterElement.textContent = currentRole.substring(0, charIndex + 1); charIndex++; typingSpeed = 60 + Math.random() * 60; }
        if (!isDeleting && charIndex === currentRole.length) { isDeleting = true; typingSpeed = 2500; }
        else if (isDeleting && charIndex === 0) { isDeleting = false; roleIndex = (roleIndex + 1) % roles.length; typingSpeed = 400; }
        setTimeout(typeWriter, typingSpeed);
    }
    typeWriter();

    // ---- Skill Bars Animation ----
    document.querySelectorAll('.skill-bar').forEach(bar => {
        new IntersectionObserver((entries) => { entries.forEach(e => { if (e.isIntersecting) { const l = bar.getAttribute('data-level'); bar.style.setProperty('--skill-level', l+'%'); setTimeout(() => bar.classList.add('animated'), Math.random()*300); e.target.disconnect = true; } }); }, { threshold: 0.3 }).observe(bar);
    });

    // ---- Counter Animation ----
    document.querySelectorAll('.stat-value').forEach(el => {
        new IntersectionObserver((entries) => { entries.forEach(e => {
            if (e.isIntersecting) {
                const val = el.getAttribute('data-count');
                const num = parseInt(val), suffix = val.replace(/[0-9]/g, '');
                const dur = 2500, start = performance.now();
                function step(now) { const p = Math.min((now-start)/dur,1); const ep = p===1?1:1-Math.pow(2,-10*p); el.textContent = Math.floor(num*ep)+suffix; if (p<1) requestAnimationFrame(step); else el.textContent = val; }
                requestAnimationFrame(step);
                e.target.disconnect = true;
            }
        }); }, { threshold: 0.5 }).observe(el);
    });

    // ---- Back to Top ----
    const backToTop = document.getElementById('back-to-top');
    window.addEventListener('scroll', () => { backToTop.classList.toggle('visible', window.scrollY > 500); });

    // ---- Smooth Scroll ----
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) { e.preventDefault(); const t = document.querySelector(this.getAttribute('href')); if (t) window.scrollTo({ top: t.offsetTop - 70, behavior: 'smooth' }); });
    });

    // ---- Parallax Effect on Hero ----
    let heroParallaxRAF, curTrans = 0, tgtTrans = 0;
    function updateHeroParallax() {
        const scrolled = window.scrollY;
        const heroContent = document.querySelector('.hero-content');
        const heroBg = document.querySelector('.hero-bg-overlay');
        if (heroContent && scrolled < window.innerHeight) { tgtTrans = scrolled * 0.12; curTrans += (tgtTrans - curTrans) * 0.1; heroContent.style.transform = `translateY(${curTrans}px)`; heroContent.style.opacity = 1 - (scrolled / (window.innerHeight * 0.7)); }
        if (heroBg) heroBg.style.transform = `translateY(${scrolled * 0.25}px)`;
        heroParallaxRAF = requestAnimationFrame(updateHeroParallax);
    }
    updateHeroParallax();

    // ---- 3D Tilt Effect ----
    if (window.innerWidth > 768) {
        document.querySelectorAll('.project-card, .achievement-card, .experience-card').forEach(card => {
            card.addEventListener('mousemove', (e) => { const r = card.getBoundingClientRect(); const x = e.clientX - r.left; const y = e.clientY - r.top; card.style.transform = `perspective(1000px) rotateX(${(y-r.height/2)/25}deg) rotateY(${(r.width/2-x)/25}deg) translateY(-5px) scale(1.02)`; card.style.setProperty('--light-x', (x/r.width*100)+'%'); card.style.setProperty('--light-y', (y/r.height*100)+'%'); });
            card.addEventListener('mouseleave', () => { card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0) scale(1)'; card.style.transition = 'transform 0.5s cubic-bezier(0.4,0,0.2,1)'; });
            card.addEventListener('mouseenter', () => { card.style.transition = 'transform 0.1s ease'; });
        });
    }

    // ---- Form Interaction ----
    const formInputs = document.querySelectorAll('.form-group input, .form-group textarea');
    formInputs.forEach(input => {
        input.addEventListener('focus', () => input.parentElement.classList.add('focused'));
        input.addEventListener('blur', () => { if (!input.value) input.parentElement.classList.remove('focused'); });
        if (input.tagName === 'TEXTAREA') {
            input.addEventListener('input', () => {
                const max = 500, rem = max - input.value.length;
                let c = input.parentElement.querySelector('.char-counter');
                if (!c) { c = document.createElement('span'); c.className = 'char-counter'; c.style.cssText = 'position:absolute;bottom:8px;right:12px;font-size:0.75rem;color:var(--text-muted);font-family:var(--font-mono);'; input.parentElement.style.position = 'relative'; input.parentElement.appendChild(c); }
                c.textContent = `${input.value.length}/${max}`; c.style.color = rem < 50 ? '#FF6B6B' : 'var(--text-muted)';
            });
        }
    });

    // ---- AJAX Form Submission ----
    const contactForm = document.getElementById('contact-form');
    const successModal = document.getElementById('contact-success-modal');
    const closeModalBtn = document.getElementById('close-modal-btn');
    const submitBtn = contactForm ? contactForm.querySelector('.btn-submit') : null;
    if (contactForm && successModal && submitBtn) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            submitBtn.classList.add('loading'); submitBtn.disabled = true;
            const fd = new FormData(contactForm);
            fetch(contactForm.action, { method: 'POST', body: fd })
                .then(r => r.json()).then(d => {
                    if (d.success) { successModal.classList.add('active'); contactForm.reset(); formInputs.forEach(i => { i.parentElement.classList.remove('focused'); const c = i.parentElement.querySelector('.char-counter'); if (c) c.textContent = '0/500'; }); }
                    else alert(d.message || 'Oops! There was a problem.');
                }).catch(() => alert('Connection problem.')).finally(() => { submitBtn.classList.remove('loading'); submitBtn.disabled = false; });
        });
        if (closeModalBtn) closeModalBtn.addEventListener('click', () => successModal.classList.remove('active'));
        successModal.addEventListener('click', (e) => { if (e.target === successModal) successModal.classList.remove('active'); });
    }

    // ---- Magnetic Effect ----
    if (window.innerWidth > 768) {
        document.querySelectorAll('.btn-primary').forEach(btn => {
            btn.addEventListener('mousemove', (e) => { const r = btn.getBoundingClientRect(); btn.style.transform = `translate(${(e.clientX-r.left-r.width/2)*0.2}px,${(e.clientY-r.top-r.height/2)*0.2}px)`; });
            btn.addEventListener('mouseleave', () => { btn.style.transform = 'translate(0,0)'; btn.style.transition = 'transform 0.4s cubic-bezier(0.4,0,0.2,1)'; });
            btn.addEventListener('mouseenter', () => { btn.style.transition = 'transform 0.1s ease'; });
        });
    }

    // ---- Floating badges parallax ----
    const floatingBadges = document.querySelectorAll('.floating-badge');
    if (floatingBadges.length > 0 && window.innerWidth > 768) {
        window.addEventListener('scroll', () => { const s = window.scrollY; floatingBadges.forEach((b, i) => { b.style.transform = `translateY(${-s*(0.05+i*0.02)}px)`; }); });
    }

    // ---- Skill card number reveal ----
    document.querySelectorAll('.skill-card').forEach(card => {
        card.addEventListener('mouseenter', () => { const l = card.querySelector('.skill-level'); if (l) { l.style.opacity = '1'; l.style.transform = 'translateY(0)'; } });
        card.addEventListener('mouseleave', () => { const l = card.querySelector('.skill-level'); if (l) { l.style.opacity = '0'; l.style.transform = 'translateY(5px)'; } });
    });

    // ---- Section reveal ----
    document.querySelectorAll('.section').forEach(section => {
        new IntersectionObserver((entries) => { entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('revealed'); e.target.disconnect = true; } }); }, { threshold: 0.05 }).observe(section);
    });

    // ---- Easter Egg ----
    let konamiIdx = 0;
    const konamiCode = [38,38,40,40,37,39,37,39,66,65];
    document.addEventListener('keydown', (e) => {
        if (e.keyCode === konamiCode[konamiIdx]) { konamiIdx++; if (konamiIdx === konamiCode.length) { document.body.style.animation = 'rainbow 2s linear infinite'; konamiIdx = 0; setTimeout(() => document.body.style.animation = '', 5000); } }
        else konamiIdx = 0;
    });

    // ---- Performance Cleanup ----
    document.addEventListener('visibilitychange', () => { if (document.hidden) { if (heroParallaxRAF) cancelAnimationFrame(heroParallaxRAF); } else updateHeroParallax(); });

    // ================================================================
    //  VOICE ENGINE - ROBUST, RELIABLE, NATURAL
    //  Root cause of failure: Chrome blocks speech without user gesture,
    //  stopPropagation on voice toggle, and async voice loading.
    // ================================================================
    const voiceToggle = document.getElementById('voice-toggle');
    const voiceStatus = document.getElementById('voice-status');
    const soundWaves = document.getElementById('sound-waves');
    const heroImageWrapper = document.querySelector('.hero-image-wrapper');
    let isVoiceEnabled = true;
    let isSpeaking = false;
    let voiceReady = false;
    let voiceRetryCount = 0;
    let pendingNarrations = [];

    // Warm up SpeechSynthesis (Chrome needs this)
    if (window.speechSynthesis) {
        window.speechSynthesis.getVoices();
        // Chrome fires onvoiceschanged async
        window.speechSynthesis.onvoiceschanged = () => { voiceReady = true; };
        // Fallback: if voices never load, mark ready after 2s
        setTimeout(() => { if (!voiceReady) voiceReady = true; }, 2000);
    }

    function pickBestVoice() {
        try {
            const voices = window.speechSynthesis.getVoices();
            if (!voices || voices.length === 0) return null;
            // Natural human voices (skip Google which sound robotic)
            const naturalNames = ['Samantha', 'Karen', 'Moira', 'Tessa', 'Fiona', 'Veena', 'David', 'Mark', 'Daniel', 'Zira', 'Hazel', 'Amy', 'Emma'];
            for (const name of naturalNames) {
                const found = voices.find(v => v.name.includes(name));
                if (found) return found;
            }
            // Fallback: any English non-Google voice
            return voices.find(v => v.lang.startsWith('en') && !v.name.includes('Google')) || voices.find(v => v.lang.startsWith('en')) || voices[0];
        } catch(e) { return null; }
    }

    function speakText(text, callback) {
        if (!isVoiceEnabled || !window.speechSynthesis) { if (callback) callback(); return; }

        // Cancel any previous speech safely
        try { window.speechSynthesis.cancel(); } catch(e) {}

        isSpeaking = true;
        if (voiceStatus) { voiceStatus.textContent = 'Speaking...'; voiceStatus.classList.add('speaking'); }
        if (soundWaves) soundWaves.classList.add('active');
        if (heroImageWrapper) heroImageWrapper.classList.add('speaking');

        const utterance = new SpeechSynthesisUtterance(text);
        utterance.rate = 0.88;
        utterance.pitch = 1.05;
        utterance.volume = 0.9;

        const voice = pickBestVoice();
        if (voice) utterance.voice = voice;

        const done = () => {
            isSpeaking = false;
            if (voiceStatus) { voiceStatus.textContent = 'Ready'; voiceStatus.classList.remove('speaking'); }
            if (soundWaves) soundWaves.classList.remove('active');
            if (heroImageWrapper) heroImageWrapper.classList.remove('speaking');
            // Process next in queue
            if (pendingNarrations.length > 0) {
                const next = pendingNarrations.shift();
                setTimeout(() => speakText(next.text, next.callback), 300);
            } else if (callback) callback();
        };

        utterance.onend = done;
        utterance.onerror = (e) => {
            // Retry once on error
            if (voiceRetryCount < 2) { voiceRetryCount++; setTimeout(() => speakText(text, callback), 500); return; }
            voiceRetryCount = 0;
            done();
        };

        try { window.speechSynthesis.speak(utterance); } catch(e) { done(); }
    }

    // ---- AUTO INTRO ON USER INTERACTION ----
    // Chrome blocks SpeechSynthesis without user gesture.
    // We wait for ANY click/touch on the document.
    let introPlayed = false;

    const tryPlayIntro = () => {
        if (introPlayed) return;
        introPlayed = true;
        // Small delay to let voice engine initialize
        setTimeout(() => {
            speakText("Hi, I'm Shadab Belim. Welcome to my portfolio. I'm a Software Engineer passionate about building scalable applications. Let me show you around.");
        }, 400);
    };

    // Try to play on first user interaction
    document.addEventListener('click', tryPlayIntro, { once: true });
    document.addEventListener('touchstart', tryPlayIntro, { once: true });

    // Also try after 3s for browsers that allow autoplay (Safari)
    setTimeout(() => {
        if (!introPlayed && voiceReady) tryPlayIntro();
    }, 3000);

    // ---- VOICE TOGGLE ----
    // IMPORTANT: NO stopPropagation here! It was blocking the intro trigger.
    if (voiceToggle) {
        voiceToggle.addEventListener('click', () => {
            isVoiceEnabled = !isVoiceEnabled;
            voiceToggle.classList.toggle('muted');
            const icon = voiceToggle.querySelector('i');
            if (icon) icon.className = isVoiceEnabled ? 'fas fa-volume-up' : 'fas fa-volume-mute';
            const txt = voiceToggle.querySelector('.voice-btn-text');
            if (txt) txt.textContent = isVoiceEnabled ? 'Narration' : 'Muted';
            if (!isVoiceEnabled && window.speechSynthesis) {
                try { window.speechSynthesis.cancel(); } catch(e) {}
                isSpeaking = false;
                pendingNarrations = [];
                if (voiceStatus) { voiceStatus.textContent = 'Muted'; voiceStatus.classList.remove('speaking'); }
                if (soundWaves) soundWaves.classList.remove('active');
                if (heroImageWrapper) heroImageWrapper.classList.remove('speaking');
            } else if (isVoiceEnabled && voiceStatus) {
                voiceStatus.textContent = 'Ready';
            }
        });
    }

    // ---- SCROLL NARRATION (Natural, once per section) ----
    const narratedSet = new Set();
    const narrationTexts = {
        hero: "Welcome to my portfolio. I'm Shadab Belim, a backend developer specializing in Laravel and scalable web applications.",
        about: "This section covers my background, my passion for software engineering, and what drives me as a developer.",
        education: "Here is my academic journey including my Masters in Computer Applications and my Bachelor's degree in Mathematics.",
        experience: "These are the companies where I've worked and the real-world impact I've created.",
        skills: "Here are the technologies I work with daily including Laravel, PHP, Python, JavaScript, and modern backend tools.",
        projects: "These are some of my best projects that showcase my development skills and ability to solve complex problems.",
        achievements: "Some milestones and accomplishments from my software engineering journey so far.",
        interests: "Beyond coding, these are the areas I'm passionate about exploring.",
        stats: "Some numbers that define my professional journey.",
        contact: "Feel free to reach out. I'm always open to new opportunities and collaborations."
    };

    const narrationObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !narratedSet.has(entry.target.id)) {
                narratedSet.add(entry.target.id);
                const text = narrationTexts[entry.target.id];
                if (text && isVoiceEnabled && !isSpeaking) {
                    speakText(text);
                } else if (text && isVoiceEnabled && isSpeaking) {
                    // Queue for later
                    pendingNarrations.push({ text, callback: null });
                }
            }
        });
    }, { threshold: 0.35 });

    document.querySelectorAll('[id]').forEach(section => {
        if (narrationTexts[section.id]) narrationObserver.observe(section);
    });

    // ================================================================
    //  AI ASSISTANT - ALIVE AVATAR
    //  Makes the profile image feel alive with CSS animations
    // ================================================================

    // ----- BLINK ANIMATION -----
    (function addBlinkEffect() {
        const img = document.querySelector('.hero-image-wrapper');
        if (!img) return;
        const blinkOverlay = document.createElement('div');
        blinkOverlay.className = 'avatar-blink';
        img.appendChild(blinkOverlay);
        // Random blinking
        function blink() {
            blinkOverlay.classList.add('blinking');
            setTimeout(() => blinkOverlay.classList.remove('blinking'), 150);
            setTimeout(blink, 2000 + Math.random() * 4000);
        }
        setTimeout(blink, 1000);
    })();

    // ----- AVATAR IDLE ANIMATION (subtle floating) -----
    const heroImg = document.querySelector('.hero-image');
    if (heroImg) {
        heroImg.classList.add('avatar-idle');
        // Mouse-follow for avatar (subtle)
        document.addEventListener('mousemove', (e) => {
            const rect = heroImg.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width - 0.5;
            const y = (e.clientY - rect.top) / rect.height - 0.5;
            if (!isSpeaking) {
                heroImg.style.transform = `perspective(600px) rotateY(${x * 3}deg) rotateX(${y * -3}deg)`;
            }
        });
        heroImg.addEventListener('mouseleave', () => {
            if (!isSpeaking) heroImg.style.transform = 'perspective(600px) rotateY(0) rotateX(0)';
        });
    }

    // ================================================================
    //  PREMIUM SCROLL ANIMATIONS (Unique per section)
    // ================================================================

    // --- About: slide-up + blur reveal ---
    (function aboutAnim() {
        const about = document.querySelector('.about-section');
        if (!about) return;
        const cards = about.querySelectorAll('.about-image-card, .about-text-container');
        const highlights = about.querySelectorAll('.highlight-item');
        new IntersectionObserver((entries) => {
            entries.forEach(e => {
                if (e.isIntersecting) {
                    cards.forEach((c, i) => {
                        setTimeout(() => {
                            c.style.transition = 'all 0.9s cubic-bezier(0.16,1,0.3,1)';
                            c.style.opacity = '1';
                            c.style.transform = 'translateY(0)';
                        }, i * 150);
                    });
                    highlights.forEach((h, i) => {
                        setTimeout(() => {
                            h.style.transition = 'all 0.5s cubic-bezier(0.16,1,0.3,1)';
                            h.style.opacity = '1';
                            h.style.transform = 'translateY(0) scale(1)';
                        }, 400 + i * 100);
                    });
                    e.target.disconnect = true;
                }
            });
        }, { threshold: 0.1 }).observe(about);
        cards.forEach(c => { c.style.opacity = '0'; c.style.transform = 'translateY(50px)'; });
        highlights.forEach(h => { h.style.opacity = '0'; h.style.transform = 'translateY(20px) scale(0.95)'; });
    })();

    // --- Education: timeline stagger ---
    (function eduAnim() {
        const edu = document.querySelector('.education-section');
        if (!edu) return;
        const items = edu.querySelectorAll('.timeline-item');
        const dots = edu.querySelectorAll('.timeline-dot');
        const lines = edu.querySelectorAll('.timeline-line');
        new IntersectionObserver((entries) => {
            entries.forEach(e => {
                if (e.isIntersecting) {
                    items.forEach((item, i) => {
                        setTimeout(() => {
                            item.style.transition = 'all 0.7s cubic-bezier(0.16,1,0.3,1)';
                            item.style.opacity = '1';
                            item.style.transform = 'translateX(0)';
                            if (dots[i]) { dots[i].style.transition = 'all 0.5s ease'; dots[i].style.transform = 'scale(1)'; dots[i].style.boxShadow = '0 0 25px var(--primary-glow)'; }
                            if (lines[i]) { lines[i].style.transition = 'height 0.6s ease'; lines[i].style.height = '100%'; }
                        }, i * 200);
                    });
                    e.target.disconnect = true;
                }
            });
        }, { threshold: 0.15 }).observe(edu);
        items.forEach((item, i) => { item.style.opacity = '0'; item.style.transform = i % 2 === 0 ? 'translateX(-50px)' : 'translateX(50px)'; });
        dots.forEach(d => d.style.transform = 'scale(0)');
        lines.forEach(l => l.style.height = '0');
    })();

    // --- Experience: scale reveal ---
    (function expAnim() {
        const exp = document.querySelector('.experience-section');
        if (!exp) return;
        const cards = exp.querySelectorAll('.experience-card');
        new IntersectionObserver((entries) => {
            entries.forEach(e => {
                if (e.isIntersecting) {
                    cards.forEach((card, i) => {
                        setTimeout(() => {
                            card.style.transition = 'all 0.7s cubic-bezier(0.16,1,0.3,1)';
                            card.style.opacity = '1';
                            card.style.transform = 'scale(1)';
                        }, i * 150);
                    });
                    e.target.disconnect = true;
                }
            });
        }, { threshold: 0.1 }).observe(exp);
        cards.forEach(c => { c.style.opacity = '0'; c.style.transform = 'scale(0.85)'; });
    })();

    // --- Skills: stagger + slide-up ---
    (function skillsAnim() {
        const skill = document.querySelector('.skills-section');
        if (!skill) return;
        const cats = skill.querySelectorAll('.skill-category');
        new IntersectionObserver((entries) => {
            entries.forEach(e => {
                if (e.isIntersecting) {
                    cats.forEach((cat, i) => {
                        setTimeout(() => {
                            cat.style.transition = 'all 0.8s cubic-bezier(0.16,1,0.3,1)';
                            cat.style.opacity = '1';
                            cat.style.transform = 'translateY(0)';
                            cat.querySelectorAll('.skill-card').forEach((sc, j) => {
                                sc.style.transition = `all 0.5s cubic-bezier(0.16,1,0.3,1) ${j * 0.06}s`;
                                sc.style.opacity = '1';
                                sc.style.transform = 'translateY(0)';
                            });
                        }, i * 120);
                    });
                    e.target.disconnect = true;
                }
            });
        }, { threshold: 0.1 }).observe(skill);
        cats.forEach(c => { c.style.opacity = '0'; c.style.transform = 'translateY(40px)'; c.querySelectorAll('.skill-card').forEach(sc => { sc.style.opacity = '0'; sc.style.transform = 'translateY(20px)'; }); });
    })();

    // --- Projects: scale + blur reveal ---
    (function projAnim() {
        const proj = document.querySelector('.projects-section');
        if (!proj) return;
        const cards = proj.querySelectorAll('.project-card');
        new IntersectionObserver((entries) => {
            entries.forEach(e => {
                if (e.isIntersecting) {
                    cards.forEach((card, i) => {
                        setTimeout(() => {
                            card.style.transition = 'all 0.8s cubic-bezier(0.16,1,0.3,1)';
                            card.style.opacity = '1';
                            card.style.transform = 'scale(1)';
                            card.style.filter = 'blur(0)';
                        }, i * 150);
                    });
                    e.target.disconnect = true;
                }
            });
        }, { threshold: 0.1 }).observe(proj);
        cards.forEach(c => { c.style.opacity = '0'; c.style.transform = 'scale(0.9)'; c.style.filter = 'blur(5px)'; });
    })();

    // --- Achievements: rotateY reveal ---
    (function achAnim() {
        const ach = document.querySelector('.achievements-section');
        if (!ach) return;
        const cards = ach.querySelectorAll('.achievement-card');
        new IntersectionObserver((entries) => {
            entries.forEach(e => {
                if (e.isIntersecting) {
                    cards.forEach((card, i) => {
                        setTimeout(() => {
                            card.style.transition = 'all 0.7s cubic-bezier(0.16,1,0.3,1)';
                            card.style.opacity = '1';
                            card.style.transform = 'rotateY(0deg) scale(1)';
                        }, i * 120);
                    });
                    e.target.disconnect = true;
                }
            });
        }, { threshold: 0.1 }).observe(ach);
        cards.forEach(c => { c.style.opacity = '0'; c.style.transform = 'rotateY(40deg) scale(0.9)'; });
    })();

    // --- Contact: fade-up ---
    (function contactAnim() {
        const contact = document.querySelector('.contact-section');
        if (!contact) return;
        const els = contact.querySelectorAll('.contact-info-card, .contact-form-card');
        new IntersectionObserver((entries) => {
            entries.forEach(e => {
                if (e.isIntersecting) {
                    els.forEach((el, i) => {
                        setTimeout(() => {
                            el.style.transition = 'all 0.8s cubic-bezier(0.16,1,0.3,1)';
                            el.style.opacity = '1';
                            el.style.transform = 'translateY(0)';
                        }, i * 150);
                    });
                    e.target.disconnect = true;
                }
            });
        }, { threshold: 0.1 }).observe(contact);
        els.forEach(el => { el.style.opacity = '0'; el.style.transform = 'translateY(40px)'; });
    })();

    // ---- Text reveal for headings ----
    document.querySelectorAll('.section-title, .about-subtitle').forEach(h => {
        if (h.querySelector('.gradient-text')) {
            new IntersectionObserver((entries) => { entries.forEach(e => { if (e.isIntersecting) { e.target.style.opacity = '1'; e.target.disconnect = true; } }); }, { threshold: 0.3 }).observe(h);
            return;
        }
        h.classList.add('txt-reveal');
        const txt = h.textContent;
        h.innerHTML = '';
        txt.split('').forEach((ch, i) => {
            const sp = document.createElement('span');
            sp.textContent = ch === ' ' ? '\u00A0' : ch;
            sp.style.transitionDelay = (i * 0.025) + 's';
            h.appendChild(sp);
        });
        new IntersectionObserver((entries) => { entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('txt-revealed'); e.target.disconnect = true; } }); }, { threshold: 0.3 }).observe(h);
    });

    // ---- Floating geometric shapes for hero ----
    const hSection = document.querySelector('.hero-section');
    if (hSection && !document.querySelector('.hero-geometric-shapes')) {
        const c = document.createElement('div'); c.className = 'hero-geometric-shapes';
        for (let i = 0; i < 5; i++) { const s = document.createElement('div'); s.className = 'geo-shape'; c.appendChild(s); }
        hSection.insertBefore(c, hSection.firstChild);
    }

    // ---- Mouse glow effect ----
    const mg = document.createElement('div'); mg.className = 'mouse-glow'; mg.style.pointerEvents = 'none';
    document.body.appendChild(mg);
    document.addEventListener('mousemove', (e) => { mg.style.left = e.clientX + 'px'; mg.style.top = e.clientY + 'px'; if (!mg.classList.contains('visible')) mg.classList.add('visible'); });
    document.addEventListener('mouseleave', () => mg.classList.remove('visible'));

    // ---- Animated gradient ----
    const hBgo = document.querySelector('.hero-bg-overlay');
    if (hBgo && !document.querySelector('.hero-gradient-anim')) {
        const g = document.createElement('div'); g.className = 'hero-gradient-anim';
        hBgo.parentNode.insertBefore(g, hBgo);
    }

    // ---- Buttons shine ----
    document.querySelectorAll('.btn-primary').forEach(b => b.classList.add('btn-shine'));

    // ================================================================
    //  BACKGROUND EFFECTS (Canvas-based)
    // ================================================================

    // --- Code Rain (Hero) ---
    (function codeRain() {
        const hero = document.querySelector('.hero-section');
        if (!hero) return;
        const canvas = document.createElement('canvas');
        canvas.style.cssText = 'position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:0;opacity:0.05;';
        canvas.width = hero.offsetWidth || window.innerWidth;
        canvas.height = hero.offsetHeight || window.innerHeight;
        hero.insertBefore(canvas, hero.firstChild);
        const ctx = canvas.getContext('2d');
        const chars = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン01{}[]<>/|&*#!';
        const cols = Math.floor(canvas.width / 14);
        const drops = Array(cols).fill(1);
        function draw() {
            ctx.fillStyle = 'rgba(10,10,26,0.05)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = '#6C63FF';
            ctx.font = '13px monospace';
            for (let i = 0; i < drops.length; i++) {
                ctx.fillText(chars[Math.floor(Math.random()*chars.length)], i*14, drops[i]*14);
                if (drops[i]*14 > canvas.height && Math.random() > 0.975) drops[i] = 0;
                drops[i]++;
            }
            requestAnimationFrame(draw);
        }
        draw();
        window.addEventListener('resize', () => { canvas.width = hero.offsetWidth; canvas.height = hero.offsetHeight; });
    })();

    // --- Skills Network ---
    (function skillsNetwork() {
        const container = document.querySelector('.skills-section');
        if (!container) return;
        const netCanvas = document.createElement('canvas');
        netCanvas.style.cssText = 'position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:0;opacity:0.1;';
        container.style.position = 'relative';
        container.insertBefore(netCanvas, container.firstChild);
        const resize = () => { netCanvas.width = container.offsetWidth; netCanvas.height = container.offsetHeight; };
        resize(); window.addEventListener('resize', resize);
        const ctx = netCanvas.getContext('2d');
        const nodes = Array.from({length:25}, () => ({ x: Math.random()*netCanvas.width, y: Math.random()*netCanvas.height, vx: (Math.random()-0.5)*0.5, vy: (Math.random()-0.5)*0.5, r: Math.random()*2+1 }));
        function draw() {
            ctx.clearRect(0,0,netCanvas.width,netCanvas.height);
            nodes.forEach((a,i) => {
                a.x+=a.vx; a.y+=a.vy;
                if (a.x<0||a.x>netCanvas.width) a.vx*=-1;
                if (a.y<0||a.y>netCanvas.height) a.vy*=-1;
                ctx.beginPath(); ctx.arc(a.x,a.y,a.r,0,Math.PI*2); ctx.fillStyle='#6C63FF'; ctx.fill();
                for (let j=i+1; j<nodes.length; j++) { const b=nodes[j]; const dx=a.x-b.x, dy=a.y-b.y, d=Math.sqrt(dx*dx+dy*dy); if (d<120) { ctx.beginPath(); ctx.moveTo(a.x,a.y); ctx.lineTo(b.x,b.y); ctx.strokeStyle=`rgba(108,99,255,${1-d/120})`; ctx.lineWidth=0.5; ctx.stroke(); } }
            });
            requestAnimationFrame(draw);
        }
        new IntersectionObserver((e) => { e.forEach(en => { if (en.isIntersecting) { draw(); en.target.disconnect = true; } }); }).observe(container);
    })();

});
