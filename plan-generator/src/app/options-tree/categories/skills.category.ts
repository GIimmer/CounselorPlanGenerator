import { Category, Subcategory } from "../options-tree.models";

const SubCategories: Subcategory[] = [
  { value: '', manifestations: [] },
  { value: '', manifestations: [] },
  { value: '', manifestations: [] },
  { value: '', manifestations: [] },
  { value: '', manifestations: [] },
];

export const Skills: Category = {
  value: 'Skills',
  subCategories: SubCategories
}