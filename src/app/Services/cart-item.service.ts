import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { CartItem } from '../models/cartItem';

@Injectable({
  providedIn: 'root'
})

export class CartItemService {

  myAppUrl: string;
  myApiUrl: string;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8'
    })
  };
  constructor(private http: HttpClient) {
      this.myAppUrl = environment.appUrl;
      this.myApiUrl = 'api/CartItem/';
  }

  getCartItems(): Observable<CartItem[]> {
    return this.http.get<CartItem[]>(this.myAppUrl + this.myApiUrl)
    .pipe(
      retry(1)
    );
  }

  getCartItem(productId): Observable<CartItem> {
      return this.http.get<CartItem>(this.myAppUrl + this.myApiUrl + productId)
      .pipe(
        retry(1)
      );
  }

  saveCartItem(cartItem): Observable<CartItem> {
      return this.http.post<CartItem>(this.myAppUrl + this.myApiUrl, JSON.stringify(cartItem), this.httpOptions)
      .pipe(
        retry(1)
      );
  }

  updateCartItem(productId, cartItem): Observable<CartItem> {
      return this.http.put<CartItem>(this.myAppUrl + this.myApiUrl + productId, JSON.stringify(cartItem), this.httpOptions)
      .pipe(
        retry(1)
      );
  }

  deleteCartItem(productId): Observable<CartItem> {
      return this.http.delete<CartItem>(this.myAppUrl + this.myApiUrl + productId)
      .pipe(
        retry(1)
      );
  }
}
