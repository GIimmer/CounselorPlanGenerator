import { PredefinedCategory, PredefinedSubcategory } from "../options-tree.models";

const SubCategories: PredefinedSubcategory[] = [
  { 
    description: 'Respect', 
    manifestations: [
    {
      description: 'manifestation 1',
      frequency: 5,
    },
    {
      description: 'manifestation 2',
      frequency: 7
    },
    {
      description: 'manifestation 3',
      frequency: 2
    },
  ] },
  { description: 'Empathy', manifestations: [] },
  { description: 'Warmth', manifestations: [] },
  { description: 'Genuineness', manifestations: [] },
  { description: 'Potency', manifestations: [] },
  { description: 'Concreteness', manifestations: [] },
  { description: 'Awareness', manifestations: [] },
];

export const Characteristics: PredefinedCategory = {
  description: 'Characteristics',
  subCategories: SubCategories
}
