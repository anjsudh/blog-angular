import { Component, OnInit } from '@angular/core';
import {BlogService} from '../blog.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {
  blogArray;
  constructor(private blogService:BlogService) {
  }
  ngOnInit() {
    this.blogArray=this.blogService.blogs;
  }

}
