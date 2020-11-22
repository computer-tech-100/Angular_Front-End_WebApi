import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPostPutComponent } from './product-post-put.component';

describe('ProductPostPutComponent', () => {
  let component: ProductPostPutComponent;
  let fixture: ComponentFixture<ProductPostPutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductPostPutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductPostPutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
