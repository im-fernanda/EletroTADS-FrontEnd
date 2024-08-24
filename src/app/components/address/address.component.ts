import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-address',
  standalone: true,
  templateUrl: './address.component.html',
})
export class AddressComponent {

  @Input() enderecosList: Address[] = []; // Lista de endereços que será exibida na tabela

  // Métodos de edição e exclusão
  edit(endereco: Address): void {
    // Implementar lógica de edição
  }

  deleteById(endereco: Address): void {
    // Implementar lógica de exclusão
  }
}

// Definição da interface Address, que pode estar em um arquivo separado, por exemplo, address.model.ts
export interface Address {
  id: number;
  rua: string;
  numero: string;
  bairro: string;
  complemento: string;
  cidade: string;
  uf: string;
}


