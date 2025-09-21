// Configuration - Update these with your actual data
const CONFIG = {
  // Personal Information
  name: 'Girish Bhatta',
  title: 'ML Engineer | Data Scientist',
  heroDescription: 'Full-stack developer passionate about creating beautiful, functional web applications and sharing knowledge through code and writing.',
  avatar: 'assets/profile.jpg', // You can use an emoji or replace with image path
  
  // About Section
  bio: [
      `I am a dedicated professional with expertise in software engineering and data science, specializing in building and deploying machine learning solutions for impactful business outcomes. My career began as a software developer, where a data-centric project sparked my passion for leveraging data to solve complex problems, leading me to pursue a Master’s degree in Data Science. Combining these disciplines, I excel in developing scalable, production-ready ML systems, with proficiency in end-to-end machine learning pipelines, MLOps practices, and CI/CD pipeline development.My core competencies include data wrangling, statistical analysis, feature engineering, hyperparameter optimization, model evaluation, and model deployment, with hands-on experience in cloud platforms like AWS and Azure, and data platforms like Snowflake. I am adept at using Python-based frameworks and tools for ML development and deployment. A quick learner, I actively engage with platforms like Kaggle to analyze complex datasets and stay current with advancements in data science and MLOps, ensuring adaptability to new challenges.`
  ],
  
  // Skills
  skills: [
    'Python', 'Snowflake','Sklearn', 'Pandas', 'numpy', 'Time Series Forecasting', 'API development',
    'Machine Learning', 'Data Engineering', 'SQL', 'MLOps', 
    'TypeScript','Docker', 'AWS', 'Azure', 'PostgreSQL', 'Git', 'Linux', 'System Design', 'Math for ML', 
    'Ray Framework'
  ],
  
  // Contact information
  email: 'girishbhatta93@gmail.com',
  linkedin: 'https://www.linkedin.com/in/girish-bhatta-567431155/',
  github: 'https://github.com/girish1993',
  
  // GitHub configuration
  githubUsername: 'girish1993',
  githubRepo: 'girish1993.github.io',
  blogFolder: 'blogs',
  
  // Featured projects
  projects: [
      {
        name: 'Car Insurance Anlaysis',
        title: 'Car Insurance Analysis',
        description: 'This project showcases a set of decisions and processes involved in a typical ML problem. This project outlines Data cleansin, Feature selection, Model building and understanding feature importances that add to the accuracy of the model.',
        technologies: ['Python', 'Pandas', 'ML model building', 'Data Wrangling', 'Feature Importances', 'Model Performance Analysis '],
        githubUrl: 'https://github.com/girish1993/Car-Insurance-analsysis',
        liveUrl: null
      },
      {
          name: 'ml-data-visualizer',
          title: 'ML Data Visualizer',
          description: 'This application makes use of web server to serve the static data file that contains multiple datasets as json data objects. These json objects are used to visualise as a network of nodes and relationships. The nodes are sites and the relationship are the weights of trade between each of the sites. The size of the nodes are proportional to the trade amount and the width of the amount of trade. The visualisation is created purely using D3.js',
          technologies: ['Python', 'Flask', 'D3.js', 'Pandas'],
          githubUrl: 'https://github.com/girish1993/Network-Data-Visualiser-using-D3.js',
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