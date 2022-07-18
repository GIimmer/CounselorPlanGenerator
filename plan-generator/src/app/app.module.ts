import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SelectionListComponent } from './selection-list/selection-list.component';
import { MatListModule } from '@angular/material/list'; 
import { MatStepperModule } from '@angular/material/stepper';
import { CategorySelectorComponent } from './category-selector/category-selector.component';

@NgModule({
  declarations: [
    AppComponent,
    SelectionListComponent,
    CategorySelectorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatListModule,
    MatStepperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
