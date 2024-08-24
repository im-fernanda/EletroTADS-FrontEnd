import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-address',
  standalone: true,
  imports: [],
  templateUrl: './address.component.html',
  styleUrl: './address.component.scss'
})
export class AddressComponent {
  @Input() rua: string = '';
  @Input() numero: string = '';
  @Input() bairro: string = '';
  @Input() complemento: string = '';
  @Input() cidade: string = '';
  @Input() uf: string = '';

}

