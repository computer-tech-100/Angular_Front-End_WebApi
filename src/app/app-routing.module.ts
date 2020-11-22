import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoriesComponent } from './categories/categories.component';
import { CategoryComponent } from './category/category.component';
import { CategoryPostPutComponent } from './category-post-put/category-post-put.component';

import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './product/product.component';
import { ProductPostPutComponent } from './product-post-put/product-post-put.component';
import { CartItemsComponent } from './cart-items/cart-items.component';
import { CartItemComponent } from './cart-item/cart-item.component';
import { CartItemPostPutComponent } from './cart-item-post-put/cart-item-post-put.component';
import { CartComponent } from './cart/cart.component';



const routes: Routes = [
  //componets are loaded on specified paths
  //Categories 
  { path: '', component: CategoriesComponent, pathMatch: 'full' },//loads categories on app start page
  { path: 'category/:id', component: CategoryComponent },
  { path: 'addcategory', component: CategoryPostPutComponent },
  { path: 'category/edit/:id', component: CategoryPostPutComponent },

  //Products
  { path: 'products', component: ProductsComponent, pathMatch: 'full' },
  { path: 'product/:id', component: ProductComponent },
  { path: 'addproduct', component: ProductPostPutComponent },
  { path: 'product/edit/:id', component: ProductPostPutComponent },

   //Cart Items
   { path: 'cartitems', component: CartItemsComponent, pathMatch: 'full' },
   { path: 'cartitem/:id', component: CartItemComponent },
   { path: 'addproducttoCart', component: CartItemPostPutComponent },
   { path: 'cartitem/edit/:id', component: CartItemPostPutComponent },

   //Cart
   { path: 'cart', component: CartComponent, pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
