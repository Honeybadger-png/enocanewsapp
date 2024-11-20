import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoriesComponent } from './categories/categories.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { HomeComponent } from './home/home.component';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { NotfoundComponent } from './notfound/notfound.component';
import { CategoriesFilterComponent } from './categories/categories-filter/categories-filter.component';
import { NewsModule } from './news/news.module';
import { RouterModule } from '@angular/router';
import { HeaderModule } from './header/header.module';
import { DummyBookingModule } from './dummy-booking/dummy-booking.module';

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    AboutUsComponent,
    SearchPageComponent,
    HomeComponent,
    NotfoundComponent,
    CategoriesFilterComponent,
  ],
  imports: [
    BrowserModule,
    DummyBookingModule,
    NewsModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    HeaderModule,
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withFetch()),
    provideAnimationsAsync(),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
