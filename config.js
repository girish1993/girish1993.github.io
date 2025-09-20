 // Configuration - Update these with your actual data
const CONFIG = {
    // GitHub username
    githubUsername: 'yourusername',
    
    // GitHub repository where your portfolio and blogs are hosted
    githubRepo: 'portfolio',
    
    // Your name and details
    name: 'Your Name',
    title: 'Full-stack Developer',
    bio: 'Passionate developer with experience in modern web technologies. I love building applications that solve real-world problems and make people\'s lives easier.',
    
    // Contact information
    email: 'your.email@example.com',
    linkedin: 'https://linkedin.com/in/yourusername',
    twitter: 'https://twitter.com/yourusername',
    
    // Skills
    skills: [
        'JavaScript', 'React', 'Node.js', 'Python', 
        'TypeScript', 'GraphQL', 'Docker', 'AWS',
        'MongoDB', 'PostgreSQL', 'Git', 'Linux'
    ],
    
    // Featured projects - Add your actual repo names and descriptions
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
    
    // Blog configuration
    blogFolder: 'blogs', // Folder in your GitHub repo where markdown files are stored
    
    // Sample blog posts (replace with actual data from your markdown files)
    sampleBlogs: [
        {
            filename: 'getting-started-with-react-hooks.md',
            title: 'Getting Started with React Hooks',
            date: '2024-03-15',
            excerpt: 'Learn how to use React Hooks to manage state and side effects in your functional components effectively.',
            image: null,
            tags: ['React', 'JavaScript', 'Frontend'],
            content: `# Getting Started with React Hooks

React Hooks revolutionized the way we write React components. In this post, we'll explore the most commonly used hooks and how they can make your code more efficient and readable.

## What are React Hooks?

React Hooks are functions that let you "hook into" React state and lifecycle features from function components. They were introduced in React 16.8 as a way to use state and other React features without writing a class component.

## useState Hook

The \`useState\` hook allows you to add state to functional components:

\`\`\`javascript
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}
\`\`\`

## useEffect Hook

The \`useEffect\` hook lets you perform side effects in function components. It serves the same purpose as \`componentDidMount\`, \`componentDidUpdate\`, and \`componentWillUnmount\` combined in React classes.

\`\`\`javascript
import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = \`You clicked \${count} times\`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
\`\`\`

## Best Practices

1. **Always use hooks at the top level** - Don't call hooks inside loops, conditions, or nested functions
2. **Use multiple state variables** - Split related state into multiple state variables
3. **Optimize with useMemo and useCallback** - Prevent unnecessary re-renders

React Hooks make your code more readable and reusable. Start incorporating them into your projects today!`
        },
        {
            filename: 'building-scalable-apis.md',
            title: 'Building Scalable APIs with Node.js',
            date: '2024-03-10',
            excerpt: 'Best practices for designing and implementing scalable REST APIs using Node.js and Express.',
            image: null,
            tags: ['Node.js', 'API', 'Backend'],
            content: `# Building Scalable APIs with Node.js

Creating APIs that can handle growth is crucial for modern applications. Let's explore the key principles and practices for building scalable Node.js APIs.

## Project Structure

A well-organized project structure is the foundation of maintainable code:

\`\`\`
src/
├── controllers/
├── middleware/
├── models/
├── routes/
├── services/
├── utils/
└── config/
\`\`\`

## Key Principles

### 1. Separation of Concerns

Keep your controllers thin by moving business logic to service layers:

\`\`\`javascript
// controllers/userController.js
const userService = require('../services/userService');

exports.createUser = async (req, res) => {
  try {
    const user = await userService.createUser(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
\`\`\`

### 2. Error Handling

Implement centralized error handling middleware:

\`\`\`javascript
// middleware/errorHandler.js
const errorHandler = (err, req, res, next) => {
  const { statusCode = 500, message } = err;
  
  res.status(statusCode).json({
    status: 'error',
    statusCode,
    message
  });
};

module.exports = errorHandler;
\`\`\`

### 3. Input Validation

Use validation libraries like Joi or express-validator:

\`\`\`javascript
const Joi = require('joi');

const userSchema = Joi.object({
  name: Joi.string().min(2).max(50).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(8).required()
});
\`\`\`

## Performance Optimization

- Use caching strategies (Redis)
- Implement database connection pooling
- Add request rate limiting
- Use compression middleware
- Optimize database queries

Building scalable APIs requires careful planning and adherence to best practices. Start with a solid foundation and iterate as your application grows.`
        },
        {
            filename: 'modern-css-techniques.md',
            title: 'Modern CSS Techniques for Better UX',
            date: '2024-03-05',
            excerpt: 'Explore modern CSS features like Grid, Flexbox, and custom properties to create better user experiences.',
            image: null,
            tags: ['CSS', 'Frontend', 'UX'],
            content: `# Modern CSS Techniques for Better UX

CSS has evolved tremendously in recent years. Let's explore some modern techniques that can significantly improve user experience.

## CSS Grid Layout

CSS Grid provides a powerful way to create complex layouts:

\`\`\`css
.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.header {
  grid-column: 1 / -1;
}
\`\`\`

## Custom Properties (CSS Variables)

CSS custom properties make themes and dynamic styling much easier:

\`\`\`css
:root {
  --primary-color: #3498db;
  --secondary-color: #2ecc71;
  --spacing: 1rem;
}

.button {
  background-color: var(--primary-color);
  padding: var(--spacing);
}
\`\`\`

## Flexbox for Component Layout

Flexbox excels at component-level layouts:

\`\`\`css
.card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 300px;
}

.card-content {
  flex: 1;
}
\`\`\`

## Modern Animations

Use CSS transforms and transitions for smooth animations:

\`\`\`css
.button {
  transition: transform 0.2s ease;
}

.button:hover {
  transform: translateY(-2px);
}
\`\`\`

## Container Queries

The future of responsive design:

\`\`\`css
@container (min-width: 400px) {
  .card {
    display: flex;
    flex-direction: row;
  }
}
\`\`\`

These modern CSS techniques help create more maintainable and user-friendly interfaces. Experiment with them in your next project!`
        }
    ]
};