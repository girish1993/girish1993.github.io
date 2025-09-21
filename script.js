// Navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');
    let isTransitioning = false;

    function showSection(targetId) {
        console.log('Switching to section:', targetId); // Debug log
        
        if (isTransitioning) {
            console.log('Transition in progress, skipping');
            return;
        }
        
        const targetSection = document.getElementById(targetId);
        if (!targetSection) {
            console.log('Target section not found:', targetId);
            return;
        }

        // Don't do anything if the target section is already active
        if (targetSection.classList.contains('active')) {
            console.log('Target section already active');
            return;
        }

        isTransitioning = true;
        console.log('Starting transition to:', targetId);

        // Get current active section
        const currentSection = document.querySelector('section.active');
        
        // Immediately hide all sections and show target
        sections.forEach(section => {
            section.classList.remove('active');
        });
        
        targetSection.classList.add('active');

        // Update navigation immediately
        navLinks.forEach(link => {
            link.classList.remove('active');
        });
        
        const activeLink = document.querySelector(`a[href="#${targetId}"]`);
        if (activeLink) {
            activeLink.classList.add('active');
        }

        // Add smooth fade effect
        if (currentSection && currentSection !== targetSection) {
            // Quick fade out current, fade in new
            currentSection.style.opacity = '0';
            targetSection.style.opacity = '0';
            
            setTimeout(() => {
                targetSection.style.transition = 'opacity 0.3s ease';
                targetSection.style.opacity = '1';
                
                // Clean up
                setTimeout(() => {
                    currentSection.style.opacity = '';
                    currentSection.style.transition = '';
                    targetSection.style.opacity = '';
                    targetSection.style.transition = '';
                    isTransitioning = false;
                }, 300);
            }, 50);
        } else {
            // No animation needed
            isTransitioning = false;
        }
    }

    // Make showSection global so other functions can use it
    window.showSection = showSection;

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const href = this.getAttribute('href');
            console.log('Nav link clicked:', href); // Debug log
            
            if (href && href.startsWith('#')) {
                const targetId = href.substring(1);
                showSection(targetId);
            }
        });
    });

    // Initialize portfolio
    initializePortfolio();
    loadProjects();
    loadBlogPosts();
});

// Initialize portfolio with user data
function initializePortfolio() {
    // Update logo and page title
    document.querySelector('.logo').textContent = CONFIG.name;
    document.title = `${CONFIG.name} - Developer Portfolio`;
    
    // Update hero section
    document.querySelector('.hero h1').textContent = `Hello, I'm ${CONFIG.name}`;
    
    // Update skills
    const skillsContainer = document.querySelector('.skills');
    skillsContainer.innerHTML = '';
    CONFIG.skills.forEach(skill => {
        const skillTag = document.createElement('span');
        skillTag.className = 'skill-tag';
        skillTag.textContent = skill;
        skillsContainer.appendChild(skillTag);
    });
}

// Load and display projects
function loadProjects() {
    const container = document.getElementById('projects-container');
    
    CONFIG.projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        
        const techTags = project.technologies.map(tech => 
            `<span class="tech-tag">${tech}</span>`
        ).join('');
        
        const liveLink = project.liveUrl ? 
            `<a href="${project.liveUrl}" target="_blank" class="project-link">Live Demo</a>` : '';
        
        projectCard.innerHTML = `
            <h3>${project.title || project.name}</h3>
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

// Load blog posts from configuration or GitHub API
async function loadBlogPosts() {
    const container = document.getElementById('blog-container');
    container.innerHTML = '<div class="loading">Loading blog posts...</div>';

    try {
        // Try to load from GitHub API first
        const blogs = await fetchBlogsFromGitHub();
        
        if (blogs && blogs.length > 0) {
            displayBlogs(blogs);
        } else {
            // Fallback to sample blogs
            displayBlogs(CONFIG.sampleBlogs);
        }
    } catch (error) {
        console.error('Error loading blog posts:', error);
        // Fallback to sample blogs
        displayBlogs(CONFIG.sampleBlogs);
    }
}

// Fetch blog posts from GitHub API
async function fetchBlogsFromGitHub() {
    try {
        const apiUrl = `https://api.github.com/repos/${CONFIG.githubUsername}/${CONFIG.githubRepo}/contents/${CONFIG.blogFolder}`;
        const response = await fetch(apiUrl);
        
        if (!response.ok) {
            throw new Error(`GitHub API error: ${response.status}`);
        }
        
        const files = await response.json();
        const markdownFiles = files.filter(file => file.name.endsWith('.md'));
        
        const blogs = await Promise.all(
            markdownFiles.map(async (file) => {
                const contentResponse = await fetch(file.download_url);
                const content = await contentResponse.text();
                
                return parseMarkdownFile(file.name, content);
            })
        );
        
        // Sort by date (newest first)
        return blogs.sort((a, b) => new Date(b.date) - new Date(a.date));
        
    } catch (error) {
        console.error('Failed to fetch from GitHub:', error);
        return null;
    }
}

// Parse markdown file content
function parseMarkdownFile(filename, content) {
    const lines = content.split('\n');
    let title = filename.replace('.md', '').replace(/-/g, ' ');
    let date = new Date().toISOString().split('T')[0];
    let excerpt = '';
    let image = null;
    let tags = [];
    
    // Try to extract frontmatter (YAML)
    if (lines[0] === '---') {
        const frontmatterEnd = lines.findIndex((line, index) => index > 0 && line === '---');
        if (frontmatterEnd > 0) {
            const frontmatter = lines.slice(1, frontmatterEnd);
            frontmatter.forEach(line => {
                const [key, ...valueParts] = line.split(':');
                const value = valueParts.join(':').trim().replace(/['"]/g, '');
                
                switch (key.trim()) {
                    case 'title':
                        title = value;
                        break;
                    case 'date':
                        date = value;
                        break;
                    case 'excerpt':
                        excerpt = value;
                        break;
                    case 'image':
                        image = value;
                        break;
                    case 'tags':
                        tags = value.split(',').map(tag => tag.trim());
                        break;
                }
            });
            // Remove frontmatter from content
            content = lines.slice(frontmatterEnd + 1).join('\n');
        }
    }
    
    // Generate excerpt if not provided
    if (!excerpt) {
        const firstParagraph = content.split('\n').find(line => 
            line.trim() && !line.startsWith('#') && !line.startsWith('```')
        );
        excerpt = firstParagraph ? firstParagraph.substring(0, 150) + '...' : '';
    }
    
    return {
        filename,
        title,
        date,
        excerpt,
        image,
        tags,
        content
    };
}

// Display blog posts
function displayBlogs(blogs) {
    const container = document.getElementById('blog-container');
    container.innerHTML = '';
    
    blogs.forEach(blog => {
        const blogCard = document.createElement('div');
        blogCard.className = 'blog-card';
        blogCard.addEventListener('click', () => showBlogPost(blog));
        
        const imageHtml = blog.image ? 
            `<img src="${blog.image}" alt="${blog.title}">` : 
            '<div style="font-size: 3rem;">📝</div>';
        
        blogCard.innerHTML = `
            <div class="blog-image">
                ${imageHtml}
            </div>
            <div class="blog-content">
                <div class="blog-date">${formatDate(blog.date)}</div>
                <h3>${blog.title}</h3>
                <p class="blog-excerpt">${blog.excerpt}</p>
            </div>
        `;
        
        container.appendChild(blogCard);
    });
}

// Format date for display
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

// Show individual blog post
function showBlogPost(blog) {
    console.log('Showing blog post:', blog.title);
    
    if (window.isTransitioning) return;
    
    const blogPostSection = document.getElementById('blog-post');
    const blogPostContent = document.getElementById('blog-post-content');
    
    if (!blogPostSection || !blogPostContent) {
        console.error('Blog post elements not found');
        return;
    }
    
    window.isTransitioning = true;
    
    // Hide all other sections immediately
    document.querySelectorAll('section').forEach(section => {
        section.classList.remove('active');
    });
    
    // Show blog post section
    blogPostSection.classList.add('active');
    
    // Parse markdown content
    const htmlContent = marked.parse(blog.content);
    
    // Create tags HTML if available
    const tagsHtml = blog.tags && blog.tags.length > 0 ? 
        `<div class="blog-tags" style="margin-top: 1rem;">
            ${blog.tags.map(tag => `<span class="tech-tag">${tag}</span>`).join('')}
        </div>` : '';
    
    blogPostContent.innerHTML = `
        <div class="blog-post-header">
            <h1>${blog.title}</h1>
            <div class="blog-post-meta">${formatDate(blog.date)}</div>
            ${tagsHtml}
        </div>
        <div class="blog-post-content">
            ${htmlContent}
        </div>
    `;
    
    // Update navigation - remove active from all nav links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    
    // Add fade effect
    blogPostSection.style.opacity = '0';
    setTimeout(() => {
        blogPostSection.style.transition = 'opacity 0.3s ease';
        blogPostSection.style.opacity = '1';
        
        setTimeout(() => {
            blogPostSection.style.opacity = '';
            blogPostSection.style.transition = '';
            window.isTransitioning = false;
        }, 300);
    }, 50);
}

// Utility functions for GitHub integration
function createBlogPost(title, content, tags = []) {
    const filename = title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '') + '.md';
    const date = new Date().toISOString().split('T')[0];
    
    const frontmatter = `---
title: "${title}"
date: ${date}
tags: ${tags.join(', ')}
excerpt: "${content.substring(0, 150).replace(/\n/g, ' ')}..."
---

`;
    
    return {
        filename,
        content: frontmatter + content,
        message: `Add blog post: ${title}`,
        path: `${CONFIG.blogFolder}/${filename}`
    };
}

// GitHub API helper (for future blog post creation)
async function createGitHubFile(filename, content, message) {
    const apiUrl = `https://api.github.com/repos/${CONFIG.githubUsername}/${CONFIG.githubRepo}/contents/${filename}`;
    
    try {
        const response = await fetch(apiUrl, {
            method: 'PUT',
            headers: {
                'Authorization': `token YOUR_GITHUB_TOKEN`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                message: message,
                content: btoa(content), // Base64 encode
                branch: 'main'
            })
        });
        
        return response.ok;
    } catch (error) {
        console.error('Error creating GitHub file:', error);
        return false;
    }
}

// Smooth scrolling for anchor links (updated to work with new navigation)
document.addEventListener('click', function(e) {
    // Handle back button in blog posts
    if (e.target.classList.contains('back-button')) {
        e.preventDefault();
        const href = e.target.getAttribute('href');
        console.log('Back button clicked:', href);
        
        if (href && href.startsWith('#')) {
            const targetId = href.substring(1);
            if (window.showSection) {
                window.showSection(targetId);
            }
        }
        return;
    }
    
    // Handle CTA button in hero section
    if (e.target.classList.contains('cta-button')) {
        e.preventDefault();
        const href = e.target.getAttribute('href');
        console.log('CTA button clicked:', href);
        
        if (href && href.startsWith('#')) {
            const targetId = href.substring(1);
            if (window.showSection) {
                window.showSection(targetId);
            }
        }
        return;
    }
    
    // Handle other anchor links within the same section
    if (e.target.matches('a[href^="#"]') && !e.target.classList.contains('nav-link')) {
        const targetId = e.target.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        // Only scroll if target is within current active section
        if (targetElement && targetElement.closest('section.active')) {
            e.preventDefault();
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }
});

// Add loading states and error handling
function showLoading(container) {
    container.innerHTML = '<div class="loading">Loading...</div>';
}

function showError(container, message = 'Something went wrong. Please try again.') {
    container.innerHTML = `<div class="loading" style="color: #ff6b6b;">${message}</div>`;
}

// Mobile menu toggle (if you want to add mobile navigation)
function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

// Search functionality for blogs (optional feature)
function searchBlogs(query) {
    const blogCards = document.querySelectorAll('.blog-card');
    
    blogCards.forEach(card => {
        const title = card.querySelector('h3').textContent.toLowerCase();
        const excerpt = card.querySelector('.blog-excerpt').textContent.toLowerCase();
        
        if (title.includes(query.toLowerCase()) || excerpt.includes(query.toLowerCase())) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Performance optimization: Lazy loading for images
function setupLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
    }
}