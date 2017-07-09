import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BlogListComponent } from './blog/blog-list/blog-list.component';
import { BlogSummaryComponent } from './blog/blog-summary/blog-summary.component';
import { BlogDetailsComponent } from './blog/blog-details/blog-details.component';
import { AppRouterModule } from './app.routing';
import { BlogService } from './blog/blog.service';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BlogListComponent,
    BlogSummaryComponent,
    BlogDetailsComponent
  ],
  imports: [
    BrowserModule, RouterModule, AppRouterModule
  ],
  providers: [BlogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
