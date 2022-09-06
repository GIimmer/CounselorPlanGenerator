export interface Category {
  description: string;
}

export interface Subcategory {
  description: string;
}

export interface Manifestation {
  description: string;
  frequency: number;
  selected?: boolean;
}

export interface PredefinedCategory extends Category {
  subCategories: PredefinedSubcategory[];
}

export interface PredefinedSubcategory extends Subcategory {
  manifestations: Manifestation[];
}