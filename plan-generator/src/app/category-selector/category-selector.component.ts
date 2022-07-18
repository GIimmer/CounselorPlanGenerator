import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Category } from '../options-tree/options-tree.models';

@Component({
  selector: 'app-category-selector',
  templateUrl: './category-selector.component.html',
  styleUrls: ['./category-selector.component.scss']
})
export class CategorySelectorComponent implements OnInit {
  @Input() categories: Category[] = [];
  @Output() categorySelected: EventEmitter<Category> = new EventEmitter();

  ngOnInit(): void {}

  onCategorySelected(category: Category) {
    let lol;
  }

}
