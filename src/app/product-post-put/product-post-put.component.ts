import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product} from '../models/product';
import { Category } from '../models/category';

@Component({
  selector: 'app-product-post-put',
  templateUrl: './product-post-put.component.html',
  styleUrls: ['./product-post-put.component.scss']
})

export class ProductPostPutComponent implements OnInit {

  form: FormGroup;
  actionType: string;
  form_productName: string;
  form_productPrice: string;
  form_productCategoryId: string;
  productId: number;
  existingProduct: Product;

  constructor(private productService: ProductService, private formBuilder: FormBuilder, private activeRoute: ActivatedRoute, private my_router: Router) {
    const my_id = 'id';
    this.actionType = 'Add';
    this.form_productName = 'name';
    this.form_productPrice = 'p_price';
    this.form_productCategoryId = 'c_Id';

    if (this.activeRoute.snapshot.params[my_id]) {
      this.productId = this.activeRoute.snapshot.params[my_id];
    }

    this.form = this.formBuilder.group(
      {
        productId: 0,
        name: ['', [Validators.required]],
        p_price : ['', [Validators.required]],
        c_Id: ['', [Validators.required]]
      }
    )
  }

  ngOnInit() {

    if (this.productId > 0) {
      this.actionType = 'Edit';
      this.productService.getProduct(this.productId)
        .subscribe(data => (
          this.existingProduct = data,
          //show related previous data for each field in edit page
          this.form.controls[this.form_productName].setValue(data.productName),
          this.form.controls[this.form_productPrice].setValue(data.price),
          this.form.controls[this.form_productCategoryId].setValue(data.categoryId)
        ));
    }
  }
  
  //create or update --> in both cases we add data to database
  addData() { 
    if (!this.form.valid) {
      return;
    }

    if (this.actionType === 'Add') {
      let product: Product = {
        productName : this.form.controls['name'].value,
        price : this.form.controls['p_price'].value,
        categoryId : this.form.controls['c_Id'].value,

      };

      this.productService.saveProduct(product)
        .subscribe((data) => {
          this.my_router.navigate(['/products']);
        });
    }

    if (this.actionType === 'Edit') {
      let product: Product = {
        productId: this.existingProduct.productId,//remains as it is 
        categoryId: this.existingProduct.categoryId,//remains as it is 

        productName : this.form.controls['name'].value,//update name
        price : this.form.controls['p_price'].value,//update price
       
      };
      this.productService.updateProduct(product.productId, product)
        .subscribe((data) => {
          this.my_router.navigate(['/products']);//After updating the product and saving then we navigate to products page
        });
    }
  }
}