import {Component} from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {
  educationList = [
    {
      institution: 'San José State University',
      institutionUrl: 'https://www.sjsu.edu',
      degree: 'Bachelor of Science in Computer Science',
      years: 'December 2024',
      gpa: '3.89/4.0',
      description: 'Graduated with Honors. Built a solid foundation in programming, algorithms, and data structures.',
      coursework: [
        'Data Structures and Algorithms',
        'Operating System (using C)',
        'Advanced Python Programming',
        'Database Management Systems',
        'Machine Learning',
        'Object-Oriented Design (using Java)'
      ]
    },
    {
      institution: 'Evergreen Valley College',
      institutionUrl: 'https://www.evc.edu',
      degree: 'Associate of Science in Computer Science',
      years: 'May 2023',
      gpa: '4.0/4.0',
      description: 'Focused on core computer science concepts and mathematics, with an emphasis on programming fundamentals.',
      coursework: [
        'Computer Architecture',
        'Discrete Mathematics',
        'Intro to Java Programming'
      ]
    }
  ];
}
