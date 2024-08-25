import { Component, inject } from '@angular/core';
import { FooterComponent } from '../../layout/footer/footer.component';
import { HeadComponent } from '../../layout/head/head.component';
import { AddressService } from '../../service/service-enderecos.service';
import { Observable, tap } from 'rxjs';
import { Address } from '../../model/address';
import { RouterModule } from '@angular/router';
import { Enderecos } from '../../model/enderecos';
import Swal from 'sweetalert2';
import { errorContext } from 'rxjs/internal/util/errorContext';

@Component({
  selector: 'app-enderecos-list', 
  standalone: true, 
  imports: [FooterComponent, HeadComponent, RouterModule],
  templateUrl: './enderecos-list.component.html', 
})
export class EnderecosListComponent {

  
  private addressService = inject(AddressService);

  
  address$: Observable<Address[]> = new Observable();

  
  enderecosList: Address[] = [];
  id: number | undefined;
  endereco!: Enderecos;

  
  ngOnInit() {
    this.listAll(); // Carrega a lista de endereços quando o componente é inicializado
  }

  // Método para listar todos os endereços com paginação
  listAll() {
    this.address$ = this.addressService.getAddress(0, 20).pipe(
      tap((enderecos) => {
        console.log('Dados recebidos:', enderecos); // Verifica a tipagem dos dados
        this.enderecosList = enderecos;
      })
    );
  }

  // Método para criar um novo endereço e atualizar a lista automaticamente
  createAddress(address: FormData) {
    this.addressService.createAddress(address).subscribe(() => {
      this.listAll(); // Atualiza a lista após a criação de um novo endereço
    });
  }

  edit(endereco: Enderecos) {
    // Lógica para editar
  }

  deleteById(endereco: Enderecos) {
  }
}
