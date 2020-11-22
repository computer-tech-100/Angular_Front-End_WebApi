import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  myAppUrl: string;
  myApiUrl: string;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8'
    })
  };
  constructor(private http: HttpClient) {
      this.myAppUrl = environment.appUrl;
      this.myApiUrl = 'api/Product/';
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.myAppUrl + this.myApiUrl)
    .pipe(
      retry(1)
    );
  }

  getProduct(productId): Observable<Product> {
      return this.http.get<Product>(this.myAppUrl + this.myApiUrl + productId)
      .pipe(
        retry(1)
      );
  }

  saveProduct(product): Observable<Product> {
      return this.http.post<Product>(this.myAppUrl + this.myApiUrl, JSON.stringify(product), this.httpOptions)
      .pipe(
        retry(1)
      );
  }

  updateProduct(productId, product): Observable<Product> {
      return this.http.put<Product>(this.myAppUrl + this.myApiUrl + productId, JSON.stringify(product), this.httpOptions)
      .pipe(
        retry(1)
      );
  }

  deleteProduct(productId): Observable<Product> {
      return this.http.delete<Product>(this.myAppUrl + this.myApiUrl + productId)
      .pipe(
        retry(1)
      );
  }
}