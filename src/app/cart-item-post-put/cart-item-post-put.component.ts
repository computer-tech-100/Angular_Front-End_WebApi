import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CartItemService } from '../services/cart-item.service';
import { CartItem } from '../models/cartItem';

@Component({
  selector: 'app-cart-item-post-put',
  templateUrl: './cart-item-post-put.component.html',
  styleUrls: ['./cart-item-post-put.component.scss']
})

export class CartItemPostPutComponent implements OnInit {

  form: FormGroup;
  actionType: string;
  form_price: string;
  form_quantity: string;
  productId: number;
  productid :string;
  existingCartItem: CartItem;

  constructor(private cartItemService: CartItemService, private formBuilder: FormBuilder, private activeRoute: ActivatedRoute, private my_router: Router) {
    const my_id = 'id';
    this.actionType = 'Add';
    this.form_price = 'c_price';
    this.form_quantity = 'c_quantity';
    this.productid = 'p_id';

    if (this.activeRoute.snapshot.params[my_id]) {
      this.productId = this.activeRoute.snapshot.params[my_id];
    }

    this.form = this.formBuilder.group(
      {
        productId: 0,
        c_price : ['', [Validators.required]],
        c_quantity: ['', [Validators.required]],
        p_id : ['', [Validators.required]]
      }
    )
  }

  ngOnInit() {

    if (this.productId > 0) {
      this.actionType = 'Edit';
      this.cartItemService.getCartItem(this.productId)
        .subscribe(data => (
          this.existingCartItem = data,
          //show related previous data for each field in edit page
          this.form.controls[this.productid].setValue(data.productId),
          this.form.controls[this.form_price].setValue(data.price),
          this.form.controls[this.form_quantity].setValue(data.quantity)
        ));
    }
  }
  //create or update --> in both cases we add data to database
  addData() { 
    if (!this.form.valid) {
      return;
    }

    if (this.actionType === 'Add') {
      let cart_item: CartItem = {

        productId : this.form.controls['p_id'].value,
        price : this.form.controls['c_price'].value,
        quantity : this.form.controls['c_quantity'].value,

      };

      this.cartItemService.saveCartItem(cart_item)
        .subscribe((data) => {
          this.my_router.navigate(['/cartitems']);
        });
    }

    if (this.actionType === 'Edit') {
      let the_cart_item: CartItem = {
        productId: this.existingCartItem.productId,//remains as it is 
        price: this.existingCartItem.price,//remains as it is 
        quantity : this.form.controls['c_quantity'].value,//update quantity

      };
      this.cartItemService.updateCartItem(the_cart_item.productId, the_cart_item)
        .subscribe((data) => {
          this.my_router.navigate(['/cartitems']);//After updating the cart item and saving then we navigate to cartitems page
        });
    }
  }
}