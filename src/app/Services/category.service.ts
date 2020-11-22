import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  myAppUrl: string;
  myApiUrl: string;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8'
    })
  };
  constructor(private http: HttpClient) {
      this.myAppUrl = environment.appUrl;
      this.myApiUrl = 'api/Category/';
  }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.myAppUrl + this.myApiUrl)
    .pipe(
      retry(1)
    );
  }

  getCategory(categoryId): Observable<Category> {
      return this.http.get<Category>(this.myAppUrl + this.myApiUrl + categoryId)
      .pipe(
        retry(1)
      );
  }

  saveCategory(category): Observable<Category> {
      return this.http.post<Category>(this.myAppUrl + this.myApiUrl, JSON.stringify(category), this.httpOptions)
      .pipe(
        retry(1)
      );
  }

  updateCategory(categoryId, category): Observable<Category> {
      return this.http.put<Category>(this.myAppUrl + this.myApiUrl + categoryId, JSON.stringify(category), this.httpOptions)
      .pipe(
        retry(1)
      );
  }

  deleteCategory(categoryId): Observable<Category> {
      return this.http.delete<Category>(this.myAppUrl + this.myApiUrl + categoryId)
      .pipe(
        retry(1)
      );
  }
}