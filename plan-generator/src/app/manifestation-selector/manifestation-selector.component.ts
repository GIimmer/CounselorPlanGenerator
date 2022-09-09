import { Component, EventEmitter, Input, Output } from '@angular/core';
import { db, DBManifestation } from 'db';
import { IndexedDBService } from '../services/indexed-db.service';

@Component({
  selector: 'app-manifestation-selector',
  templateUrl: './manifestation-selector.component.html',
  styleUrls: ['./manifestation-selector.component.scss']
})
export class ManifestationSelectorComponent {
  private _selectedSubcategoryId!: number;
  public get selectedSubcategoryId(): number {
    return this._selectedSubcategoryId;
  }
  @Input()
  public set selectedSubcategoryId(value: number) {
    if (typeof value === 'number') {
      this._selectedSubcategoryId = value;
      this.setManifestations();
    }
  }

  @Output() manifestationsSubmitted: EventEmitter<DBManifestation> = new EventEmitter();

  manifestations: DBManifestation[] = [];

  async setManifestations() {
    this.manifestations = await db.manifestations?.where({ subcategoryId: this.selectedSubcategoryId }).toArray();
    let lol = this.manifestations;
  }

  async addManifestation(event: Event) {
    const newDescription = (event.currentTarget as HTMLTextAreaElement).value;
    IndexedDBService.createNewManifestation(this.selectedSubcategoryId as number, newDescription);
    (event.currentTarget as HTMLTextAreaElement).value = '';
    this.setManifestations();
  }

  async onManifestationSelected(manifestation: DBManifestation) {
    await IndexedDBService.toggleManifestationSelected(manifestation);
    this.setManifestations()
  }

  submitManifestations() {}
}
