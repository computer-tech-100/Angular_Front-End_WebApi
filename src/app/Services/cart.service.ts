import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry} from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { CartItem } from '../models/cartItem';
import { Cart } from '../models/cart';

@Injectable({
  providedIn: 'root'
})

export class CartService {

  myAppUrl: string;
  myApiUrl: string;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8'
    })
  };

  constructor(private http: HttpClient) {
      this.myAppUrl = environment.appUrl;
      this.myApiUrl = 'api/Cart/';
  }

  getCartItems(): Observable<CartItem[]> {

    return this.http.get<CartItem[]>(this.myAppUrl + this.myApiUrl)
    .pipe(
      retry(1)
    );
  }

  getCart(): Observable<Cart[]> {

    return this.http.get<Cart[]>(this.myAppUrl + this.myApiUrl);

  }
}