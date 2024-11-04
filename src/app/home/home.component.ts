import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { DataCovers } from '../services/data.service';
import { CommonModule, NgClass, NgFor } from '@angular/common';
import { isPlatformBrowser } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

interface Cover {
  id: number;
  location: string;
  name: string;
  pics: string[];
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, NgFor, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', 'home.component.media.css'],
})
export class HomeComponent implements OnInit {
  covers: any[] = []; // Use Cover interface for typing
  observer: IntersectionObserver | null = null;

  constructor(
    private coverData: DataCovers,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: any
  ) {}

  ngOnInit(): void {
    this.loadCovers();

    if (isPlatformBrowser(this.platformId)) {
      this.setupObserver(); // Set up the observer only in the browser
    }
  }

  loadCovers() {
    this.covers = this.coverData.getCovers();
  }

  startCounter(
    elementId: string,
    start: number,
    target: number,
    increment: number,
    duration: number
  ) {
    let counter = start;
    const interval = setInterval(() => {
      const element: HTMLElement | null = document.querySelector(elementId);
      if (element) {
        element.innerHTML = String(counter);
        counter += increment;

        if (counter > target) {
          clearInterval(interval);
          element.innerHTML = String(target);
        }
      } else {
        clearInterval(interval);
        console.error(`Element not found: ${elementId}`);
      }
    }, duration);
  }

  navigateToProject(coverId: number, coverName: string) {
    this.router.navigate(['/project', coverId], {
      queryParams: { coverName: coverName },
    });
  }

  setupObserver() {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.statisticNumbers();
            this.observer?.unobserve(entry.target); // Stop observing after the function has been called
          }
        });
      },
      {
        threshold: 0.8, // Trigger when 80% of the element is visible
      }
    );

    // Observe the statistics section
    const statsSection = document.querySelector('.js-statistics-section');
    if (statsSection) {
      this.observer.observe(statsSection);
    }
  }

  statisticNumbers() {
    this.startCounter('.js-years-experience', 1, 25, 1, 30);
    this.startCounter('.js-employers-over-the-years', 1, 60, 5, 30);
    this.startCounter('.js-residential-complete', 1, 120, 10, 30);
    this.startCounter('.js-millions-investment-complete', 1, 20, 5, 30);
  }
}
