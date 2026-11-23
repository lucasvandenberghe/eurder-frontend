import { inject, Service } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { ItemOverview } from '../model/item-overview';

@Service()
export class ItemService {
  private readonly http = inject(HttpClient);
  private readonly itemsUrl = `${environment.backendUrl}/items`;

  getItems(): Observable<ItemOverview[]> {
    return this.http.get<ItemOverview[]>(this.itemsUrl);
  }
}
