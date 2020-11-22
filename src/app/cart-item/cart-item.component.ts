import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { CartItemService } from '../services/cart-item.service';
import { CartItem } from '../models/cartItem';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})

export class CartItemComponent implements OnInit {

  cartItem$: Observable<CartItem>;
  productId: number;

  constructor(private cartitemService: CartItemService, private avctivatedRoute: ActivatedRoute) {
    const my_id = 'id';
    if (this.avctivatedRoute.snapshot.params[my_id]) {
      this.productId = this.avctivatedRoute.snapshot.params[my_id];
    }
  }

  ngOnInit () : void {
    this.loadCartItemById();
  }

  loadCartItemById() {
    this.cartItem$ = this.cartitemService.getCartItem(this.productId);
  }
}
