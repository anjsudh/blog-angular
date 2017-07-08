import { RouterModule, Routes } from '@angular/router';
import { BlogListComponent } from './blog-list/blog-list.component';


export const appRoutes: Routes = [
  { path: '', component: BlogListComponent }
];
