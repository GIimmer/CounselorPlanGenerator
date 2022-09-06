import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { db, DBCategory, DBSubcategory } from 'db';
import { liveQuery } from 'dexie';
import { Category, Subcategory } from '../options-tree/options-tree.models';

@Component({
  selector: 'app-subcategory-selector',
  templateUrl: './subcategory-selector.component.html',
  styleUrls: ['./subcategory-selector.component.scss'],
})
export class SubcategorySelectorComponent implements OnInit {
  private _selectedCategoryId!: number | undefined;
  @Input()
  public get selectedCategoryId(): number | undefined {
    return this._selectedCategoryId;
  }
  public set selectedCategoryId(value: number | undefined) {
    this._selectedCategoryId = value;
  }
  @Output() subcategorySelected: EventEmitter<DBSubcategory> = new EventEmitter();

  subcategories$ = liveQuery(
    () => this.listSubcategories()
  ); 

  async listSubcategories() {
    // const lol = this.selectedCategory;
    const lol = await db.subcategories?.where({ categoryId: this.selectedCategoryId }).toArray();
    return lol
  }

  ngOnInit(): void {
  }

  onSubcategorySelected(subcategory: DBSubcategory) {
    this.subcategorySelected.emit(subcategory);
  }
}
