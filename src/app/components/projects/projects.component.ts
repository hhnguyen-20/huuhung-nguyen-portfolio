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
    'Firebase': 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/firebase.svg'
    // Add more mappings as needed
  };

  projects = [
    {
      name: 'Portfolio Website',
      technologies: ['Angular', 'TypeScript', 'SCSS'],
      description: 'A personal portfolio to showcase my projects and experience.',
      liveDemo: 'https://example-portfolio.com',
      github: 'https://github.com/username/portfolio',
      image: 'assets/images/portfolio-screenshot.png'
    },
    {
      name: 'E-commerce Store',
      technologies: ['React', 'Node.js', 'MongoDB'],
      description: 'An online store with product listings, cart, and checkout functionality.',
      liveDemo: 'https://example-store.com',
      github: 'https://github.com/username/ecommerce-store',
      image: 'assets/images/store-screenshot.png'
    },
    {
      name: 'Chat Application',
      technologies: ['Vue', 'Firebase'],
      description: 'A real-time chat application using Firebase authentication and database.',
      liveDemo: 'https://example-chatapp.com',
      github: 'https://github.com/username/chat-app',
      image: 'assets/images/chatapp-screenshot.png'
    },
    {
      name: 'Task Manager',
      technologies: ['Angular', 'Express', 'SQLite'],
      description: 'A task management tool with user authentication and CRUD operations.',
      liveDemo: 'https://example-taskmanager.com',
      github: 'https://github.com/username/task-manager',
      image: 'assets/images/taskmanager-screenshot.png'
    }
    // Add more projects as needed
  ];
}
