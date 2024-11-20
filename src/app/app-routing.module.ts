import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { loginGuard } from './guards/login.guard';

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
    path: 'categories',
    component: CategoriesComponent,
  },
  {
    path: 'booking',
    loadChildren: () => import('./dummy-booking/dummy-booking.module').then((m)=> m.DummyBookingModule)
  },
  {
    path: 'news',
    loadChildren: () => import('./news/news.module').then((m) => m.NewsModule),
  },
  {
    path: 'about-us',
    component: AboutUsComponent,
    canActivate: [loginGuard],
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
