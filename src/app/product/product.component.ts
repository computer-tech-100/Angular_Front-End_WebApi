import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})

export class ProductComponent implements OnInit {

  product$: Observable<Product>;
  productId: number;

  constructor(private productService: ProductService, private avctivatedRoute: ActivatedRoute) {
    const my_id = 'id';
    if (this.avctivatedRoute.snapshot.params[my_id]) {
      this.productId = this.avctivatedRoute.snapshot.params[my_id];
    }
  }

  ngOnInit () : void {
    this.loadProductById();
  }

  loadProductById() {
    this.product$ = this.productService.getProduct(this.productId);
  }
}
