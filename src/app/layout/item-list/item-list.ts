import { Component, inject } from '@angular/core';
import { ItemService } from '../../service/item.service';
import { rxResource } from '@angular/core/rxjs-interop';
import { ItemCard } from './item-card/item-card';

@Component({
  imports: [ItemCard],
  selector: 'app-item-list',
  styleUrl: './item-list.css',
  templateUrl: './item-list.html',
})
export class ItemList {
  private readonly itemService = inject(ItemService);
  protected readonly items = rxResource({
    stream: () => this.itemService.getItems(),
    defaultValue: [],
  });
}
