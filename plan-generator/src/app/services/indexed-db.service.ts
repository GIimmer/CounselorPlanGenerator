import { Injectable } from '@angular/core';
import { db, DBManifestation, DBSubcategory, } from 'db';
import { Manifestation, Subcategory } from '../options-tree/options-tree.models';

@Injectable({
  providedIn: 'root'
})
export class IndexedDBService {

  public static async createNewManifestation(subcategoryId: number, description: string): Promise<DBManifestation> {
    const newManifestation: DBManifestation = { subcategoryId, description, frequency: 1, selected: false };
    const newManifestationId = db.manifestations.add(newManifestation);
    return Object.assign({ id: newManifestationId }, newManifestation);
  }

  public static async incrementManifestationFreq({ id }: DBManifestation) {
    const manifestation = await db.manifestations.get(id as number);
  }

  public static async deselectAllManifestations() {
    return await db.manifestations.toCollection().modify({ selected: false});
  }
  
  public static async toggleManifestationSelected(manifestation: DBManifestation) {
    if (manifestation) {
      await db.manifestations.update(manifestation, { selected: !manifestation.selected });
    }
  }
}
