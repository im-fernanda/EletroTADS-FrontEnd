import { Component, Input } from '@angular/core';
import { Address } from '../../model/address'; 

@Component({
  selector: 'app-address', 
  standalone: true,
  templateUrl: './address.component.html', 
})
export class AddressComponent {

  // Propriedade de entrada que recebe uma lista de endereços para exibição
  @Input() enderecosList: Address[] = []; 

}


