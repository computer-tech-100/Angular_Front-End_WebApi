import { DecimalPipe } from '@angular/common';
import { CartItem } from './cartItem';

export class Cart {
    
    id :number;

    cartItems :(CartItem)[];

    grandTotal: number;
    
}
