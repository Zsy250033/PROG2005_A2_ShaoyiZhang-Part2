// Author: Shaoyi Zhang
// PROG2005 Assignment 2 Part 2
export interface InventoryItem {
  itemId: string;
  itemName: string;
  category: string;
  quantity: number;
  price: number;
  supplierName: string;
  stockStatus: 'In Stock' | 'Low Stock' | 'Out of Stock';
  popularItem: 'Yes' | 'No';
  comment?: string;
}

import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class InventoryService {
  private inventory: InventoryItem[] = [];

  getInventory(): InventoryItem[] {
    return [...this.inventory];
  }

  addItem(item: InventoryItem): { success: boolean; message: string } {
    const exists = this.inventory.some(i => i.itemId === item.itemId);
    if (exists) return { success: false, message: 'ID already exists' };
    this.inventory.push(item);
    return { success: true, message: 'Item added' };
  }

  updateItem(name: string, data: InventoryItem) {
    const idx = this.inventory.findIndex(i => i.itemName === name);
    if (idx === -1) return { success: false, message: 'Not found' };
    this.inventory[idx] = data;
    return { success: true, message: 'Updated' };
  }

  deleteItem(name: string) {
    const len = this.inventory.length;
    this.inventory = this.inventory.filter(i => i.itemName !== name);
    return this.inventory.length < len
      ? { success: true, message: 'Deleted' }
      : { success: false, message: 'Not found' };
  }

  searchItems(term: string) {
    return this.inventory.filter(i =>
      i.itemName.toLowerCase().includes(term.toLowerCase())
    );
  }

  getPopularItems() {
    return this.inventory.filter(i => i.popularItem === 'Yes');
  }
}