import { Component, OnInit } from '@angular/core';
import { CoffeeService } from '../services/coffee/coffee.service';
import { coffee } from '../shared/models/coffee';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  coffees: coffee[] = [];

  constructor(private coffeeServices: CoffeeService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['searchTerm'])
        this.coffees = this.coffeeServices.getAll().filter(coffee =>
          coffee.name.toLocaleLowerCase().includes(params['searchTerm'].toLocaleLowerCase()));
      else if (params['tag'])
        this.coffees = this.coffeeServices.getAllcoffesByTag(params['tag']);
      else
        this.coffees = this.coffeeServices.getAll();
    })

  }

}

