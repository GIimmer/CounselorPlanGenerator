import { Injectable } from '@angular/core';
import { db, DBManifestation, DBSubcategory, } from 'db';
import { Manifestation, Subcategory } from '../options-tree/options-tree.models';

@Injectable({
  providedIn: 'root'
})
export class IndexedDBService {

  public static async createNewManifestation(subCategory: DBSubcategory, description: string): Promise<DBManifestation> {
    const newManifestation: DBManifestation = { subcategoryId: subCategory.id, description, frequency: 1, selected: false };
    const newManifestationId = db.manifestations.add(newManifestation);
    return Object.assign({ id: newManifestationId }, newManifestation);
  }

  public static async incrementManifestationFreq({ id }: DBManifestation) {
    const manifestation = await db.manifestations.get(id as number);
  }
  
  public static async toggleManifestationSelected({ id }: DBManifestation) {
    const manifestation = await db.manifestations.get(id as number);
    if (manifestation) {
      db.manifestations.update(manifestation, { selected: !manifestation.selected });
    }
  }
}
