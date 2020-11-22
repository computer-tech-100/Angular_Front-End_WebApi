import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryPostPutComponent } from './category-post-put.component';

describe('CategoryPostPutComponent', () => {
  let component: CategoryPostPutComponent;
  let fixture: ComponentFixture<CategoryPostPutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryPostPutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryPostPutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
