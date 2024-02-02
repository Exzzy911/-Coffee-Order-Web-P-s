import { CartItems } from "./CartItem";

export class Cart {
    items: CartItems[] = [];

    get totalprice(): number {
        let totalprice = 0;
        this.items.forEach(items => {
            totalprice += items.price;
        });

        return totalprice;
    }
}