import { Category, PredefinedCategory, PredefinedSubcategory, Subcategory } from "../options-tree.models";

const SubCategories: PredefinedSubcategory[] = [
  { description: '', manifestations: [] },
  { description: '', manifestations: [] },
  { description: '', manifestations: [] },
  { description: '', manifestations: [] },
  { description: '', manifestations: [] },
];

export const Facilitation: PredefinedCategory = {
  description: 'Group Facilitation',
  subCategories: SubCategories
}