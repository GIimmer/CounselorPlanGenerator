export interface Category {
  value: string;
  subCategories: Subcategory[];

}

export interface Subcategory {
  value: string;
  manifestations: string[];
}