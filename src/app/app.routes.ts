import { Routes } from '@angular/router';
import { EnderecoListComponent } from './class/endereco-list/endereco-list.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './class/login/login.component';
import { EnderecoDetailsComponent } from './class/endereco-details/endereco-details.component';

export const routes: Routes = [
    {path: "", redirectTo:"login", pathMatch: 'full' },
    {path: "login", component: LoginComponent},

      {path: "endereco", component: EnderecoListComponent, children: [
      {path: "enderco/new", component: EnderecoDetailsComponent },
      {path: "endereco/edit/:id", component: EnderecoDetailsComponent },]
      }


];
