import { PredefinedCategory, PredefinedSubcategory } from "../options-tree.models";

const SubCategories: PredefinedSubcategory[] = [
  { description: 'Class Participation', manifestations: [] },
  { description: 'Group Participation/Membership', manifestations: [] },
  { description: 'Complete Course requirements', manifestations: [] },
  { description: 'Impact of Personal Matters on Performance', manifestations: [] },
  { description: 'Openness', manifestations: [] },
  { description: 'Feedback Acceptance', manifestations: [] },
  { description: 'Communication Style', manifestations: [] },
]

export const CharacterAndFitness: PredefinedCategory = {
  description: 'Character And Fitness',
  subCategories: SubCategories
}

