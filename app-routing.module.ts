import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { InventoryManageComponent } from './components/inventory-manage/inventory-manage.component';
import { ItemSearchComponent } from './components/item-search/item-search.component';
import { PrivacySecurityComponent } from './components/privacy-security/privacy-security.component';
import { HelpComponent } from './components/help/help.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'manage', component: InventoryManageComponent },
  { path: 'search', component: ItemSearchComponent },
  { path: 'privacy', component: PrivacySecurityComponent },
  { path: 'help', component: HelpComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }