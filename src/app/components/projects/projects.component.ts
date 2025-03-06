// src/app/components/projects/projects.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  // Map technology names to external SVG URLs
  techIcons: { [key: string]: string } = {
    'Angular': 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/angular.svg',
    'React': 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/react.svg',
    'Vue': 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/vue-dot-js.svg',
    'Node.js': 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/node-dot-js.svg',
    'GitHub': 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/github.svg',
    'HTML5': 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/html5.svg',
    'CSS3': 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/css3.svg',
    'JavaScript': 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/javascript.svg',
    'TypeScript': 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/typescript.svg',
    'SCSS': 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/sass.svg',
    'Express': 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/express.svg',
    'SQLite': 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/sqlite.svg',
    'MongoDB': 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/mongodb.svg',
    'Firebase': 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/firebase.svg',
    'DALLE-3': 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/openai.svg',
    'Next.js': 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/nextdotjs.svg',
    'PostgreSQL': 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/postgresql.svg',
    'Django': 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/django.svg',
    'Pandas': 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/pandas.svg',
    'Google Colab': 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/googlecolab.svg',
    'Sklearn': 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/scikitlearn.svg',
    'python': 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/python.svg',
    'API': 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/postman.svg',
    'Postman': 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/postman.svg',
    'Tailwind CSS': 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/tailwindcss.svg',
    'Python': 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/python.svg',
    'Plotly': 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/plotly.svg',
  };

  projects = [
    {
      name: 'Titanic Survival Analysis',
      technologies: ['Python', 'Pandas', 'Sklearn', 'Plotly'],
      description: 'A data analysis project that visualize the survival rate of passengers and predict the likelihood of survival based on passenger characteristics using Random Forest Classifier. . The project uses the Titanic dataset from Seaborn library. The project also uses Plotly to create interactive plots.',
      liveDemo: 'https://titanic.pythonanywhere.com',
      github: 'https://github.com/hhnguyen-20/titanic-survival-analysis',
      image: 'assets/images/projects/titanic-survival-analysis.png',
      isExpanded: false
    },
    {
      name: 'US Citizenship Prep',
      technologies: ['TypeScript', 'Next.js', 'Tailwind CSS'],
      description: 'A web application that helps users prepare for the US citizenship test. The application also mocks the actual test experience by providing a random set of questions and answers.',
      liveDemo: 'https://citizenprep.vercel.app/',
      github: 'https://github.com/hhnguyen-20/us-citizenship-test',
      image: 'assets/images/projects/citizen-prep.png',
      isExpanded: false
    },
    {
      name: 'Autism Spectrum Disorder Detection',
      technologies: ['Python', 'Django', 'Sklearn', 'PostgreSQL'],
      description: 'A machine learning model that predicts whether a person has autism spectrum disorder (ASD) based on their demographic information and responses to a questionnaire.',
      liveDemo: 'https://autism-earlycheck.onrender.com',
      github: 'https://github.com/hhnguyen-20/autism-prediction',
      image: 'assets/images/projects/autism-prediction.png',
      isExpanded: false
    },
    {
      name: 'GoBlog',
      technologies: ['TypeScript', 'React', 'Next.js', 'PostgreSQL', 'DALLE-3'],
      description: 'A blog management system that allows users to create, edit, and delete posts, as well as manage their own comments on those posts. The system supports user authentication, enabling users to sign up, log in, and manage their profiles. GoBlog uses the DALLE-3 API to generate images for blog post thumbnails.',
      liveDemo: 'https://goblog-eosin.vercel.app',
      github: 'https://github.com/flotoria/goblog',
      image: 'assets/images/projects/goblog.png',
      isExpanded: false
    },
    {
      name: 'Sportify',
      technologies: ['python', 'Postman'],
      description: 'A simple Python application built with Tkinter that allows you to search for NBA teams and players. The application uses the API-NBA to get the data.',
      liveDemo: 'https://github.com/hhnguyen-20/sportify/releases/tag/v1.0.0',
      github: 'https://github.com/hhnguyen-20/sportify',
      image: 'assets/images/projects/sportify.png',
      isExpanded: false
    },
    {
      name: 'Portfolio',
      technologies: ['TypeScript', 'Angular'],
      description: 'A personal portfolio website to showcase the projects, education, and work experience.',
      liveDemo: 'https://huuhung-nguyen-portfolio.vercel.app',
      github: 'https://github.com/hhnguyen-20/huuhung-nguyen-portfolio',
      image: 'assets/images/projects/portfolio.png',
      isExpanded: false
    },
    // Add more projects as needed
  ];

  constructor() {}

  /**
   * Toggles the `isExpanded` state of a project to show or hide its full description.
   * @param project The project whose description state is to be toggled.
   */
  toggleDescription(project: any): void {
    project.isExpanded = !project.isExpanded;
  }
}
