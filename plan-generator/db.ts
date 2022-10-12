import Dexie, { Table } from 'dexie';
import { Categories } from 'src/app/options-tree/options-tree';
import { Category, Manifestation, Subcategory } from 'src/app/options-tree/options-tree.models';

export interface TodoList {
  id?: number;
  title: string;
}
export interface TodoItem {
  id?: number;
  todoListId: number;
  title: string;
  done?: boolean;
}

export interface DBCategory extends Category {
  id?: number;
}

export interface DBSubcategory extends Subcategory {
  id?: number;
  categoryId?: number;
}

export interface DBManifestation extends Manifestation {
  id?: number;
  subcategoryId?: number;
}

export class AppDB extends Dexie {
  categories!: Table<DBCategory, number>;
  subcategories!: Table<DBSubcategory, number>;
  manifestations!: Table<DBManifestation, number>;

  todoItems!: Table<TodoItem, number>;
  todoLists!: Table<TodoList, number>;

  constructor() {
    super('ngdexieliveQuery');
    this.version(2).stores({
      categories: '++id',
      subcategories: '++id, categoryId',
      manifestations: '++id, subcategoryId, selected',
    });
    this.on('populate', () => this.populate());
  }

  async populate() {
    Categories.forEach(async ({ description, subCategories}) => {
      const categoryId = await db.categories.add({ description });

      subCategories.forEach(async ({ description, manifestations }) => {
        const subcategoryId = await db.subcategories.add({ categoryId, description});
      
        const manifestationsArr = manifestations.reduce((acc, { description, frequency }) => {
            const temp: DBManifestation = { description, frequency: frequency || 1, subcategoryId, selected: false };
            acc.push(temp);
            return acc;
        }, [] as DBManifestation[]);

        await db.manifestations.bulkAdd(manifestationsArr);
      })
    })
  };
}

export const db = new AppDB();