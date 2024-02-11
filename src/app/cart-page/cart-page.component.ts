import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../services/cart/cart.service';
import { Cart } from '../shared/Cart';
import { CartItems } from '../shared/CartItem';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
  showThanksMessage = false;
  cart!: Cart;
  constructor(private cartService: CartService, private router: Router) {
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

  onBuyClick() {
    this.showThanksMessage = true;
    setTimeout(() => {
      this.showThanksMessage = false;
      this.cartService.clearCart();
      this.router.navigate(['/home']);
    }, 3000);
  }


}