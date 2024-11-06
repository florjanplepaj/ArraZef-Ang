import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataCovers } from '../services/data.service';
import { NgFor, NgIf } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [NgIf, NgFor, TranslateModule],

  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css', './projects.component.media.css'],
})
export class ProjectsComponent implements OnInit {
  covers: any[] = []; // Use Cover interface for typing if available
  filteredCovers: any[] = [];
  n: number = 3; // Start by showing 3 projects
  selectedType: string = 'restruction'; // Default type

  constructor(private coverData: DataCovers, private router: Router) {}

  ngOnInit(): void {
    this.loadCovers();
    this.filterProjectsByType(this.selectedType, this.n); // Filter by default type
  }

  loadCovers(): void {
    this.covers = this.coverData.getCovers(); // Get all covers
  }

  filterProjectsByType(type: string, n: number): void {
    this.selectedType = type;
    this.filteredCovers = this.covers
      .filter((cover) => cover.type === type)
      .slice(0, n);
  }

  loadMoreProjects(): void {
    this.n += 3; // Increment the number of projects to display
    this.filterProjectsByType(this.selectedType, this.n); // Reapply the filter with more projects
  }

  goToSelectedProject(coverId: string, coverName: string): void {
    this.router.navigate(['/project', coverId], {
      queryParams: { coverName: coverName },
    });
  }

  hasMoreProjects(): boolean {
    return (
      this.filteredCovers.length <
      this.covers.filter((cover) => cover.type === this.selectedType).length
    );
  }

  translate: TranslateService = inject(TranslateService);
  translatText(lang: string) {
    this.translate.use(lang);
  }
}
