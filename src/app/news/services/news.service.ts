import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { News } from '../news';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  apiCall: string = `${environment.apiEndpoint}${environment.apiKey}`;
  constructor(private http: HttpClient) {}

  getNews() {
    return this.http.get<News>(this.apiCall);
  }
}
