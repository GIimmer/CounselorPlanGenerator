import { Category, Subcategory } from "../options-tree.models";

const SubCategories: Subcategory[] = [
  { value: '', manifestations: [] },
  { value: '', manifestations: [] },
  { value: '', manifestations: [] },
  { value: '', manifestations: [] },
  { value: '', manifestations: [] },
];

export const Facilitation: Category = {
  value: 'Facilitiation',
  subCategories: SubCategories
}