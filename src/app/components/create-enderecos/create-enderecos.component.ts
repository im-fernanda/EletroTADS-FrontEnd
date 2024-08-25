import { HttpClient } from '@angular/common/http';
import { FooterComponent } from '../../layout/footer/footer.component';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AddressService } from '../../service/service-enderecos.service';
import { Enderecos } from '../../model/enderecos'
import { RouterModule } from '@angular/router';

export interface CreateAddressFormControl { // molde
  rua: FormControl<string | null>;
  numero: FormControl<string | null>;
  bairro: FormControl<string | null>;
  complemento: FormControl<string | null>;
  uf: FormControl<string | null>;
  cidade: FormControl<string | null>;
}

@Component({
  selector: 'app-create-enderecos',
  standalone: true,
  imports: [FooterComponent, ReactiveFormsModule, RouterModule],
  templateUrl: './create-enderecos.component.html',
  styleUrl: './create-enderecos.component.scss'
})

export class CreateEnderecosComponent implements OnInit {
  createAddressForm: FormGroup;
  router: any;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.createAddressForm = this.fb.group({
      rua: ['', Validators.required],
      numero: ['', Validators.required],
      bairro: ['', Validators.required],
      complemento: [''],
      uf: ['', Validators.required],
      cidade: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    
   }

  createAddress() {
    const addressData = this.createAddressForm.value;

    this.http.post('http://localhost:8080/usuarios/1/enderecos/', addressData).subscribe(
      (response: any) => {
        console.log('Connection successful:', response);
      },
      (error: any) => {
        console.error('Connection failed:', error);
      }
    );

  } 
}
  