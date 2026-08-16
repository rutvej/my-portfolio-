// Inline SVG Icons (Refined 2026 Set)
const ICONS = {
    github: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>`,
    linkedin: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>`,
    email: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>`,
    externalLink: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>`,
    arrowDown: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline></svg>`,
    medium: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/></svg>`,
    menu: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>`,
    xClose: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`
};

let typingCleanup = null;

/* ========================================
   PAGE RENDERERS
   ======================================== */

function renderHome() {
    const data = PORTFOLIO_DATA.personal;
    return `
        <div class="hero">
            <div class="container hero-content">
                <div class="hero-greeting-pill">
                    <span class="glow-dot"></span>
                    <span>Backend · Cloud · Distributed Systems</span>
                </div>
                <h1 class="hero-name">${data.name}</h1>
                <p class="hero-role">${data.title} &mdash; <span class="accent">${data.tagline}</span></p>
                <h2 class="hero-subtitle"><span class="typing-text"></span><span class="typing-cursor">|</span></h2>
                <p class="hero-bio">${data.bio}</p>
                <div class="hero-cta">
                    <a href="#/projects" class="btn btn-primary">Explore Projects</a>
                    <a href="#/contact" class="btn btn-outline">Get in Touch</a>
                    <a href="${data.resumeUrl}" target="_blank" rel="noopener" class="btn btn-ghost">Resume ↗</a>
                </div>
                <div class="hero-stats">
                    ${data.stats.map(stat => `
                        <div class="hero-stat">
                            <span class="hero-stat-number">${stat.number}</span>
                            <span class="hero-stat-label">${stat.label}</span>
                        </div>
                    `).join('')}
                </div>
                <div class="hero-socials socials">
                    <a href="${data.socials.github}" target="_blank" rel="noopener" class="social-link" aria-label="GitHub">${ICONS.github}</a>
                    <a href="${data.socials.linkedin}" target="_blank" rel="noopener" class="social-link" aria-label="LinkedIn">${ICONS.linkedin}</a>
                    <a href="${data.socials.blog}" target="_blank" rel="noopener" class="social-link" aria-label="Medium Blog">${ICONS.medium}</a>
                    <a href="${data.socials.email}" class="social-link" aria-label="Email">${ICONS.email}</a>
                </div>
            </div>
            <div class="scroll-indicator">
                <a href="#/about" aria-label="Scroll to About">${ICONS.arrowDown}</a>
            </div>
        </div>
    `;
}

function renderAbout() {
    const data = PORTFOLIO_DATA;
    return `
        <div class="section">
            <div class="container">
                <h2 class="section-title reveal">About Me</h2>
                <p class="section-subtitle reveal reveal-delay-1">Architecting backend systems, event-driven pipelines, and developer tooling.</p>
                
                <div class="split about-content" style="gap: var(--space-12);">
                    <div class="reveal reveal-delay-1">
                        <div class="about-photo-container">
                            <div class="about-photo">
                                <div class="initials">${data.personal.name.split(' ').map(n => n[0]).join('')}</div>
                            </div>
                        </div>
                    </div>
                    <div class="reveal reveal-delay-2">
                        <p class="about-text">${data.personal.bio}</p>
                        <blockquote class="philosophy">
                            "The best systems are often invisible. They don't change what happens when everything works — they quietly step in only when something doesn't."
                        </blockquote>
                        <div class="about-stats">
                            ${data.personal.stats.map(stat => `
                                <div class="stat-card">
                                    <div class="about-stat-number">${stat.number}</div>
                                    <div class="about-stat-label">${stat.label}</div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>

                <!-- Skills & Stack -->
                <div style="margin-top: var(--space-16);">
                    <h3 class="reveal" style="font-size: var(--fs-2xl); font-weight: 700; margin-bottom: var(--space-6); color: var(--text-primary);">Skills & Tech Stack</h3>
                    <div class="grid-3">
                        ${data.skills.map((category, idx) => `
                            <div class="skill-category card reveal reveal-delay-${(idx % 4) + 1}">
                                <h4 class="skill-category-heading">${category.category}</h4>
                                <div class="skill-category-badges">
                                    ${category.items.map(item => `<span class="badge">${item}</span>`).join('')}
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <!-- Education -->
                <div style="margin-top: var(--space-16);">
                    <h3 class="reveal" style="font-size: var(--fs-2xl); font-weight: 700; margin-bottom: var(--space-6); color: var(--text-primary);">Education</h3>
                    <div class="card reveal reveal-delay-1" style="max-width: 620px;">
                        <h4 style="font-size: var(--fs-lg); font-weight: 700; color: var(--text-primary); margin-bottom: 4px;">${data.education[0].degree}</h4>
                        <p style="color: var(--accent); font-weight: 500; margin-bottom: 6px;">${data.education[0].institution}</p>
                        <p style="color: var(--text-secondary); font-size: var(--fs-sm);">${data.education[0].period} · ${data.education[0].details}</p>
                        <p style="color: var(--text-muted); font-size: var(--fs-xs); font-family: var(--font-mono); margin-top: 6px;">CGPA: ${data.education[0].cgpa}</p>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function renderProjects() {
    const data = PORTFOLIO_DATA;
    return `
        <div class="section">
            <div class="container">
                <h2 class="section-title reveal">Open Source Projects</h2>
                <p class="section-subtitle reveal reveal-delay-1">Developer tooling, autonomous incident investigation, and systems engineering.</p>
                <div class="projects-grid" style="display: grid; grid-template-columns: 1fr; gap: var(--space-6);">
                    ${data.projects.map((project, idx) => `
                        <div class="project-card card ${project.featured ? 'featured' : ''} reveal reveal-delay-${(idx % 4) + 1}" style="padding: var(--space-8);">
                            <div class="project-card-header">
                                <div>
                                    <span class="project-type-label">${project.type}</span>
                                    <h3 class="project-card-title">${project.name}</h3>
                                </div>
                                <div class="project-card-links">
                                    ${project.githubUrl ? `<a href="${project.githubUrl}" target="_blank" rel="noopener" class="btn btn-outline" style="display: inline-flex; align-items: center; gap: 8px;">${ICONS.github} View on GitHub</a>` : ''}
                                    ${project.liveUrl ? `<a href="${project.liveUrl}" target="_blank" rel="noopener" class="btn btn-primary" style="display: inline-flex; align-items: center; gap: 8px;">${ICONS.externalLink} Live Demo</a>` : ''}
                                </div>
                            </div>
                            <p class="project-card-description" style="margin-top: var(--space-4); margin-bottom: var(--space-6);">${project.description}</p>
                            <div class="project-card-tech">
                                ${project.tech.map(t => `<span class="badge" style="padding: 6px 14px;">${t}</span>`).join('')}
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
}

function renderBlog() {
    const data = PORTFOLIO_DATA;
    return `
        <div class="section">
            <div class="container">
                <h2 class="section-title reveal">Writing & Articles</h2>
                <p class="section-subtitle reveal reveal-delay-1">Deep dives into distributed trust, offline protocols, and Go package architectures on Medium.</p>
                <div class="blog-list" style="display: flex; flex-direction: column; gap: var(--space-6);">
                    ${data.blog.map((post, idx) => {
                        const dateObj = new Date(post.date);
                        const formattedDate = dateObj.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
                        return `
                            <article class="blog-card card reveal reveal-delay-${(idx % 4) + 1}">
                                <div class="blog-card-date">${formattedDate}</div>
                                <div class="blog-card-content">
                                    <h3 class="blog-card-title"><a href="${post.url}" target="_blank" rel="noopener">${post.title}</a></h3>
                                    <p class="blog-card-excerpt">${post.excerpt}</p>
                                    <a href="${post.url}" target="_blank" rel="noopener" class="blog-card-link">Read on Medium ↗</a>
                                </div>
                            </article>
                        `;
                    }).join('')}
                </div>
            </div>
        </div>
    `;
}

function renderContact() {
    const data = PORTFOLIO_DATA.personal;
    return `
        <div class="section">
            <div class="container">
                <div class="contact">
                    <h2 class="section-title reveal">Let's Connect</h2>
                    <p class="contact-description reveal reveal-delay-1">
                        Interested in discussing backend systems, distributed architecture, open-source tooling, or exploring new engineering ideas.
                    </p>
                    <div class="contact-info reveal reveal-delay-2">
                        <a href="${data.socials.email}" class="contact-item">
                            ${ICONS.email}
                            <span>${data.email}</span>
                        </a>
                        <a href="${data.socials.linkedin}" target="_blank" rel="noopener" class="contact-item">
                            ${ICONS.linkedin}
                            <span>LinkedIn Profile</span>
                        </a>
                        <a href="${data.socials.github}" target="_blank" rel="noopener" class="contact-item">
                            ${ICONS.github}
                            <span>github.com/rutvej</span>
                        </a>
                        <a href="${data.socials.blog}" target="_blank" rel="noopener" class="contact-item">
                            ${ICONS.medium}
                            <span>Medium Articles</span>
                        </a>
                    </div>
                    <div class="socials reveal reveal-delay-3" style="justify-content: center; margin-top: var(--space-8);">
                        <a href="${data.socials.github}" target="_blank" rel="noopener" class="social-link" aria-label="GitHub">${ICONS.github}</a>
                        <a href="${data.socials.linkedin}" target="_blank" rel="noopener" class="social-link" aria-label="LinkedIn">${ICONS.linkedin}</a>
                        <a href="${data.socials.blog}" target="_blank" rel="noopener" class="social-link" aria-label="Medium">${ICONS.medium}</a>
                        <a href="${data.socials.email}" class="social-link" aria-label="Email">${ICONS.email}</a>
                    </div>
                </div>
            </div>
        </div>
    `;
}

/* ========================================
   ROUTER
   ======================================== */

const routes = {
    '': renderHome,
    '/': renderHome,
    '/about': renderAbout,
    '/projects': renderProjects,
    '/blog': renderBlog,
    '/contact': renderContact
};

function handleRoute() {
    let hash = window.location.hash.replace('#', '') || '/';
    if (!routes[hash]) hash = '/';

    const appElement = document.getElementById('app');
    const isHome = (hash === '' || hash === '/');

    if (typingCleanup) { typingCleanup(); typingCleanup = null; }

    // Page exit transition
    appElement.style.transition = 'opacity 0.2s ease, transform 0.2s ease';
    appElement.style.opacity = '0';
    appElement.style.transform = 'translateY(6px)';

    setTimeout(() => {
        appElement.innerHTML = routes[hash]();
        appElement.classList.toggle('is-home', isHome);

        window.scrollTo({ top: 0, behavior: 'instant' });
        updateNavLinks(hash);

        // Page enter transition
        requestAnimationFrame(() => {
            appElement.style.transition = 'opacity 0.3s cubic-bezier(0.16, 1, 0.3, 1), transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)';
            appElement.style.opacity = '1';
            appElement.style.transform = 'translateY(0)';
        });

        // Typing effect on Home
        if (isHome && window.initTypingEffect) {
            const typingEl = document.querySelector('.typing-text');
            if (typingEl) typingCleanup = window.initTypingEffect(typingEl);
        }

        // Scroll reveal on all sections
        if (window.initScrollReveal) window.initScrollReveal();

    }, 180);
}

function updateNavLinks(hash) {
    document.querySelectorAll('.nav-links .nav-link').forEach(link => {
        link.classList.remove('active');
        const linkHash = link.getAttribute('href').replace('#', '');
        if (linkHash === hash || (hash === '/' && linkHash === '/')) {
            link.classList.add('active');
        }
    });
}

/* ========================================
   MOBILE NAV
   ======================================== */

function initNav() {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            const isOpen = navLinks.classList.toggle('open');
            hamburger.innerHTML = isOpen ? ICONS.xClose : `<span></span><span></span><span></span>`;
            hamburger.setAttribute('aria-expanded', isOpen);
        });

        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('open');
                hamburger.innerHTML = `<span></span><span></span><span></span>`;
                hamburger.setAttribute('aria-expanded', 'false');
            });
        });
    }
}

/* ========================================
   INIT
   ======================================== */

document.addEventListener('DOMContentLoaded', () => {
    window.addEventListener('hashchange', handleRoute);
    handleRoute();
    initNav();
    if (window.initSmoothScroll) window.initSmoothScroll();
});
