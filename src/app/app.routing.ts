import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryListComponent } from
 './category-list/category-list.component';
 import { CategoryDetailsComponent } from './category-details/category-details.component';

const appRoutes: Routes = [
  {
    path: '',
    component: CategoryListComponent
  },
  {
    path: ':title',
    component: CategoryDetailsComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
