import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryListComponent } from './category-list/category-list.component';

const appRoutes: Routes = [
  {
    path: '',
    component: CategoryListComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
