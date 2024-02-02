import { Component, OnInit } from '@angular/core';
import { Cart } from '../shared/Cart';
import { CartService } from '../services/cart/cart.service';
import { CartItems } from '../shared/CartItem';
import { CoffeeService } from '../services/coffee/coffee.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
  cart!: Cart;
  constructor(private cartService: CartService) {
    this.setCart();
  }
  ngOnInit(): void {
  }

  removeFromCart(cartItem: CartItems) {
    this.cartService.removeFromCart(cartItem.coffee.id);
    this.setCart();
  }

  changeQuantity(cartItem: CartItems, quantityInString: string) {
    const quantity = parseInt(quantityInString);
    this.cartService.changeQuantity(cartItem.coffee.id, quantity);
    this.setCart();
  }

  setCart() {
    this.cart = this.cartService.getCart();
  }

}







