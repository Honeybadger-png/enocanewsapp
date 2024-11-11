import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrl: './news-detail.component.css',
})
export class NewsDetailComponent implements OnInit {
  id!: number;
  id$!: Observable<string>;
  constructor(private router: ActivatedRoute) {}

  ngOnInit(): void {
    // this.id$ = this.router.params.pipe(map((params) => params['id']));
    // this.router.params.subscribe((params) => {
    //   this.id = params['id'];
    // });
    this.id$ = this.router.paramMap.pipe(map((params) => params.get('id')!));
  }
}
