import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManifestationSelectorComponent } from './manifestation-selector.component';

describe('ManifestationSelectorComponent', () => {
  let component: ManifestationSelectorComponent;
  let fixture: ComponentFixture<ManifestationSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManifestationSelectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManifestationSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
