import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EnderecosListComponent } from './components/enderecos-list/enderecos-list.component';
import { CreateEnderecosComponent } from './components/create-enderecos/create-enderecos.component';
import { FooterComponent } from "./layout/footer/footer.component";
import { HeadComponent } from "./layout/head/head.component";
import { AddressComponent } from "./components/address/address.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EnderecosListComponent, CreateEnderecosComponent, HeadComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'EletroTADS-FrontEnd';
}
