import { Component, Input, OnInit } from '@angular/core';
import { Tag } from '../shared/models/Tag';
import { CoffeeService } from '../services/coffee/coffee.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {
  @Input()
  coffeepageTags?: string[];

  @Input()
  justifyContent: string = 'center';

  tags?: Tag[];

  constructor(private coffeeService: CoffeeService) { }

  ngOnInit(): void {
    if (!this.coffeepageTags)
      this.tags = this.coffeeService.getAllTags();
  }



}
