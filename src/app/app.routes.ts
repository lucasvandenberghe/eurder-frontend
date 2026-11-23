import { Routes } from '@angular/router';
import { ItemList } from './layout/item-list/item-list';
import { CreateItem } from './layout/create-item/create-item';

export const routes: Routes = [
  { path: 'items', component: ItemList },
  { path: 'items/create', component: CreateItem },
];
