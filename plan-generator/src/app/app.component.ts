import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { DBCategory, DBManifestation, DBSubcategory } from 'db';
import { Categories } from './options-tree/options-tree';
import { DocumentService } from './services/document.service';
import { IndexedDBService } from './services/indexed-db.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('stepper') stepper!: MatStepper;
  title = 'plan-generator';

  name = new FormControl('');

  selectedCategory!: Required<DBCategory>;
  selectedSubcategory!: Required<DBSubcategory>;
  selectedManifestationsRef: { [category: string]: { [subcategory: string]: DBManifestation[] } } = {};

  categories = Categories;

  constructor(private document: DocumentService, private cd: ChangeDetectorRef){}

  onClickGenerate() {
    const studentName = this.name.value;
    if (studentName) {
      this.document.create(studentName);
    }
  }

  async onClickReset() {
    await IndexedDBService.deselectAllManifestations();
    this.selectedCategory = null;
    this.selectedSubcategory = null;
    this.selectedManifestationsRef = {};
    this.name.setValue('');
    this.stepper.reset();
  }

  onCategorySelected(category: DBCategory) {
    this.selectedCategory = category as Required<DBCategory>;
    this.stepper.next();
  }

  onSubcategorySelected(subcategory: DBSubcategory) {
    this.selectedSubcategory = subcategory as Required<DBSubcategory>;
    this.stepper.next();
  }

  onManifestationSelected(manifestation: any) {
    this.addManifestationToReference(manifestation as DBManifestation);
  }

  onManifestationDeselected(manifestation: any) {
    this.removeManifestationFromReference(manifestation as DBManifestation);
  }

  private addManifestationToReference(manifestation: DBManifestation) {
    let categoryRef = this.selectedManifestationsRef[this.selectedCategory.description];
    if (!categoryRef) {
      categoryRef = this.selectedManifestationsRef[this.selectedCategory.description] = {};
    };
    let subcategoryRef = categoryRef[this.selectedSubcategory.description];
    if (!subcategoryRef) {
      subcategoryRef = categoryRef[this.selectedSubcategory.description] = [];
    }
    subcategoryRef.push(manifestation);
  }

  private removeManifestationFromReference(manifestation: DBManifestation) {
    const categoryRef = this.selectedManifestationsRef[this.selectedCategory.description];
    const subcategoryRef = categoryRef[this.selectedSubcategory.description];
    subcategoryRef.unshift(manifestation);
    if (subcategoryRef.length === 0) {
      delete categoryRef[this.selectedCategory.description];
      if (Object.values(categoryRef).length === 0) {
        delete this.selectedManifestationsRef[this.selectedCategory.description];
      }
    }
  }
}
