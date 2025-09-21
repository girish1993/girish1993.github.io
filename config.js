// Configuration - Update these with your actual data
const CONFIG = {
  // Personal Information
  name: 'Your Name',
  title: 'Full-stack Developer',
  heroDescription: 'Full-stack developer passionate about creating beautiful, functional web applications and sharing knowledge through code and writing.',
  avatar: '👨‍💻', // You can use an emoji or replace with image path
  
  // About Section
  bio: [
      "I'm a passionate developer with experience in modern web technologies. I love building applications that solve real-world problems and make people's lives easier.",
      "When I'm not coding, you can find me writing technical blogs, contributing to open source projects, or exploring new technologies. I believe in continuous learning and sharing knowledge with the developer community.",
      "My journey in software development started over 5 years ago, and I've had the privilege of working with startups and established companies to bring their digital visions to life."
  ],
  
  // Skills
  skills: [
      'JavaScript', 'React', 'Node.js', 'Python', 
      'TypeScript', 'GraphQL', 'Docker', 'AWS',
      'MongoDB', 'PostgreSQL', 'Git', 'Linux'
  ],
  
  // Contact information
  email: 'your.email@example.com',
  linkedin: 'https://linkedin.com/in/yourusername',
  twitter: 'https://twitter.com/yourusername',
  github: 'https://github.com/yourusername',
  
  // GitHub configuration
  githubUsername: 'yourusername',
  githubRepo: 'portfolio',
  blogFolder: 'blogs',
  
  // Featured projects
  projects: [
      {
          name: 'awesome-web-app',
          title: 'Awesome Web App',
          description: 'A full-stack web application built with React and Node.js that helps users manage their daily tasks with real-time collaboration features.',
          technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
          githubUrl: 'https://github.com/yourusername/awesome-web-app',
          liveUrl: 'https://awesome-web-app.vercel.app'
      },
      {
          name: 'ml-data-visualizer',
          title: 'ML Data Visualizer',
          description: 'An interactive data visualization tool that helps data scientists explore and understand machine learning datasets through beautiful charts and graphs.',
          technologies: ['Python', 'Flask', 'D3.js', 'Pandas'],
          githubUrl: 'https://github.com/yourusername/ml-data-visualizer',
          liveUrl: null
      },
      {
          name: 'mobile-expense-tracker',
          title: 'Mobile Expense Tracker',
          description: 'A React Native mobile app for tracking expenses with category-based analytics, budget alerts, and cloud synchronization.',
          technologies: ['React Native', 'Firebase', 'Redux', 'Chart.js'],
          githubUrl: 'https://github.com/yourusername/mobile-expense-tracker',
          liveUrl: null
      },
      {
          name: 'api-gateway-service',
          title: 'API Gateway Service',
          description: 'A scalable microservices API gateway built with Node.js and Express, featuring rate limiting, authentication, and load balancing.',
          technologies: ['Node.js', 'Express', 'Redis', 'Docker'],
          githubUrl: 'https://github.com/yourusername/api-gateway-service',
          liveUrl: null
      }
  ],
  
  // Blog posts
  blogPosts: [
      {
          id: 'react-hooks',
          title: 'Getting Started with React Hooks',
          date: '2024-03-15',
          excerpt: 'Learn how to use React Hooks to manage state and side effects in your functional components effectively.',
          icon: '📝',
          tags: ['React', 'JavaScript', 'Frontend'],
          filename: 'blog-react-hooks.html'
      },
      {
          id: 'scalable-apis',
          title: 'Building Scalable APIs with Node.js',
          date: '2024-03-10',
          excerpt: 'Best practices for designing and implementing scalable REST APIs using Node.js and Express.',
          icon: '🚀',
          tags: ['Node.js', 'API', 'Backend'],
          filename: 'blog-scalable-apis.html'
      },
      {
          id: 'modern-css',
          title: 'Modern CSS Techniques for Better UX',
          date: '2024-03-05',
          excerpt: 'Explore modern CSS features like Grid, Flexbox, and custom properties to create better user experiences.',
          icon: '🎨',
          tags: ['CSS', 'Frontend', 'UX'],
          filename: 'blog-modern-css.html'
      },
      {
          id: 'performance-optimization',
          title: 'Performance Optimization in Web Apps',
          date: '2024-02-28',
          excerpt: 'Essential techniques for improving web application performance, from bundle splitting to image optimization.',
          icon: '⚡',
          tags: ['Performance', 'JavaScript', 'Optimization'],
          filename: 'blog-performance.html'
      },
      {
          id: 'devops-practices',
          title: 'DevOps Best Practices for Developers',
          date: '2024-02-22',
          excerpt: 'Learn essential DevOps practices that every developer should know, from CI/CD to containerization.',
          icon: '🔧',
          tags: ['DevOps', 'CI/CD', 'Docker'],
          filename: 'blog-devops.html'
      },
      {
          id: 'web-accessibility',
          title: 'Web Accessibility: A Complete Guide',
          date: '2024-02-15',
          excerpt: 'Make your web applications accessible to everyone with these comprehensive accessibility guidelines and best practices.',
          icon: '🌐',
          tags: ['Accessibility', 'UX', 'Web Standards'],
          filename: 'blog-accessibility.html'
      }
  ],

  // Blog generator function - creates individual blog HTML files
  generateBlogHTML: function(blogPost, content) {
      const formattedDate = new Date(blogPost.date).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
      });

      const tagsHTML = blogPost.tags.map(tag => `<span class="tech-tag">${tag}</span>`).join('');

      return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${blogPost.title} - ${this.name}</title>
  <link rel="stylesheet" href="styles.css">
  <style>
      .blog-post {
          padding: 6rem 0 4rem 0;
          min-height: 100vh;
      }
      
      .blog-header {
          text-align: center;
          margin-bottom: 3rem;
          padding-bottom: 2rem;
          border-bottom: 1px solid var(--border);
      }
      
      .blog-title {
          font-size: 2.5rem;
          margin-bottom: 1rem;
          color: var(--text-primary);
      }
      
      .blog-meta {
          color: var(--text-muted);
          font-size: 1rem;
          margin-bottom: 1rem;
      }
      
      .blog-tags {
          display: flex;
          justify-content: center;
          gap: 0.5rem;
          flex-wrap: wrap;
      }
      
      .blog-content {
          max-width: 800px;
          margin: 0 auto;
          color: var(--text-secondary);
          line-height: 1.8;
          font-size: 1.1rem;
      }
      
      .blog-content h2 {
          color: var(--text-primary);
          margin: 2.5rem 0 1rem 0;
          font-size: 1.8rem;
      }
      
      .blog-content h3 {
          color: var(--text-primary);
          margin: 2rem 0 1rem 0;
          font-size: 1.4rem;
      }
      
      .blog-content p {
          margin-bottom: 1.5rem;
      }
      
      .blog-content code {
          background: var(--bg-secondary);
          color: var(--accent);
          padding: 0.25rem 0.5rem;
          border-radius: 4px;
          font-size: 0.9rem;
      }
      
      .blog-content pre {
          background: var(--bg-secondary);
          padding: 1.5rem;
          border-radius: 8px;
          overflow-x: auto;
          margin: 2rem 0;
          border: 1px solid var(--border);
      }
      
      .blog-content pre code {
          background: none;
          padding: 0;
          color: var(--text-secondary);
      }
      
      .blog-content ul, .blog-content ol {
          margin-left: 2rem;
          margin-bottom: 1.5rem;
      }
      
      .blog-content li {
          margin-bottom: 0.5rem;
      }
      
      .back-link {
          display: inline-block;
          margin-bottom: 2rem;
          color: var(--accent);
          text-decoration: none;
          font-size: 0.9rem;
          transition: color 0.3s ease;
      }
      
      .back-link:hover {
          color: var(--accent-hover);
      }
      
      @media (max-width: 768px) {
          .blog-title {
              font-size: 2rem;
          }
          
          .blog-content {
              font-size: 1rem;
          }
          
          .blog-content h2 {
              font-size: 1.5rem;
          }
          
          .blog-content h3 {
              font-size: 1.3rem;
          }
      }
  </style>
</head>
<body>
  <nav>
      <div class="nav-container">
          <div class="logo">${this.name}</div>
          <ul class="nav-links">
              <li><a href="index.html#home">Home</a></li>
              <li><a href="index.html#about">About</a></li>
              <li><a href="index.html#projects">Projects</a></li>
              <li><a href="index.html#blog">Blog</a></li>
          </ul>
      </div>
  </nav>

  <div class="blog-post">
      <div class="container">
          <a href="index.html#blog" class="back-link">← Back to Blog</a>
          
          <div class="blog-header">
              <h1 class="blog-title">${blogPost.title}</h1>
              <div class="blog-meta">${formattedDate}</div>
              <div class="blog-tags">
                  ${tagsHTML}
              </div>
          </div>
          
          <div class="blog-content">
              ${content}
          </div>
      </div>
  </div>
</body>
</html>`;
  }
};