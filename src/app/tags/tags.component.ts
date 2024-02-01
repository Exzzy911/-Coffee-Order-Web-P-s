import { Component, OnInit } from '@angular/core';
import { Tag } from '../shared/models/Tag';
import { CoffeeService } from '../services/coffee/coffee.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {
  tags: Tag[] = [];

  constructor(private coffeeService: CoffeeService) { }

  ngOnInit(): void {
    this.tags = this.coffeeService.getAllTags();
  }

}
