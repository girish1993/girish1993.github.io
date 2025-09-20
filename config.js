 // Configuration - Update these with your actual data
const CONFIG = {
    // GitHub username
    githubUsername: 'girish1993',
    
    // GitHub repository where your portfolio and blogs are hosted
    githubRepo: 'girish1993.github.io',
    
    // Your name and details
    name: 'Girish Bhatta',
    title: 'ML Engineer | Data Scientist',
    bio: 'I am a dedicated professional with expertise in software engineering and data science, specializing in building and deploying machine learning solutions for impactful business outcomes. My career began as a software developer, where a data-centric project sparked my passion for leveraging data to solve complex problems, leading me to pursue a Master’s degree in Data Science. Combining these disciplines, I excel in developing scalable, production-ready ML systems, with proficiency in end-to-end machine learning pipelines, MLOps practices, and CI/CD pipeline development.My core competencies include data wrangling, statistical analysis, feature engineering, hyperparameter optimization, model evaluation, and model deployment, with hands-on experience in cloud platforms like AWS and Azure, and data platforms like Snowflake. I am adept at using Python-based frameworks and tools for ML development and deployment. A quick learner, I actively engage with platforms like Kaggle to analyze complex datasets and stay current with advancements in data science and MLOps, ensuring adaptability to new challenges.',
    
    // Contact information
    email: 'girishbhatta93@gmail.com',
    linkedin: 'https://www.linkedin.com/in/girish-bhatta-567431155/',

    // Skills
    skills: [
        'Python', 'Snowflake','Sklearn', 'Pandas', 'numpy', 'Time Series Forecasting', 'API development',
        'Machine Learning', 'Data Engineering', 'SQL', 'MLOps', 
        'TypeScript','Docker', 'AWS', 'Azure', 'PostgreSQL', 'Git', 'Linux', 'System Design', 'Math for ML', 
        'Ray Framework'
    ],
    
    // Featured projects - Add your actual repo names and descriptions
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