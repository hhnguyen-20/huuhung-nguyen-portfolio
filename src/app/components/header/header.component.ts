// src/app/components/header/header.component.ts

import {Component, OnInit, HostListener} from '@angular/core';
import {Router, NavigationEnd, ActivatedRoute} from '@angular/router';
import {filter} from 'rxjs/operators';

@Component({
  selector: 'app-header', // Ensure this matches your component's selector
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isNavbarActive = false;
  currentFragment: string | null = null; // Allow null

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.activatedRoute.fragment.subscribe(fragment => {
        this.currentFragment = fragment;
      });
    });
  }

  toggleNavbar() {
    this.isNavbarActive = !this.isNavbarActive;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const sections = ['about', 'projects', 'work-experience', 'technical-skills', 'education', 'contact-me'];
    let current = '';

    for (let section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          current = section;
          break;
        }
      }
    }

    if (current !== this.currentFragment) {
      this.currentFragment = current;
    }
  }
}
