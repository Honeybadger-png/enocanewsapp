import { Component, OnInit } from '@angular/core';
import { Categories } from './categories';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-categories-filter',
  templateUrl: './categories-filter.component.html',
  styleUrl: './categories-filter.component.css',
})
export class CategoriesFilterComponent {
  filteredCategories: any[] = [];
  categories: Categories[] = [
    {
      id: 1,
      name: 'business',
    },
    {
      id: 2,
      name: 'entertainment',
    },
    {
      id: 3,
      name: 'general',
    },
    {
      id: 4,
      name: 'health',
    },
    {
      id: 5,
      name: 'science',
    },
    {
      id: 6,
      name: 'sports',
    },
    {
      id: 7,
      name: 'technology',
    },
  ];

  get selectedFilter(): any[] {
    return this.categories.filter((e, i) => this.filteredCategories[i]);
  }

  SelectedFilters(newsForm: NgForm) {
    console.log(this.selectedFilter);
    newsForm.reset();
  }
}
