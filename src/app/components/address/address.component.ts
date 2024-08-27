import { Component, Input } from '@angular/core';
import { Address } from '../../model/address'; // Importa a classe Address (ajuste o caminho conforme necessário)

@Component({
  selector: 'app-address', // Nome da tag HTML usada para inserir este componente
  standalone: true, // Indica que o componente pode ser usado independentemente
  templateUrl: './address.component.html', // Caminho para o template HTML do componente
})
export class AddressComponent {

  // Propriedade de entrada (input) que recebe uma lista de endereços para exibição
  @Input() enderecosList: Address[] = []; // Lista de endereços a ser exibida na tabela

}


