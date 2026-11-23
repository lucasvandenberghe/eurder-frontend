import { Component, computed, input } from '@angular/core';
import { ItemOverview } from '../../../model/item-overview';

@Component({
  imports: [],
  selector: 'app-item-card',
  styleUrl: './item-card.css',
  templateUrl: './item-card.html',
})
export class ItemCard {
  private static mapToIconUrl(urgencyLevel: string): string | undefined {
    switch (urgencyLevel) {
      case 'STOCK_HIGH':
        return 'img/warning-icon-green.png';
      case 'STOCK_MEDIUM':
        return 'img/warning-icon-orange.png';
      case 'STOCK_LOW':
        return 'img/warning-icon-red.png';
      default:
        return undefined;
    }
  }

  readonly item = input.required<ItemOverview>();

  protected readonly stockIconUrl = computed<string | undefined>(() => {
    return ItemCard.mapToIconUrl(this.item().stockUrgency);
  });
}
