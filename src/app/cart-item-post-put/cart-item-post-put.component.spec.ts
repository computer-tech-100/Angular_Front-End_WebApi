import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartItemPostPutComponent } from './cart-item-post-put.component';

describe('CartItemPostPutComponent', () => {
  let component: CartItemPostPutComponent;
  let fixture: ComponentFixture<CartItemPostPutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartItemPostPutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartItemPostPutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
