import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { CategoryService } from '../services/category.service';
import { Category } from '../models/category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  category$: Observable<Category>;
  categoryId: number;

  constructor(private categoryService: CategoryService, private avRoute: ActivatedRoute) {
    const my_id = 'id';
    if (this.avRoute.snapshot.params[my_id]) {
      this.categoryId = this.avRoute.snapshot.params[my_id];
    }
  }

  ngOnInit () : void {
    this.loadCategoryById();
  }

  loadCategoryById() {
    this.category$ = this.categoryService.getCategory(this.categoryId);
  }
}