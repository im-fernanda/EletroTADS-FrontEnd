import { Routes } from '@angular/router';
import { appConfig } from './app.config';

export const routes: Routes = [
  // Rota raiz redirecionando para a lista de endereços
  { path: '', redirectTo: 'enderecos', pathMatch: 'full' },

  // Rota para a lista de endereços
  { 
    path: 'enderecos', 
    loadComponent: () => import('./components/enderecos-list/enderecos-list.component')
      .then((c) => c.EnderecosListComponent)
  },

  // Rota para um endereço específico
  { 
    path: 'enderecos/:id', 
    loadComponent: () => import('./components/enderecos-list/enderecos-list.component')
      .then((c) => c.EnderecosListComponent)
  },

  // Rota para criar um novo endereço
  { 
    path: 'criar-enderecos', 
    loadComponent: () => import('./components/create-enderecos/create-enderecos.component')
      .then((c) => c.CreateEnderecosComponent)
  },
];
