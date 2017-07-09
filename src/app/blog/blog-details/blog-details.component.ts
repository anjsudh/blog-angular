import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlogService } from '../blog.service';
@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css']
})
export class BlogDetailsComponent implements OnInit {

  blog;
  constructor(private blogService:BlogService, private router: Router) {
  }
  ngOnInit() {
      for( let blogElement of this.blogService.blogs) {
        if (this.router.url == blogElement.url) {
          this.blog = blogElement;
          break;
        }
      }
  }

}
