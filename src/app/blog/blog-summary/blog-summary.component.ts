import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-blog-summary',
  templateUrl: './blog-summary.component.html',
  styleUrls: ['./blog-summary.component.css']
})
export class BlogSummaryComponent implements OnInit {

  @Input() blog = null;
  constructor() { }

  ngOnInit() {
  }

}
