import { Injectable } from '@angular/core';
import { db, DBManifestation } from 'db';


@Injectable({
  providedIn: 'root'
})
export class IndexedDBService {

  public static async createNewManifestation(subcategoryId: number, description: string): Promise<DBManifestation> {
    const newManifestation: DBManifestation = { subcategoryId, description, frequency: 1, selected: false };
    const newManifestationId = db.manifestations.add(newManifestation);
    return Object.assign({ id: newManifestationId }, newManifestation);
  }

  public static async incrementManifestationFreq(manifestation: DBManifestation) {
    await db.manifestations.update(manifestation, { frequency: manifestation.frequency + 1 });

  }

  public static async deleteManifestation({ id }: DBManifestation) {
    const lol = await db.manifestations.delete(id);
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
