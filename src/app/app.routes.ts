import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router, Scroll } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { ServicesCComponent } from './services-c/services-c.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectSelectedComponent } from './project-selected/project-selected.component';
import { HttpClientModule } from '@angular/common/http';
import { ViewportScroller } from '@angular/common';
import { filter } from 'rxjs';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'service', component: ServicesCComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'project/:id', component: ProjectSelectedComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      scrollPositionRestoration: 'enabled', // Restores the scroll to top
    }),
    HttpClientModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {
  constructor(router: Router, viewportScroller: ViewportScroller) {
    router.events
      .pipe(filter((event): event is Scroll => event instanceof Scroll))
      .subscribe((event: Scroll) => {
        if (event.position) {
          // When back/forward button is clicked, restore the scroll position
          viewportScroller.scrollToPosition(event.position);
        } else if (event.anchor) {
          // Scroll to anchor (for anchor navigation)
          viewportScroller.scrollToAnchor(event.anchor);
        } else {
          // Scroll to the top for new navigation
          viewportScroller.scrollToPosition([0, 0]);
        }
      });
  }
}
