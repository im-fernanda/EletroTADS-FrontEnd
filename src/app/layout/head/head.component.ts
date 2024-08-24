import { Component } from '@angular/core';

@Component({
  selector: 'app-head',
  standalone: true,
  imports: [],
  templateUrl: './head.component.html',
  styleUrl: './head.component.scss'
})
export class HeadComponent {
  
  addAddress() {
    // Lógica para adicionar um novo endereço
    console.log('Adicionar Endereço acionado');
  }
}
