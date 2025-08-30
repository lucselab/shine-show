import { PortfolioData } from '../types/portfolio';

export const defaultPortfolioData: PortfolioData = {
  personalInfo: {
    fullName: 'Alex Johnson',
    title: 'Full Stack Developer',
    email: 'alex.johnson@email.com',
    phone: '+1 (555) 123-4567',
    location: 'San Francisco, CA',
    website: 'https://alexjohnson.dev',
    linkedin: 'https://linkedin.com/in/alexjohnson',
    github: 'https://github.com/alexjohnson',
    about: 'Passionate full-stack developer with 5+ years of experience building scalable web applications. I love creating efficient, user-friendly solutions that solve real-world problems.',
    profileImage: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  experiences: [
    {
      id: '1',
      company: 'TechCorp Inc.',
      position: 'Senior Frontend Developer',
      startDate: '2022-01',
      endDate: '',
      current: true,
      description: 'Leading frontend development for enterprise applications with React and TypeScript.',
      achievements: [
        'Increased application performance by 40% through optimization',
        'Led a team of 4 developers on major product redesign',
        'Implemented automated testing reducing bugs by 60%'
      ]
    },
    {
      id: '2',
      company: 'StartupXYZ',
      position: 'Full Stack Developer',
      startDate: '2020-06',
      endDate: '2021-12',
      current: false,
      description: 'Built and maintained web applications using React, Node.js, and PostgreSQL.',
      achievements: [
        'Developed 3 major features that increased user engagement by 25%',
        'Optimized database queries improving response time by 50%',
        'Mentored 2 junior developers'
      ]
    }
  ],
  projects: [
    {
      id: '1',
      title: 'E-commerce Platform',
      description: 'Full-featured e-commerce platform with cart, payments, and admin dashboard built with React, Node.js, and Stripe.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Tailwind CSS'],
      liveUrl: 'https://ecommerce-demo.com',
      githubUrl: 'https://github.com/alexjohnson/ecommerce-platform',
      imageUrl: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: true
    },
    {
      id: '2',
      title: 'Task Management App',
      description: 'Collaborative task management application with real-time updates and team collaboration features.',
      technologies: ['React', 'Firebase', 'Material-UI', 'TypeScript'],
      liveUrl: 'https://taskmanager-demo.com',
      githubUrl: 'https://github.com/alexjohnson/task-manager',
      imageUrl: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: true
    }
  ],
  education: [
    {
      id: '1',
      institution: 'University of California',
      degree: 'Bachelor of Science',
      field: 'Computer Science',
      startDate: '2016-09',
      endDate: '2020-05',
      gpa: '3.8',
      achievements: [
        'Magna Cum Laude',
        'Dean\'s List 6 semesters',
        'Computer Science Excellence Award'
      ]
    }
  ],
  skills: [
    { id: '1', name: 'React', level: 90, category: 'Frontend' },
    { id: '2', name: 'TypeScript', level: 85, category: 'Frontend' },
    { id: '3', name: 'Node.js', level: 80, category: 'Backend' },
    { id: '4', name: 'PostgreSQL', level: 75, category: 'Database' },
    { id: '5', name: 'Python', level: 70, category: 'Backend' },
    { id: '6', name: 'AWS', level: 65, category: 'Cloud' }
  ],
  sectionOrder: ['about', 'experience', 'projects', 'skills', 'education', 'contact'],
  enabledSections: ['about', 'experience', 'projects', 'skills', 'education', 'contact']
};