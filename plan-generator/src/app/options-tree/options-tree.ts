import { CharacterAndFitness } from "./categories/characterAndFitness.category";
import { Characteristics } from "./categories/characteristics.category";
import { Facilitation } from "./categories/facilitation.category";
import { Skills } from "./categories/skills.category";
import { PredefinedCategory } from "./options-tree.models";

export const Categories: PredefinedCategory[] = [
  Skills,
  Facilitation,
  Characteristics,
  CharacterAndFitness
];