import { Item } from './item';

export interface ItemCreation extends Omit<Item, 'id' | 'stockUrgency'> {}
