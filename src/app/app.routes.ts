import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { ServicesCComponent } from './services-c/services-c.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectSelectedComponent } from './project-selected/project-selected.component';
import { HttpClientModule } from '@angular/common/http';

// Ensure to export the routes for use in other modules
export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'service', component: ServicesCComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'project/:id', component: ProjectSelectedComponent }, // Example for adding more routes
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirect to home
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true }), HttpClientModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
