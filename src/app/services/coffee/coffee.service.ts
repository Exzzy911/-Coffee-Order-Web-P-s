import { Injectable } from '@angular/core';
import { coffee } from 'src/app/shared/models/coffee';
import { Tag } from 'src/app/shared/models/Tag';

@Injectable({
  providedIn: 'root'
})
export class CoffeeService {

  constructor() { }

  getCoffeeById(id: number): coffee {
    return this.getAll().find(coffee => coffee.id == id)!;
  }

  getAllCoffeesBySearchTerm(searchTerm: string): coffee[] {
    return this.getAll().filter(coffee =>
      coffee.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()));
  }


  getAllTags(): Tag[] {
    return [
      { name: 'All', count: 14 },
      { name: 'Drinks', count: 4 },
      { name: 'coffe1', count: 2 },
      { name: 'Lunch', count: 3 },
      { name: 'SlowFood', count: 1 },
      { name: 'Hamburger', count: 1 },
      { name: 'coffee3', count: 1 },
      { name: 'Soup', count: 1 }
    ];

  }



  getAllcoffesByTag(tag: string): coffee[] {

    return tag == "All" ?
      this.getAll() : this.getAll().filter(food =>
        food.tags?.includes(tag));
  }

  getAll(): coffee[] {
    return [
      {
        id: 1,
        name: 'Latte Flavoured',
        price: 40.5,
        tags: ['Drinks'],
        favourite: false,
        stars: 5.5,
        imageUrl: '/assets/images/food-7.jpg',
        origins: ['Italy'],
        cookTime: '10-15'
      },
      {
        id: 2,
        name: 'Espresso',
        price: 3.5,
        tags: ['Drinks'],
        favourite: false,
        stars: 4.5,
        imageUrl: '/assets/images/food-2.jpg',
        origins: ['Italy'],
        cookTime: '5-10'
      },
      {
        id: 3,
        name: 'Caramel Macchiato',
        price: 5.5,
        tags: ['Drinks'],
        favourite: false,
        stars: 4.0,
        imageUrl: '/assets/images/food-7.jpg',
        origins: ['Italy'],
        cookTime: '10-15'
      },
      {
        id: 4,
        name: 'Mocha',
        price: 4.5,
        tags: ['Drinks'],
        favourite: true,
        stars: 4.8,
        imageUrl: '/assets/images/food-7.jpg',
        origins: ['Italy'],
        cookTime: '8-12'
      },
      {
        id: 5,
        name: 'Iced Coffee',
        price: 3.0,
        tags: ['Drinks'],
        favourite: false,
        stars: 3.5,
        imageUrl: '/assets/images/food-7.jpg',
        origins: ['Italy'],
        cookTime: '5-10'
      },
      {
        id: 6,
        name: 'Hazelnut Latte',
        price: 6.0,
        tags: ['Drinks'],
        favourite: true,
        stars: 4.2,
        imageUrl: '/assets/images/food-7.jpg',
        origins: ['Italy'],
        cookTime: '10-15'
      },
      {
        id: 7,
        name: 'Hazelnut Latte',
        price: 6.0,
        tags: ['Drinks'],
        favourite: true,
        stars: 4.2,
        imageUrl: '/assets/images/food-7.jpg',
        origins: ['Italy'],
        cookTime: '10-15'
      },
      {
        id: 8,
        name: 'Hazelnut Latte',
        price: 6.0,
        tags: ['Drinks'],
        favourite: true,
        stars: 4.2,
        imageUrl: '/assets/images/food-7.jpg',
        origins: ['Italy'],
        cookTime: '10-15'
      },
      {
        id: 9,
        name: 'Hazelnut Latte',
        price: 6.0,
        tags: ['Drinks'],
        favourite: true,
        stars: 4.2,
        imageUrl: '/assets/images/food-7.jpg',
        origins: ['Italy'],
        cookTime: '10-15'
      },
      {
        id: 10,
        name: 'Hazelnut Latte',
        price: 6.0,
        tags: ['Drinks'],
        favourite: true,
        stars: 4.2,
        imageUrl: '/assets/images/food-7.jpg',
        origins: ['Italy'],
        cookTime: '10-15'
      },
      {
        id: 11,
        name: 'Hazelnut Latte',
        price: 6.0,
        tags: ['Drinks'],
        favourite: true,
        stars: 4.2,
        imageUrl: '/assets/images/food-7.jpg',
        origins: ['Italy'],
        cookTime: '10-15'
      },
      {
        id: 12,
        name: 'Hazelnut Latte',
        price: 6.0,
        tags: ['Drinks'],
        favourite: true,
        stars: 4.2,
        imageUrl: '/assets/images/food-7.jpg',
        origins: ['Italy'],
        cookTime: '10-15'
      },
      {
        id: 13,
        name: 'Hazelnut Latte',
        price: 6.0,
        tags: ['Drinks'],
        favourite: true,
        stars: 4.2,
        imageUrl: '/assets/images/food-7.jpg',
        origins: ['Italy'],
        cookTime: '10-15'
      },
      {
        id: 14,
        name: 'Hazelnut Latte',
        price: 6.0,
        tags: ['Drinks'],
        favourite: true,
        stars: 4.2,
        imageUrl: '/assets/images/food-7.jpg',
        origins: ['Italy'],
        cookTime: '10-15'
      },
      {
        id: 15,
        name: 'Hazelnut Latte',
        price: 6.0,
        tags: ['Drinks'],
        favourite: true,
        stars: 4.2,
        imageUrl: '/assets/images/food-7.jpg',
        origins: ['Italy'],
        cookTime: '10-15'
      },
      {
        id: 16,
        name: 'Hazelnut Latte',
        price: 6.0,
        tags: ['Drinks'],
        favourite: true,
        stars: 4.2,
        imageUrl: '/assets/images/food-7.jpg',
        origins: ['Italy'],
        cookTime: '10-15'
      },
      {
        id: 17,
        name: 'Espresso',
        price: 3.5,
        tags: ['Drinks'],
        favourite: false,
        stars: 4.5,
        imageUrl: '/assets/images/food-7.jpg',
        origins: ['Italy'],
        cookTime: '5-10'
      },
      {
        id: 18,
        name: 'Latte Flavoured',
        price: 40.5,
        tags: ['SlowFood'],
        favourite: true,
        stars: 5.5,
        imageUrl: '/assets/images/food-7.jpg',
        origins: ['Italy'],
        cookTime: '10-15'
      }

    ]

  }
}
