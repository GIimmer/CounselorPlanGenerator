import { Component } from '@angular/core';
import { Categories } from './options-tree/options-tree';
import { Category } from './options-tree/options-tree.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'plan-generator';

  categories = Categories;

  onCategorySelected(category: Category) {

  }
}
