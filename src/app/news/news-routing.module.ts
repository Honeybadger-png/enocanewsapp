import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsComponent } from './news.component';
import { NewsDetailComponent } from './news-detail/news-detail.component';

const routes: Routes = [
  {
    path: 'news',
    component: NewsComponent,
    // children: [
    //   {
    //     path: 'news/:id',
    //     component: NewsDetailComponent,
    //   },
    // ]
  },
  {
    path: 'news/:id',
    component: NewsDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewsRoutingModule {}
