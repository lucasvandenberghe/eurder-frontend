import { Component, inject, signal } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { form, FormField, FormRoot, maxLength, min, required } from '@angular/forms/signals';
import { ItemService } from '../../service/item.service';
import { ItemCreation } from '../../model/item-creation';
import { firstValueFrom } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';

@Component({
  imports: [ReactiveFormsModule, FormField, FormRoot],
  selector: 'app-create-item',
  styleUrl: './create-item.css',
  templateUrl: './create-item.html',
})
export class CreateItem {
  private static readonly emptyItem: ItemCreation = {
    name: '',
    description: '',
    price: 0,
    amountOfStock: 0,
  };

  private readonly itemService = inject(ItemService);
  private readonly router = inject(Router);

  private newItem = signal<ItemCreation>({ ...CreateItem.emptyItem });

  protected itemForm = form(this.newItem, (schemaPath) => {
    required(schemaPath.name, { message: 'A name is required.' });
    required(schemaPath.description, { message: 'A description is required.' });
    maxLength(schemaPath.description, 255, { message: 'The description cannot exceed 255 characters.'})
    required(schemaPath.price, { message: 'A price is required.' });
    min(schemaPath.price, 0, { message: 'The price cannot be a negative number.'})
    required(schemaPath.amountOfStock, { message: 'A stock amount is required.' });
    min(schemaPath.amountOfStock, 0, { message: 'The amount of stock cannot be a negative number.' });
  },
    {
      submission: {
        action: async () => {
          const createdItem = await firstValueFrom(this.itemService.createItem(this.newItem()));

          this.itemForm().reset();

          this.router.navigate([`${environment.backendUrl}/items`, createdItem.id]);
        }
      }
    });
}
