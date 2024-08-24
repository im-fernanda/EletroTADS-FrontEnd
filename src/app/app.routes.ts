import { Routes } from '@angular/router';
import { appConfig } from './app.config';

export const routes: Routes = [
  
  {
    path: 'enderecos', loadComponent: () => import('./components/enderecos-list/enderecos-list.component')
      .then(
        (c) => c.EnderecosListComponent,
      ),

  },

  {
    path: 'criar-enderecos', loadComponent: () => import('./components/create-enderecos/create-enderecos.component').then(
      (c) => c.CreateEnderecosComponent,
    ),
  }
];
