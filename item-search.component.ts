import { Component } from '@angular/core';
import { InventoryService, InventoryItem } from '../../services/inventory.service';

@Component({
  selector: 'app-item-search',
  templateUrl: './item-search.component.html'
})
export class ItemSearchComponent {
  searchTerm: string = '';
  searchResults: InventoryItem[] = [];

  constructor(private inventoryService: InventoryService) {}

  searchItems() {
    this.searchResults = this.inventoryService.searchItems(this.searchTerm);
  }
}