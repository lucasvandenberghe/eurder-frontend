import { inject, Service } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { ItemOverview } from '../model/item-overview';
import { ItemCreation } from '../model/item-creation';
import { Item } from '../model/item';

@Service()
export class ItemService {
  private readonly http = inject(HttpClient);
  private readonly itemsUrl = `${environment.backendUrl}/items`;

  getItems(): Observable<ItemOverview[]> {
    return this.http.get<ItemOverview[]>(this.itemsUrl);
  }

  createItem(item: ItemCreation): Observable<Item> {
    return this.http.post<Item>(this.itemsUrl, item);
  }
}
