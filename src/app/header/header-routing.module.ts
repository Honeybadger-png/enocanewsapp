import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from '../notfound/notfound.component';
import { SearchPageComponent } from '../search-page/search-page.component';
import { AboutUsComponent } from '../about-us/about-us.component';
import { CategoriesComponent } from '../categories/categories.component';
import { NewsDetailComponent } from '../news/news-detail/news-detail.component';
import { NewsComponent } from '../news/news.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeaderRoutingModule {}
