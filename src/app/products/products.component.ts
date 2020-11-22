import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})

export class ProductsComponent implements OnInit {
  products$: Observable<Product[]>;

  constructor(private product_Service: ProductService) {
  }

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    this.products$ = this.product_Service.getProducts();
  }

  delete(productId) {
    const answer = confirm('Are you sure you want to delete product with id: ' + productId);
    if (answer) {
      this.product_Service.deleteProduct(productId).subscribe((data) => {
        this.loadProducts();
      });
    }
  }
}