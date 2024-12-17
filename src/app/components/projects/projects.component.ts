// src/app/components/projects/projects.component.ts

import {Component} from '@angular/core';

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

  };

  projects = [
    {
      name: 'Portfolio',
      technologies: ['Angular'],
      description: 'A personal portfolio website to showcase the projects, education, and work experience.',
      liveDemo: 'https://huuhung-nguyen-portfolio.vercel.app',
      github: 'https://github.com/hhnguyen-20/huuhung-nguyen-portfolio',
      image: 'assets/images/projects/portfolio.png'
    },
    {
      name: 'GoBlog',
      technologies: ['React', 'Next.js', 'PostgreSQL', 'DALLE-3'],
      description: 'A blog management system that allows users to create, edit, and delete posts, as well as manage their own comments on those posts. The system supports user authentication, enabling users to sign up, log in, and manage their profiles. GoBlog uses the DALLE-3 API to generate images for blog post thumbnails.',
      liveDemo: 'https://goblog-eosin.vercel.app',
      github: 'https://github.com/flotoria/goblog',
      image: 'assets/images/projects/goblog.png'
    }
    // Add more projects as needed
  ];
}
