import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Article, News } from './news';
import { NewsService } from './services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrl: './news.component.css',
})
export class NewsComponent implements OnInit {
  data: Article[] = [];

  pageNumber: number = 1;

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.newsService.getNews().subscribe((news: News) => {
      news.articles.map((article) => {
        if (article.title !== '[Removed]') {
          this.data.push(article);
        }
      });
      this.pageNumber = Math.ceil(this.data.length / 20);
    });
    console.log(this.data);
  }
}
