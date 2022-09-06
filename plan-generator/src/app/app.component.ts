import { Component, ViewChild } from '@angular/core';
import { MatStepper } from '@angular/material/stepper';
import { DBCategory, DBManifestation, DBSubcategory } from 'db';
import { Categories } from './options-tree/options-tree';
import { Category, Manifestation, Subcategory } from './options-tree/options-tree.models';
import { DocumentService } from './services/document.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('stepper') stepper!: MatStepper;
  title = 'plan-generator';

  selectedCategory: DBCategory | null = null;
  selectedSubcategory!: DBSubcategory;
  selectedManifestations: { [id: number]: DBManifestation } = {};

  categories = Categories;

  constructor(private document: DocumentService){}

  private intializeDocument(name: string = 'myname') {
    this.document.create(name);
  }

  onGenerate() {
    const allSelectedManifesations = Object.values(this.selectedManifestations);
    // const unique
  }

  onCategorySelected(category: DBCategory) {
    this.selectedCategory = category;
    this.stepper.next();
  }

  onSubcategorySelected(subcategory: any) {
    this.selectedSubcategory = subcategory;
    this.stepper.next();
  }

  onManifestationSelected(manifestation: any) {
    this.selectedManifestations[manifestation.id as number] = manifestation;
  }

  onManifestationDeselected(manifestation: any) {
    delete this.selectedManifestations[manifestation.id as number];
  }
}
