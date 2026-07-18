<?php
$data = include __DIR__ . '/portfolio-data.php';

function h($str) {
    return htmlspecialchars($str, ENT_QUOTES, 'UTF-8');
}
?><!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Shadab Belim - Software Engineer & Full Stack Developer Portfolio. Expert in PHP, Laravel, Python, Django, JavaScript, and Machine Learning.">
    <meta name="keywords" content="Shadab Belim, Software Engineer, Full Stack Developer, Laravel, PHP, Python, Django, Web Developer">
    <meta name="author" content="Shadab Belim">
    <meta name="theme-color" content="#6C63FF">
    <title>Shadab Belim | Software Engineer & Full Stack Developer</title>

    <link rel="icon" type="image/svg+xml" href="favicon.svg">
    <link rel="shortcut icon" href="favicon.svg">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600&family=Outfit:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet">

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">

    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">

    <link rel="stylesheet" href="css/portfolio.css">
</head>
<body>

    <div id="preloader">
        <div class="preloader-inner">
            <div class="preloader-ring"></div>
            <div class="preloader-ring"></div>
            <div class="preloader-ring"></div>
            <span class="preloader-text">SB</span>
        </div>
    </div>

    <div id="particles-container"></div>

    <div class="mesh-gradient-bg"></div>

    <div class="cursor-dot" id="cursor-dot"></div>
    <div class="cursor-ring" id="cursor-ring"></div>

    <nav class="navbar" id="navbar">
        <div class="nav-container">
            <a href="#hero" class="nav-logo">
                <span class="logo-bracket">&lt;</span>
                <span class="logo-text">SB</span>
                <span class="logo-bracket">/&gt;</span>
            </a>
            <div class="nav-menu" id="nav-menu">
                <a href="#hero" class="nav-link active" data-section="hero"><i class="fas fa-home"></i><span>Home</span></a>
                <a href="#about" class="nav-link" data-section="about"><i class="fas fa-user"></i><span>About</span></a>
                <a href="#education" class="nav-link" data-section="education"><i class="fas fa-graduation-cap"></i><span>Education</span></a>
                <a href="#experience" class="nav-link" data-section="experience"><i class="fas fa-briefcase"></i><span>Experience</span></a>
                <a href="#skills" class="nav-link" data-section="skills"><i class="fas fa-cogs"></i><span>Skills</span></a>
                <a href="#projects" class="nav-link" data-section="projects"><i class="fas fa-folder-open"></i><span>Projects</span></a>
                <a href="#contact" class="nav-link" data-section="contact"><i class="fas fa-envelope"></i><span>Contact</span></a>
            </div>
            <button class="nav-toggle" id="nav-toggle" aria-label="Toggle navigation">
                <span class="hamburger-line"></span>
                <span class="hamburger-line"></span>
                <span class="hamburger-line"></span>
            </button>
        </div>
    </nav>

    <!-- HERO SECTION -->
    <section id="hero" class="hero-section" data-narrate="Welcome to my portfolio. I'm Shadab Belim, a Laravel Backend Developer with experience building scalable backend systems and enterprise applications.">
        <div class="hero-bg-overlay"></div>
        <div class="hero-grid-pattern"></div>
        <div class="hero-aurora"></div>
        <div class="hero-content">
            <div class="hero-left" data-aos="fade-right" data-aos-duration="1000">
                <div class="hero-status-badge">
                    <span class="status-dot"></span>
                    <span>Available for opportunities</span>
                </div>
                <div class="hero-greeting">
                    <span class="greeting-line"></span>
                    <span class="greeting-text">Hello, I'm</span>
                </div>
                <h1 class="hero-name">
                    <span class="name-first">Shadab</span>
                    <span class="name-last">Belim</span>
                </h1>
                <div class="hero-typewriter">
                    <span class="typewriter-prefix">I'm a </span>
                    <span class="typewriter-text" id="typewriter"></span>
                    <span class="typewriter-cursor">|</span>
                </div>
                <p class="hero-description">
                    Passionate software developer crafting scalable web applications with expertise in Laravel, Django, Python & JavaScript. Turning complex problems into elegant digital solutions.
                </p>
                <div class="hero-info-chips">
                    <div class="info-chip">
                        <i class="fas fa-map-marker-alt"></i>
                        <span><?= h($data['location']) ?></span>
                    </div>
                    <div class="info-chip">
                        <i class="fas fa-phone-alt"></i>
                        <span><?= h($data['phone']) ?></span>
                    </div>
                    <div class="info-chip">
                        <i class="fas fa-envelope"></i>
                        <span><?= h($data['email']) ?></span>
                    </div>
                </div>
                <div class="hero-cta">
                    <a href="#contact" class="btn btn-primary btn-glow">
                        <span>Let's Talk</span>
                        <i class="fas fa-arrow-right"></i>
                    </a>
                    <a href="#projects" class="btn btn-outline btn-glass">
                        <span>View Projects</span>
                        <i class="fas fa-external-link-alt"></i>
                    </a>
                </div>
                <div class="hero-socials">
                    <a href="<?= h($data['social']['linkedin']) ?>" target="_blank" rel="noopener" class="social-link" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
                    <a href="<?= h($data['social']['github']) ?>" target="_blank" rel="noopener" class="social-link" aria-label="GitHub"><i class="fab fa-github"></i></a>
                    <a href="mailto:<?= h($data['email']) ?>" class="social-link" aria-label="Email"><i class="fas fa-envelope"></i></a>
                </div>
            </div>
            <div class="hero-right" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200">
                <div class="hero-image-wrapper">
                    <div class="hero-image-ring"></div>
                    <div class="hero-image-ring hero-image-ring-2"></div>
                    <div class="hero-image-glow"></div>
                    <div class="hero-image-blob"></div>
                    <img src="images/profile-hero.png" alt="Shadab Belim" class="hero-image">
                    <div class="sound-waves" id="sound-waves">
                        <span></span><span></span><span></span><span></span><span></span>
                    </div>
                    <div class="floating-badge badge-1"><i class="fab fa-laravel"></i><span>Laravel</span></div>
                    <div class="floating-badge badge-2"><i class="fab fa-python"></i><span>Python</span></div>
                    <div class="floating-badge badge-3"><i class="fab fa-js-square"></i><span>JavaScript</span></div>
                    <div class="floating-badge badge-4"><i class="fab fa-php"></i><span>PHP</span></div>
                </div>
            </div>
        </div>
        <div class="scroll-indicator">
            <div class="mouse"><div class="wheel"></div></div>
            <span>Scroll Down</span>
        </div>
    </section>

    <!-- ABOUT SECTION -->
    <section id="about" class="section about-section" data-narrate="This section tells you more about me, my background, passion for backend development, and my professional journey.">
        <div class="section-bg-pattern"></div>
        <div class="container">
            <div class="section-header" data-aos="fade-up">
                <span class="section-tag"><i class="fas fa-user"></i> Get to know me</span>
                <h2 class="section-title">About <span class="gradient-text">Me</span></h2>
                <div class="section-line"></div>
            </div>
            <div class="about-content">
                <div class="about-image-container" data-aos="fade-right" data-aos-duration="800">
                    <div class="about-image-card">
                        <div class="about-image-bg"></div>
                        <img src="images/profile-about.png" alt="Shadab Belim" class="about-image">
                        <div class="about-experience-badge">
                            <span class="exp-number">2+</span>
                            <span class="exp-text">Years<br>Experience</span>
                        </div>
                    </div>
                </div>
                <div class="about-text-container" data-aos="fade-left" data-aos-duration="800" data-aos-delay="200">
                    <h3 class="about-subtitle">Software Engineer & Full Stack Developer</h3>
                    <p class="about-description"><?= h($data['about']) ?></p>
                    <p class="about-description"><?= h($data['about_extra']) ?></p>
                    <div class="about-highlights">
                        <div class="highlight-item">
                            <div class="highlight-icon"><i class="fas fa-code"></i></div>
                            <div class="highlight-text"><h4>Clean Code</h4><p>Writing maintainable, scalable code</p></div>
                        </div>
                        <div class="highlight-item">
                            <div class="highlight-icon"><i class="fas fa-rocket"></i></div>
                            <div class="highlight-text"><h4>Fast Learner</h4><p>Quickly adapting to new technologies</p></div>
                        </div>
                        <div class="highlight-item">
                            <div class="highlight-icon"><i class="fas fa-lightbulb"></i></div>
                            <div class="highlight-text"><h4>Problem Solver</h4><p>400+ DSA problems solved</p></div>
                        </div>
                        <div class="highlight-item">
                            <div class="highlight-icon"><i class="fas fa-users"></i></div>
                            <div class="highlight-text"><h4>Team Player</h4><p>Experience in collaborative development</p></div>
                        </div>
                    </div>
                    <a href="#contact" class="btn btn-primary about-cta">
                        <span>Download Resume</span>
                        <i class="fas fa-download"></i>
                    </a>
                </div>
            </div>
        </div>
    </section>

    <!-- EDUCATION SECTION -->
    <section id="education" class="section education-section" data-narrate="Here is my academic journey and qualifications.">
        <div class="container">
            <div class="section-header" data-aos="fade-up">
                <span class="section-tag"><i class="fas fa-graduation-cap"></i> My Academic Journey</span>
                <h2 class="section-title">Education & <span class="gradient-text">Qualifications</span></h2>
                <div class="section-line"></div>
            </div>
            <div class="education-timeline">
                <?php foreach ($data['education'] as $eduIndex => $edu): ?>
                <div class="timeline-item" data-aos="fade-up" data-aos-delay="<?= $eduIndex * 150 ?>">
                    <div class="timeline-marker">
                        <div class="timeline-dot"><i class="<?= h($edu['icon']) ?>"></i></div>
                        <?php if ($eduIndex < count($data['education']) - 1): ?>
                        <div class="timeline-line"></div>
                        <?php endif; ?>
                    </div>
                    <div class="timeline-card glass-card">
                        <div class="timeline-card-header">
                            <span class="timeline-year"><i class="fas fa-calendar-alt"></i> <?= h($edu['year']) ?></span>
                            <span class="timeline-grade"><i class="fas fa-star"></i> <?= h($edu['grade']) ?></span>
                        </div>
                        <h3 class="timeline-degree"><?= h($edu['degree']) ?></h3>
                        <p class="timeline-institution"><i class="fas fa-building"></i> <?= h($edu['institution']) ?></p>
                    </div>
                </div>
                <?php endforeach; ?>
            </div>
        </div>
    </section>

    <!-- EXPERIENCE SECTION -->
    <section id="experience" class="section experience-section" data-narrate="These are the companies and projects where I have worked and the impact I created.">
        <div class="section-bg-pattern"></div>
        <div class="container">
            <div class="section-header" data-aos="fade-up">
                <span class="section-tag"><i class="fas fa-briefcase"></i> Where I've Worked</span>
                <h2 class="section-title">Work <span class="gradient-text">Experience</span></h2>
                <div class="section-line"></div>
            </div>
            <div class="exp-timeline">
                <?php foreach ($data['experience'] as $expIndex => $exp): ?>
                <div class="exp-timeline-item" data-aos="fade-up" data-aos-delay="<?= $expIndex * 200 ?>">
                    <div class="exp-timeline-marker" style="--marker-gradient: <?= h($exp['gradient']) ?>">
                        <div class="exp-timeline-dot">
                            <i class="<?= h($exp['logo']) ?>"></i>
                        </div>
                        <div class="exp-timeline-line"></div>
                    </div>
                    <div class="exp-timeline-card glass-card" style="--card-gradient: <?= h($exp['gradient2']) ?>">
                        <div class="exp-timeline-card-glow"></div>
                        <div class="exp-card-top">
                            <span class="exp-duration-badge"><i class="fas fa-calendar-alt"></i> <?= h($exp['period']) ?></span>
                        </div>
                        <h3 class="exp-role"><?= h($exp['role']) ?></h3>
                        <p class="exp-company"><i class="fas fa-building"></i> <?= h($exp['company']) ?></p>
                        <div class="exp-divider"></div>
                        <ul class="exp-description-list">
                            <?php foreach ($exp['description'] as $desc): ?>
                            <li><i class="fas fa-arrow-right"></i><span><?= h($desc) ?></span></li>
                            <?php endforeach; ?>
                        </ul>
                        <div class="exp-tech-badges">
                            <?php foreach ($exp['technologies'] as $tech): ?>
                            <span class="exp-tech-badge"><?= h($tech) ?></span>
                            <?php endforeach; ?>
                        </div>
                    </div>
                </div>
                <?php endforeach; ?>
            </div>
        </div>
    </section>

    <!-- SKILLS SECTION -->
    <section id="skills" class="section skills-section" data-narrate="Here are the technologies I work with including Laravel, PHP, MySQL, JavaScript, Git, REST APIs, and modern backend architecture.">
        <div class="container">
            <div class="section-header" data-aos="fade-up">
                <span class="section-tag"><i class="fas fa-cogs"></i> What I Know</span>
                <h2 class="section-title">Technical <span class="gradient-text">Skills</span></h2>
                <div class="section-line"></div>
            </div>
            <div class="skills-categories">
                <?php $catIndex = 0; ?>
                <?php foreach ($data['skills'] as $category => $skills): ?>
                <div class="skill-category" data-aos="fade-up" data-aos-delay="<?= $catIndex * 100 ?>">
                    <h3 class="category-title">
                        <?php
                        $catIcon = 'fas fa-tools';
                        if ($category === 'Programming Languages') $catIcon = 'fas fa-code';
                        elseif ($category === 'Frontend Development') $catIcon = 'fas fa-paint-brush';
                        elseif ($category === 'Backend Development') $catIcon = 'fas fa-server';
                        elseif ($category === 'Database') $catIcon = 'fas fa-database';
                        ?>
                        <i class="<?= $catIcon ?>"></i>
                        <?= h($category) ?>
                    </h3>
                    <div class="skills-grid">
                        <?php foreach ($skills as $skill): ?>
                        <div class="skill-card glass-card">
                            <div class="skill-icon-wrapper"><i class="<?= h($skill['icon']) ?>"></i></div>
                            <span class="skill-name"><?= h($skill['name']) ?></span>
                            <div class="skill-bar-container">
                                <div class="skill-bar" data-level="<?= (int)$skill['level'] ?>">
                                    <span class="skill-level"><?= (int)$skill['level'] ?>%</span>
                                </div>
                            </div>
                        </div>
                        <?php endforeach; ?>
                    </div>
                </div>
                <?php $catIndex++; ?>
                <?php endforeach; ?>
            </div>
        </div>
    </section>

    <!-- PROJECTS SECTION -->
    <section id="projects" class="section projects-section" data-narrate="These are some of my best projects that demonstrate my development skills and problem-solving ability.">
        <div class="section-bg-pattern"></div>
        <div class="section-bg-image" style="background-image: url('images/projects-bg.png');"></div>
        <div class="container">
            <div class="section-header" data-aos="fade-up">
                <span class="section-tag"><i class="fas fa-folder-open"></i> My Work</span>
                <h2 class="section-title">Featured <span class="gradient-text">Projects</span></h2>
                <div class="section-line"></div>
            </div>
            <div class="projects-grid">
                <?php foreach ($data['projects'] as $projIndex => $project): ?>
                <div class="project-card glass-card" data-aos="fade-up" data-aos-delay="<?= $projIndex * 150 ?>" style="--project-color: <?= h($project['color']) ?>">
                    <div class="project-card-glow"></div>
                    <div class="project-header">
                        <div class="project-icon" style="background: linear-gradient(135deg, <?= h($project['color']) ?>33, <?= h($project['color']) ?>11);">
                            <i class="<?= h($project['icon']) ?>" style="color: <?= h($project['color']) ?>"></i>
                        </div>
                        <div class="project-links">
                            <a href="#" class="project-link-btn" aria-label="View Project"><i class="fas fa-external-link-alt"></i></a>
                        </div>
                    </div>
                    <h3 class="project-title"><?= h($project['title']) ?></h3>
                    <p class="project-description"><?= h($project['description']) ?></p>
                    <div class="project-features">
                        <?php foreach ($project['features'] as $feature): ?>
                        <span class="feature-tag" style="--tag-color: <?= h($project['color']) ?>">
                            <i class="fas fa-check"></i> <?= h($feature) ?>
                        </span>
                        <?php endforeach; ?>
                    </div>
                </div>
                <?php endforeach; ?>
            </div>
        </div>
    </section>

    <!-- ACHIEVEMENTS SECTION -->
    <section id="achievements" class="section achievements-section" data-narrate="These are some milestones and accomplishments in my software engineering journey.">
        <div class="container">
            <div class="section-header" data-aos="fade-up">
                <span class="section-tag"><i class="fas fa-trophy"></i> Recognition</span>
                <h2 class="section-title">Achievements & <span class="gradient-text">Awards</span></h2>
                <div class="section-line"></div>
            </div>
            <div class="achievements-grid">
                <?php foreach ($data['achievements'] as $achIndex => $achievement): ?>
                <div class="achievement-card glass-card" data-aos="zoom-in" data-aos-delay="<?= $achIndex * 150 ?>">
                    <div class="achievement-icon-bg"><i class="<?= h($achievement['icon']) ?>"></i></div>
                    <div class="achievement-content">
                        <h3><?= h($achievement['title']) ?></h3>
                        <p><?= h($achievement['description']) ?></p>
                    </div>
                </div>
                <?php endforeach; ?>
            </div>
        </div>
    </section>

    <!-- INTERESTS SECTION -->
    <section id="interests" class="section interests-section" data-narrate="Here are my interests and passions beyond coding.">
        <div class="section-bg-pattern"></div>
        <div class="container">
            <div class="section-header" data-aos="fade-up">
                <span class="section-tag"><i class="fas fa-heart"></i> What I Love</span>
                <h2 class="section-title">Interests & <span class="gradient-text">Passions</span></h2>
                <div class="section-line"></div>
            </div>
            <div class="interests-grid">
                <?php foreach ($data['interests'] as $intIndex => $interest): ?>
                <div class="interest-card" data-aos="flip-up" data-aos-delay="<?= $intIndex * 100 ?>">
                    <div class="interest-icon"><i class="<?= h($interest['icon']) ?>"></i></div>
                    <span class="interest-name"><?= h($interest['name']) ?></span>
                </div>
                <?php endforeach; ?>
            </div>
        </div>
    </section>

    <!-- STATS SECTION -->
    <section id="stats" class="section stats-section" data-narrate="Some numbers that define my journey so far.">
        <div class="stats-bg-overlay" style="background-image: url('images/stats-bg.png');"></div>
        <div class="container">
            <div class="section-header" data-aos="fade-up">
                <span class="section-tag"><i class="fas fa-chart-bar"></i> By The Numbers</span>
                <h2 class="section-title">Portfolio <span class="gradient-text">Statistics</span></h2>
                <div class="section-line"></div>
            </div>
            <div class="stats-grid">
                <?php foreach ($data['stats'] as $statIndex => $stat): ?>
                <div class="stat-card glass-card" data-aos="zoom-in" data-aos-delay="<?= $statIndex * 100 ?>">
                    <div class="stat-icon-wrapper"><i class="<?= h($stat['icon']) ?>"></i></div>
                    <div class="stat-value" data-count="<?= h($stat['value']) ?>"><?= h($stat['value']) ?></div>
                    <div class="stat-label"><?= h($stat['label']) ?></div>
                    <div class="stat-decoration"></div>
                </div>
                <?php endforeach; ?>
            </div>
        </div>
    </section>

    <!-- CONTACT SECTION -->
    <section id="contact" class="section contact-section" data-narrate="Feel free to contact me. I'm always open to exciting opportunities and collaborations.">
        <div class="section-bg-pattern"></div>
        <div class="container">
            <div class="section-header" data-aos="fade-up">
                <span class="section-tag"><i class="fas fa-paper-plane"></i> Get In Touch</span>
                <h2 class="section-title">Let's Work <span class="gradient-text">Together</span></h2>
                <div class="section-line"></div>
                <p class="section-description">I'm always interested in discussing new projects, innovative ideas, and opportunities related to software development, web development, and technology.</p>
            </div>
            <div class="contact-content">
                <div class="contact-info-grid" data-aos="fade-right" data-aos-duration="800">
                    <div class="contact-info-card glass-card">
                        <div class="contact-info-icon"><i class="fas fa-envelope"></i></div>
                        <h3>Email</h3>
                        <a href="mailto:<?= h($data['email']) ?>"><?= h($data['email']) ?></a>
                    </div>
                    <div class="contact-info-card glass-card">
                        <div class="contact-info-icon"><i class="fas fa-phone-alt"></i></div>
                        <h3>Phone</h3>
                        <a href="tel:<?= h($data['phone']) ?>"><?= h($data['phone']) ?></a>
                    </div>
                    <div class="contact-info-card glass-card">
                        <div class="contact-info-icon"><i class="fas fa-map-marker-alt"></i></div>
                        <h3>Location</h3>
                        <a href="https://www.google.com/maps/search/<?= urlencode($data['location']) ?>" target="_blank" rel="noopener"><?= h($data['location']) ?></a>
                </div>
                <div class="contact-form-wrapper" data-aos="fade-left" data-aos-duration="800" data-aos-delay="200">
                    <div class="contact-form-card glass-card">
                        <form action="send-mail.php" method="POST" id="contact-form">
                            <div class="form-row">
                                <div class="form-group">
                                    <label for="contact-name"><i class="fas fa-user"></i> Your Name</label>
                                    <input type="text" id="contact-name" name="name" required placeholder="John Doe">
                                </div>
                                <div class="form-group">
                                    <label for="contact-email"><i class="fas fa-envelope"></i> Your Email</label>
                                    <input type="email" id="contact-email" name="email" required placeholder="john@example.com">
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="contact-subject"><i class="fas fa-pen"></i> Subject</label>
                                <input type="text" id="contact-subject" name="subject" required placeholder="Project Discussion">
                            </div>
                            <div class="form-group">
                                <label for="contact-message"><i class="fas fa-comment-alt"></i> Message</label>
                                <textarea id="contact-message" name="message" rows="5" required placeholder="Tell me about your project..."></textarea>
                            </div>
                            <button type="submit" class="btn btn-primary btn-submit">
                                <span>Send Message</span>
                                <i class="fas fa-paper-plane"></i>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- FOOTER -->
    <footer class="footer">
        <div class="footer-wave">
            <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
            </svg>
        </div>
        <div class="container">
            <div class="footer-content">
                <div class="footer-brand">
                    <a href="#hero" class="footer-logo">
                        <span class="logo-bracket">&lt;</span>
                        <span class="logo-text">Shadab Belim</span>
                        <span class="logo-bracket">/&gt;</span>
                    </a>
                    <p>Building digital experiences that make a difference.</p>
                </div>
                <div class="footer-links">
                    <h4>Quick Links</h4>
                    <a href="#about">About</a>
                    <a href="#skills">Skills</a>
                    <a href="#projects">Projects</a>
                    <a href="#contact">Contact</a>
                </div>
                <div class="footer-social">
                    <h4>Connect</h4>
                    <div class="social-links">
                        <a href="<?= h($data['social']['linkedin']) ?>" target="_blank" rel="noopener" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
                        <a href="<?= h($data['social']['github']) ?>" target="_blank" rel="noopener" aria-label="GitHub"><i class="fab fa-github"></i></a>
                        <a href="mailto:<?= h($data['email']) ?>" aria-label="Email"><i class="fas fa-envelope"></i></a>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; <?= date('Y') ?> Shadab Belim. Crafted with <i class="fas fa-heart" style="color: #FF6B6B;"></i> passion</p>
            </div>
        </div>
    </footer>

    <!-- Success Modal -->
    <div id="contact-success-modal" class="modal-overlay">
        <div class="modal-card glass-card">
            <div class="modal-icon"><i class="fas fa-paper-plane"></i></div>
            <h3>Message Sent!</h3>
            <p>Thank you for reaching out! Your message was submitted successfully, and I will get back to you as soon as possible.</p>
            <button type="button" id="close-modal-btn" class="btn btn-primary"><span>Close</span></button>
        </div>
    </div>

    <a href="#hero" class="back-to-top" id="back-to-top" aria-label="Back to top">
        <i class="fas fa-chevron-up"></i>
    </a>

    <div class="voice-control-bar" id="voice-control-bar">
        <button class="voice-btn" id="voice-toggle" aria-label="Toggle voice narration">
            <i class="fas fa-volume-up"></i>
            <span class="voice-btn-text">Narration</span>
        </button>
        <span class="voice-status" id="voice-status">Ready</span>
    </div>

    <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
    <script src="js/portfolio.js"></script>
</body>
</html>
