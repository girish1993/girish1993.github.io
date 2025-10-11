// Configuration - Update these with your actual data
const CONFIG = {
    // Personal Information
  name: 'Girish Bhatta',
  title: 'ML Engineer | Data Scientist',
    heroDescription: 'Full-stack developer passionate about creating beautiful, functional web applications and sharing knowledge through code and writing.',
  avatar: './assets/profile.jpg', // You can use an emoji or replace with image path
    
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
    
    // Blog posts metadata - markdown files stored in blogs/ directory
    blogPosts: [
        {
            id: 'react-hooks',
            title: 'Getting Started with React Hooks',
            date: '2024-03-15',
            excerpt: 'Learn how to use React Hooks to manage state and side effects in your functional components effectively.',
            icon: '📝',
            tags: ['React', 'JavaScript', 'Frontend'],
            file: 'blogs/blog-react-hooks.md'  // Path to markdown file
        }
    ]
};