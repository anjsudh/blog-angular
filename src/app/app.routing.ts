import {Routes, RouterModule} from '@angular/router';
import { BlogDetailsComponent } from './blog/blog-details/blog-details.component';
import { BlogListComponent } from './blog/blog-list/blog-list.component';

const appRoutes : Routes = [
  {path: '', component: BlogListComponent},
  {path: 'blogs/:path', component: BlogDetailsComponent},
]

export const AppRouterModule = RouterModule.forRoot(appRoutes);
