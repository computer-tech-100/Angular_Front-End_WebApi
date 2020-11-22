import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartItem } from '../models/cartItem';
import { CartItemService } from '../services/cart-item.service';

@Component({
  selector: 'app-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.scss']
})

export class CartItemsComponent implements OnInit {
  cartitems$: Observable<CartItem[]>;

  constructor(private cartItem_Service: CartItemService) {
  }

  ngOnInit() {
    this.loadCartItems();
  }

  loadCartItems() {
    this.cartitems$ = this.cartItem_Service.getCartItems();
  }

  delete(productId) {
    const answer = confirm('Are you sure you want to delete cart item with id: ' + productId);
    if (answer) {
      this.cartItem_Service.deleteCartItem(productId).subscribe((data) => {
        this.loadCartItems();
      });
    }
  }
}