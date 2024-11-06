import { Component, OnInit, HostListener, inject } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router'; // To get the project ID from the URL
import { DataCovers } from '../services/data.service';
import { NgFor, NgIf } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-selected-project',
  standalone: true,
  imports: [NgFor, NgIf, RouterModule, TranslateModule],
  templateUrl: './project-selected.component.html',
  styleUrls: [
    './project-selected.component.css',
    './project-selected.component.media2.css',
  ],
})
export class ProjectSelectedComponent implements OnInit {
  matchingProject: any;
  selectedImageIndex = 0;

  constructor(private coverData: DataCovers, private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Get the project ID from the URL and load the matching project
    const coverId = this.route.snapshot.params['id'];
    if (coverId) {
      this.matchingProject = this.coverData.getCover(coverId);
    } else {
      console.error('No coverId found in URL');
    }
  }

  selectImage(index: number): void {
    this.selectedImageIndex = index;
  }

  navigateImages(direction: 'next' | 'previous'): void {
    const maxIndex = this.matchingProject.pics.length - 1;
    if (direction === 'next') {
      this.selectedImageIndex =
        this.selectedImageIndex === maxIndex ? 0 : this.selectedImageIndex + 1;
    } else {
      this.selectedImageIndex =
        this.selectedImageIndex === 0 ? maxIndex : this.selectedImageIndex - 1;
    }
  }

  scrollImages(direction: 'left' | 'right'): void {
    const container = document.querySelector(
      '.js-bottom-right-pic-container'
    ) as HTMLElement;
    const scrollAmount = 100;
    if (direction === 'left') {
      container.scrollLeft -= scrollAmount;
    } else {
      container.scrollLeft += scrollAmount;
    }
  }

  enterFullscreen(): void {
    const rightContainer = document.querySelector(
      '.selected-project-right-container'
    ) as HTMLElement;
    if (rightContainer.requestFullscreen) {
      rightContainer.requestFullscreen();
    } else if (rightContainer.requestFullscreen) {
      // Safari
      rightContainer.requestFullscreen();
    } else if (rightContainer.requestFullscreen) {
      // IE/Edge
      rightContainer.requestFullscreen();
    }
  }

  @HostListener('document:keydown', ['$event'])
  handleKeydown(event: KeyboardEvent) {
    // Check for left and right arrow keys
    if (event.key === 'ArrowLeft') {
      this.scrollImages('left');
    } else if (event.key === 'ArrowRight') {
      this.scrollImages('right');
    }
  }

  translate: TranslateService = inject(TranslateService);
  translatText(lang: string) {
    this.translate.use(lang);
  }
}
