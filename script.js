// Load content from config.js and handle navigation
document.addEventListener('DOMContentLoaded', function() {
    // Load all content from config
    loadPersonalInfo();
    loadAboutSection();
    loadProjectsSection();
    loadBlogSection();
    
    // Setup navigation
    setupNavigation();
});

// Load personal information
function loadPersonalInfo() {
    // Update page title
    document.title = `${CONFIG.name} - Developer Portfolio`;
    
    // Update navigation logo
    document.getElementById('nav-logo').textContent = CONFIG.name;
    
    // Update hero section
    document.getElementById('hero-title').textContent = `Hello, I'm ${CONFIG.name}`;
    document.getElementById('hero-description').textContent = CONFIG.heroDescription;
}

// Load about section
function loadAboutSection() {
    // Update avatar
    document.getElementById('about-avatar').textContent = CONFIG.avatar;
    
    // Load bio paragraphs
    const bioContainer = document.getElementById('about-bio');
    bioContainer.innerHTML = '';
    CONFIG.bio.forEach(paragraph => {
        const p = document.createElement('p');
        p.textContent = paragraph;
        bioContainer.appendChild(p);
    });
    
    // Load skills
    const skillsContainer = document.getElementById('skills-container');
    skillsContainer.innerHTML = '';
    CONFIG.skills.forEach(skill => {
        const span = document.createElement('span');
        span.className = 'skill-tag';
        span.textContent = skill;
        skillsContainer.appendChild(span);
    });
}

// Load projects section
function loadProjectsSection() {
    const container = document.getElementById('projects-container');
    container.innerHTML = '';
    
    CONFIG.projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        
        // Create tech tags
        const techTags = project.technologies.map(tech => 
            `<span class="tech-tag">${tech}</span>`
        ).join('');
        
        // Create live demo link if exists
        const liveLink = project.liveUrl ? 
            `<a href="${project.liveUrl}" target="_blank" class="project-link">Live Demo</a>` : '';
        
        projectCard.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="project-tech">
                ${techTags}
            </div>
            <div class="project-links">
                <a href="${project.githubUrl}" target="_blank" class="project-link">View Code</a>
                ${liveLink}
            </div>
        `;
        
        container.appendChild(projectCard);
    });
}

// Load blog section
function loadBlogSection() {
    const container = document.getElementById('blog-container');
    container.innerHTML = '';
    
    CONFIG.blogPosts.forEach(post => {
        const blogCard = document.createElement('div');
        blogCard.className = 'blog-card';
        
        // Format date
        const date = new Date(post.date);
        const formattedDate = date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
        
        blogCard.innerHTML = `
            <div class="blog-image">${post.icon}</div>
            <div class="blog-content">
                <div class="blog-date">${formattedDate}</div>
                <h3>${post.title}</h3>
                <p class="blog-excerpt">${post.excerpt}</p>
                <a href="${post.filename}" class="blog-link">Read More</a>
            </div>
        `;
        
        container.appendChild(blogCard);
    });
}

// Setup navigation
function setupNavigation() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for fixed nav
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Update active nav link on scroll
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-links a');

    function updateActiveNavLink() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;
            
            if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        navItems.forEach(item => {
            item.style.color = 'var(--text-secondary)';
            if (item.getAttribute('href') === `#${current}`) {
                item.style.color = 'var(--accent)';
            }
        });
    }

    // Update on scroll
    window.addEventListener('scroll', updateActiveNavLink);
    
    // Initial update
    updateActiveNavLink();
}// Simple scroll navigation
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for fixed nav
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Update active nav link on scroll
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-links a');

    function updateActiveNavLink() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;
            
            if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        navItems.forEach(item => {
            item.style.color = 'var(--text-secondary)';
            if (item.getAttribute('href') === `#${current}`) {
                item.style.color = 'var(--accent)';
            }
        });
    }

    // Update on scroll
    window.addEventListener('scroll', updateActiveNavLink);
    
    // Initial update
    updateActiveNavLink();
});