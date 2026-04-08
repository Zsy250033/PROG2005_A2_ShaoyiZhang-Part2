import { Component, OnInit } from '@angular/core';
import { InventoryService, InventoryItem } from '../../services/inventory.service';

@Component({
  selector: 'app-inventory-manage',
  templateUrl: './inventory-manage.component.html'
})
export class InventoryManageComponent implements OnInit {
  inventory: InventoryItem[] = [];
  newItem: InventoryItem = {
    itemId: '',
    itemName: '',
    category: '',
    quantity: 0,
    price: 0,
    supplierName: '',
    stockStatus: 'In Stock',
    popularItem: 'No'
  };
  message: string = '';

  constructor(private inventoryService: InventoryService) {}

  ngOnInit() {
    this.loadInventory();
  }

  loadInventory() {
    this.inventory = this.inventoryService.getInventory();
  }

  addItem() {
    const result = this.inventoryService.addItem(this.newItem);
    this.message = result.message;
    if (result.success) {
      this.loadInventory();
      this.resetForm();
    }
  }

  deleteItem(itemName: string) {
    const result = this.inventoryService.deleteItem(itemName);
    this.message = result.message;
    if (result.success) this.loadInventory();
  }

  resetForm() {
    this.newItem = {
      itemId: '', itemName: '', category: '', quantity: 0, price: 0,
      supplierName: '', stockStatus: 'In Stock', popularItem: 'No'
    };
  }
}