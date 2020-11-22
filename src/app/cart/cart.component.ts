import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartItem } from '../models/cartItem';
import { CartItemService } from '../services/cart-item.service';
import { Cart } from '../models/cart';
import { CartService } from '../services/cart.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})

export class CartComponent implements OnInit {
  cartitems$: Observable<CartItem[]>;
  my_data: any;

  constructor(private cartItem_Service: CartItemService,private cart_Service: CartService,private http: HttpClient) {
    
  }

  ngOnInit() {

    this.loadCartItems();
    this.loadCart();

  }

  public loadCartItems() {

    this.cartitems$ = this.cartItem_Service.getCartItems();
  }
 
  public loadCart() {
   
    this.cart_Service.getCart().subscribe((data: Cart[]) => this.my_data = data);

  }
}