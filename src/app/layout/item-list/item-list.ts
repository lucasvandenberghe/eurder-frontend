import { Component, computed, inject, signal } from '@angular/core';
import { ItemService } from '../../service/item.service';
import { rxResource } from '@angular/core/rxjs-interop';
import { ItemCard } from './item-card/item-card';
import { FormsModule } from '@angular/forms';
import { ItemOverview } from '../../model/item-overview';

@Component({
  imports: [ItemCard, FormsModule],
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

  protected searchText = signal('');

  protected readonly filteredItems = computed<ItemOverview[]>(() => {
    return [...this.items.value()]
      .filter(item => item.name.toLowerCase().startsWith(this.searchText().toLowerCase()));
  })
}
