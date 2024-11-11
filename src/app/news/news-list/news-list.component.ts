import { Component, Input } from '@angular/core';
import { Article } from '../news';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrl: './news-list.component.css',
})
export class NewsListComponent {
  @Input() singleNews!: Article;
  @Input() indexOfNews!: number;
  constructor(private router: Router) {}

  onClick() {
    this.router.navigate([`/news`, this.indexOfNews]);
  }
}
