import { Component, OnInit } from '@angular/core';
import { coffee } from '../shared/models/coffee';
import { ActivatedRoute, Router } from '@angular/router';
import { CoffeeService } from '../services/coffee/coffee.service';
import { CartService } from '../services/cart/cart.service';

@Component({
  selector: 'app-coffee-page',
  templateUrl: './coffee-page.component.html',
  styleUrls: ['./coffee-page.component.css']
})
export class coffeePageComponent implements OnInit {

  coffee!: coffee;
  constructor(private activatedRoute: ActivatedRoute,
    private coffeeService: CoffeeService,
    private cartService: CartService,
    private router: Router) {
    activatedRoute.params.subscribe((params) => {
      if (params['id'])
        this.coffee = coffeeService.getCoffeeById(params['id']);
    })

  }

  ngOnInit(): void {
  }

  addToCart() {
    this.cartService.addToCart(this.coffee);
    this.router.navigateByUrl('/cart-page');
  }

}
