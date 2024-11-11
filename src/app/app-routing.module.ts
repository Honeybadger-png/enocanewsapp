import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsComponent } from './news/news.component';
import { CategoriesComponent } from './categories/categories.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { NewsDetailComponent } from './news/news-detail/news-detail.component';

const routes: Routes = [
  // {
  //   path: '',
  //   component: HomeComponent,
  // },
  {
    path: '',
    redirectTo: '/news',
    pathMatch: 'full',
  },
  {
    path: 'news',
    component: NewsComponent,
  },
  {
    path: 'news/:id',
    component: NewsDetailComponent,
  },
  {
    path: 'categories',
    component: CategoriesComponent,
  },
  {
    path: 'about-us',
    component: AboutUsComponent,
  },
  {
    path: 'search-page',
    component: SearchPageComponent,
  },
  {
    path: '**',
    component: NotfoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
