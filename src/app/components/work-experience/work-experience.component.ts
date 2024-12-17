import {Component} from '@angular/core';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent {
  jobs = [
    {
      title: 'Cashier',
      company: 'Popeyes Louisiana Kitchen',
      location: 'San Jose, CA',
      startDate: 'Jan 2021',
      endDate: 'Sep 2021',
      description: [
        'Managed cash transactions accurately and efficiently in a fast-paced environment.',
        'Provided excellent customer service, enhancing guest satisfaction and loyalty.',
        'Collaborated with team members to ensure smooth kitchen and front-end operations.',
        'Handled multiple tasks simultaneously, demonstrating strong organizational skills.'
      ]
    }
  ];
}
