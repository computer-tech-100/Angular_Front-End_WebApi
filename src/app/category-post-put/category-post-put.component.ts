import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CategoryService } from '../services/category.service';
import { Category } from '../models/category';

@Component({
  selector: 'app-category-post-put',
  templateUrl: './category-post-put.component.html',
  styleUrls: ['./category-post-put.component.scss']
})

export class CategoryPostPutComponent implements OnInit {
  form: FormGroup;
  actionType: string;
  form_CategoryName: string;
  categoryId: number;
  existingCategory: Category;

constructor(private CategoryService: CategoryService, private formBuilder: FormBuilder, private activeRoute: ActivatedRoute, private my_router: Router) {

  const my_id = 'id';
  this.actionType = 'Add';
  this.form_CategoryName = 'name';
  if (this.activeRoute.snapshot.params[my_id]) {
    this.categoryId = this.activeRoute.snapshot.params[my_id];
  }

  this.form = this.formBuilder.group(
    {
      categoryId: 0,
      name: ['', [Validators.required]]
    }
  )
}

  ngOnInit():void {
    if (this.categoryId > 0) {
      this.actionType = 'Edit';
      this.CategoryService.getCategory(this.categoryId)
        .subscribe(data => (
          this.existingCategory = data,
          this.form.controls[this.form_CategoryName].setValue(data.categoryName)
        ));
    }
  }

  addData() {
    if (!this.form.valid) {
      return;
    }

    if (this.actionType === 'Add') {
      let category : Category = {
      
        categoryName : this.form.controls['name'].value

      };

      this.CategoryService.saveCategory(category)
        .subscribe((data) => {
          this.my_router.navigate(['/']);
        });
    }

    if (this.actionType === 'Edit') {
      let category : Category = {
        categoryId: this.existingCategory.categoryId,
       categoryName : this.form.controls['name'].value
      };
      this.CategoryService.updateCategory(category.categoryId, category)
        .subscribe((data) => {
          this.my_router.navigate(['/']);
      });
    }
  }
}