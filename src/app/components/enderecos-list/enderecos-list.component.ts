import { Component, inject } from '@angular/core';
import { FooterComponent } from '../../layout/footer/footer.component';
import { HeadComponent } from '../../layout/head/head.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateEnderecosComponent } from '../create-enderecos/create-enderecos.component';
import { AddressService } from '../../service/service-enderecos.service';
import { Observable } from 'rxjs';
import { Enderecos } from '../../model/enderecos';
import { AddressComponent } from '../address/address.component';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-enderecos-list',
  standalone: true,
  imports: [FooterComponent, HeadComponent, ReactiveFormsModule, CreateEnderecosComponent, AddressComponent, RouterModule],
  templateUrl: './enderecos-list.component.html',
  styleUrl: './enderecos-list.component.scss'
})
export class EnderecosListComponent {
  
  addressList$!: Observable<Enderecos[]>;

  private addressService = inject(AddressService);


  ngOnInit() {
    this.loadAddresses();
  }

  loadAddresses() {
    this.addressList$ = this.addressService.getAddresses();
  }

 

}
