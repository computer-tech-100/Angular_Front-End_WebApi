import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryService } from '../services/category.service';
import { Category } from '../models/category';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})

export class CategoriesComponent implements OnInit {
  categories$: Observable<Category[]>;

  constructor(private category_Service: CategoryService) {
  }

  ngOnInit() {
    this.loadCategories();
  }

  loadCategories() {
    this.categories$ = this.category_Service.getCategories();
  }

  delete(categoryId) {
    const answer = confirm('Are you sure you want to delete category with id: ' + categoryId);
    if (answer) {
      this.category_Service.deleteCategory(categoryId).subscribe((data) => {
        this.loadCategories();
      });
    }
  }
}