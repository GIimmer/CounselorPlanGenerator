import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SelectionListComponent } from './selection-list/selection-list.component';
import { MatListModule } from '@angular/material/list'; 
import { MatStepperModule } from '@angular/material/stepper';
import {MatInputModule} from '@angular/material/input';
import { CategorySelectorComponent } from './category-selector/category-selector.component';
import { SubcategorySelectorComponent } from './subcategory-selector/subcategory-selector.component';
import { ManifestationSelectorComponent } from './manifestation-selector/manifestation-selector.component';
import { DocumentService } from './services/document.service';

@NgModule({
  declarations: [
    AppComponent,
    SelectionListComponent,
    CategorySelectorComponent,
    SubcategorySelectorComponent,
    ManifestationSelectorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatListModule,
    MatStepperModule,
    MatInputModule
  ],
  providers: [
    DocumentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
