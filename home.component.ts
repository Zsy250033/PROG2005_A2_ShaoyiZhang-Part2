import { Component, OnInit } from '@angular/core';
import { InventoryService, InventoryItem } from '../../services/inventory.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  popularItems: InventoryItem[] = [];

  constructor(private inventoryService: InventoryService) {}

  ngOnInit() {
    this.popularItems = this.inventoryService.getPopularItems();
  }
}