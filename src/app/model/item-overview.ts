import { Item } from './item';

export interface ItemOverview extends Omit<Item, 'description'> {}
