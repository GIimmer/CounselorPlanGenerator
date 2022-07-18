import { Category, Subcategory } from "../options-tree.models";

const SubCategories: Subcategory[] = [
  { value: 'Respect', manifestations: [] },
  { value: 'Empathy', manifestations: [] },
  { value: 'Warmth', manifestations: [] },
  { value: 'Genuineness', manifestations: [] },
  { value: 'Potency', manifestations: [] },
  { value: 'Concreteness', manifestations: [] },
  { value: 'Awareness', manifestations: [] },
];

export const Characteristics: Category = {
  value: 'Characteristics',
  subCategories: SubCategories
}
