import { CharacterAndFitness } from "./categories/characterAndFitness.category";
import { Characteristics } from "./categories/characteristics.category";
import { Facilitation } from "./categories/facilitation.category";
import { Skills } from "./categories/skills.category";
import { Category } from "./options-tree.models";

export const Categories: Category[] = [
  Skills,
  Facilitation,
  Characteristics,
  CharacterAndFitness
];