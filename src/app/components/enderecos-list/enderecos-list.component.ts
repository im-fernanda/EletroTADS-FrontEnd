import { Component, inject } from '@angular/core';
import { FooterComponent } from '../../layout/footer/footer.component';
import { HeadComponent } from '../../layout/head/head.component';
import { AddressService } from '../../service/service-enderecos.service';
import { Observable, tap } from 'rxjs';
import { Enderecos } from '../../model/enderecos';
import { Address, AddressComponent } from '../address/address.component';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-enderecos-list',
  standalone: true,
  imports: [FooterComponent, HeadComponent, RouterModule],
  templateUrl: './enderecos-list.component.html',
})

export class EnderecosListComponent {
  //lista: AddressComponent[] = [];

  private addressService = inject(AddressService);

  address$: Observable<Enderecos[]> = new Observable();
  enderecosList: Enderecos[] = [];

  listAll() {
    this.address$ = this.addressService.getAddress(0, 20).pipe(
      tap(enderecos => this.enderecosList = enderecos)
    );
  } 

  edit(endereco: Enderecos) {
    // Lógica para editar
  }

  deleteById(endereco: Enderecos) {
    // Lógica para deletar
  }
}

