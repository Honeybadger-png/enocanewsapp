import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsRoutingModule } from './news-routing.module';
import { NewsComponent } from './news.component';
import { NewsDetailComponent } from './news-detail/news-detail.component';
import { NewsListComponent } from './news-list/news-list.component';

@NgModule({
  declarations: [NewsComponent, NewsDetailComponent, NewsListComponent],
  imports: [CommonModule, NewsRoutingModule],
})
export class NewsModule {}
