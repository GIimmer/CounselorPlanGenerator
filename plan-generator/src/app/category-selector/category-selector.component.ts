import { Component, EventEmitter, Input, Output } from '@angular/core';
import { db, DBCategory } from 'db';
import { liveQuery } from 'dexie';
import { Category } from '../options-tree/options-tree.models';

@Component({
  selector: 'app-category-selector',
  templateUrl: './category-selector.component.html',
  styleUrls: ['./category-selector.component.scss']
})
export class CategorySelectorComponent {
  @Output() categorySelected: EventEmitter<DBCategory> = new EventEmitter();
  categories$ = liveQuery(
    () => this.listCategories()
  ); 

  async listCategories() {
    const lel = await db.categories.toArray();
    return lel;
    // return await db.categories.toArray();
  }

  onCategorySelected(category: DBCategory) {
    this.categorySelected.emit(category);
  }
}
