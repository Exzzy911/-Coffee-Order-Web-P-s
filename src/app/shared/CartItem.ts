import { coffee } from "./models/coffee";

export class CartItems {
    constructor(coffee: coffee) {
        this.coffee = coffee;

    }
    coffee: coffee;
    quantity: number = 1;

    get price(): number {
        return this.coffee.price * this.quantity;
    }
}