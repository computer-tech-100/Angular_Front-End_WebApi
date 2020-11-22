import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoriesComponent } from './categories/categories.component';
import { CategoryComponent } from './category/category.component';
import { CategoryPostPutComponent } from './category-post-put/category-post-put.component';
import { CategoryService } from './services/category.service';
import { ProductService } from './services/product.service';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './product/product.component';
import { ProductPostPutComponent } from './product-post-put/product-post-put.component';
import { CartItemsComponent } from './cart-items/cart-items.component';
import { CartItemComponent } from './cart-item/cart-item.component';
import { CartItemPostPutComponent } from './cart-item-post-put/cart-item-post-put.component';
import { CartItemService } from './services/cart-item.service';
import { CartComponent } from './cart/cart.component';
import { CartService } from './services/cart.service';

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    CategoryComponent,
    CategoryPostPutComponent,
    ProductsComponent,
    ProductComponent,
    ProductPostPutComponent,
    CartItemsComponent,
    CartItemComponent,
    CartItemPostPutComponent,
    CartComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    CategoryService,
    ProductService,
    CartItemService,
    CartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
