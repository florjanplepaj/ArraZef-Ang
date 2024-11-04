import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.css',
    './app.component.footter.css',
    './app.component.media.header.css',
    './app.component.media.footer.css',
  ], // Corrected from styleUrl to styleUrls
})
export class AppComponent implements OnInit {
  title = 'ArraZefAng';

  constructor(@Inject(PLATFORM_ID) private platformId: any) {}

  ngOnInit(): void {
    this.preloadImages();
  }

  preloadImage(src: string) {
    if (isPlatformBrowser(this.platformId)) {
      // Check if running in the browser
      const img = new Image();
      img.src = src;
    }
  }

  preloadImages() {
    const imageSources = [
      'Image/Works/construction-work-6.png',
      'Image/Works/construction-work-5.jpg',
      'Image/Logos/service-photo-6.jpg',
      'Image/Projects/pic-28.jpg',
      'Image/Works/construction-work-5.jpg',
      'Image/Logos/services-logo-6.png',
      'Image/Logos/services-logo-1.png',
      'Image/Logos/services-logo-2.png',
      'Image/Logos/services-logo-4.png',
      'Image/Logos/service-logo-15.png',
    ];

    imageSources.forEach((src) => this.preloadImage(src));
  }
}
