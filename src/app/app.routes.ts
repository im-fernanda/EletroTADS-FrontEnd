import { Routes } from '@angular/router';

export const routes: Routes = [

    {path: '',loadComponent: () =>import('./app.component').then((c) => c.AppComponent),},
    {path: 'enderecos',children: [
          {
            path: ':id',loadComponent: () =>import('./components/enderecos-list/enderecos-list.component')
            .then(
                (c) => c.EnderecosListComponent,
              ),
          },
        ],
      },
      {path: 'criar-enderecos',loadComponent: () =>import('./components/create-enderecos/create-enderecos.component').then(
        (c) => c.CreateEnderecosComponent,
          ),
      },
      { path: '**', redirectTo: 'enderecos' },

];
