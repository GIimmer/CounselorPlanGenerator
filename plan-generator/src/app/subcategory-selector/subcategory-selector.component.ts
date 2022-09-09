import { Component, EventEmitter, Input, Output } from '@angular/core';
import { db, DBSubcategory } from 'db';

@Component({
  selector: 'app-subcategory-selector',
  templateUrl: './subcategory-selector.component.html',
  styleUrls: ['./subcategory-selector.component.scss'],
})
export class SubcategorySelectorComponent {
  private _selectedCategoryId!: number;
  public get selectedCategoryId(): number {
    return this._selectedCategoryId;
  }
  @Input()
  public set selectedCategoryId(value: number) {
    if (typeof value === 'number') {
      this._selectedCategoryId = value as number;
      this.setSubcategories();
    }
  }

  @Output() subcategorySelected: EventEmitter<DBSubcategory> = new EventEmitter();

  subcategories: DBSubcategory[] | undefined;

  async setSubcategories() {
    this.subcategories = await db.subcategories?.where({ categoryId: this.selectedCategoryId }).toArray();
  }

  onSubcategorySelected(subcategory: DBSubcategory) {
    this.subcategorySelected.emit(subcategory);
  }
}
