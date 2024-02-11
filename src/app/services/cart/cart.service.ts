import { Injectable } from '@angular/core';
import { Cart } from 'src/app/shared/Cart';
import { CartItems } from 'src/app/shared/CartItem';
import { coffee } from 'src/app/shared/models/coffee';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: Cart = new Cart();

  addToCart(coffee: coffee): void {
    let cartItem = this.cart.items.find(item => item.coffee.id === coffee.id);
    if (cartItem) {
      this.changeQuantity(coffee.id, cartItem.quantity + 1);
      return;
    }
    this.cart.items.push(new CartItems(coffee));
  }

  removeFromCart(coffeeId: number): void {
    this.cart.items =
      this.cart.items.filter(item => item.coffee.id != coffeeId);
  }

  changeQuantity(coffeeId: number, quantity: number) {
    let cartItem = this.cart.items.find(item => item.coffee.id === coffeeId);
    if (!cartItem) return;
    cartItem.quantity = quantity;
  }

  clearCart(): void {
    this.cart.items = [];
  }

  getCart(): Cart {
    return this.cart;
  }
}


