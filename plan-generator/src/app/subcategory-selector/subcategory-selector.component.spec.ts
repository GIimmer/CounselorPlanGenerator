import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubcategorySelectorComponent } from './subcategory-selector.component';

describe('SubcategorySelectorComponent', () => {
  let component: SubcategorySelectorComponent;
  let fixture: ComponentFixture<SubcategorySelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubcategorySelectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubcategorySelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
