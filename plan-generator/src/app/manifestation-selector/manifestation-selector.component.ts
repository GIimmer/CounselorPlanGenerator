import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { db, DBManifestation, DBSubcategory } from 'db';
import { liveQuery } from 'dexie';
import { Manifestation } from '../options-tree/options-tree.models';
import { IndexedDBService } from '../services/indexed-db.service';

@Component({
  selector: 'app-manifestation-selector',
  templateUrl: './manifestation-selector.component.html',
  styleUrls: ['./manifestation-selector.component.scss']
})
export class ManifestationSelectorComponent implements OnInit {
  @Input() selectedSubcategory!: DBSubcategory;
  @Output() manifestationsSubmitted: EventEmitter<DBManifestation> = new EventEmitter();

  manifestations$ = liveQuery(
    () => this.listManifestations()
  ); 

  async listManifestations() {
    return await db.manifestations
      .where({
        subcategoryId: this.selectedSubcategory.id,
      })
      .toArray();
  }

  ngOnInit(): void {
  }


  addManifestation(event: Event) {
    const newDescription = (event.currentTarget as HTMLTextAreaElement).value;
    IndexedDBService.createNewManifestation(this.selectedSubcategory, newDescription);
  }

  onManifestationSelected(manifestation: DBManifestation) {
    IndexedDBService.toggleManifestationSelected(manifestation);
  }

  submitManifestations() {}
}
