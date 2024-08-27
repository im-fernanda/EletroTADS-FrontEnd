import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FooterComponent } from '../../layout/footer/footer.component';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AddressService } from '../../service/service-enderecos.service';
import { Enderecos } from '../../model/enderecos'

import { Router } from '@angular/router';

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
  imports: [FooterComponent, ReactiveFormsModule],
  templateUrl: './create-enderecos.component.html',
  styleUrl: './create-enderecos.component.scss'
})

export class CreateEnderecosComponent implements OnInit {
  createAddressForm: FormGroup;


  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {
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
  
    // Token JWT estático
    const token = "eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJzZWxmIiwic3ViIjoiYWRtaW4iLCJleHAiOjE3MjQ3MjI1NjQsImlhdCI6MTcyNDcxODk2NCwic2NvcGUiOiJST0xFX0FETUlOIn0.mFftfB6jwHJx0qYXXZtH1qvEEttB9_LXCjBp8V5D2syvLcgLBbZLdgxOjwAtDluS-V2w1cpZAwLi1WHNnJjiaaHPPPE4fGt-6C5HrGd3GmOtVo0SO7gAzaylmY08foYJwhzMoDK2tAKiI84nUfEfnWaWuHPTGkm8xjQSTe8oIiRL7OBQo-KJJY9FGX_O5Nbiogle5UQ8HoMYQWWdPuHmP1--eqFhnAGf-QpN9nxA8S0F4zSFV9SlkGnXmTi0-5WA_lxP6jWwPk9sodHaLI6LgBEh1IpqDDCt0jFYzbac0OWpbZBykvv5rWMZy4icrZDZRX_r9-fELc1igy8mVDz9nQw";
  
    // Configuração dos cabeçalhos, incluindo o token
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
  
    this.http.post('http://localhost:8080/usuarios/1/enderecos/', addressData, { headers }).subscribe(
      (response: any) => {
        console.log('Connection successful:', response);
        this.router.navigate(['/enderecos']);
      },
      (error: any) => {
        console.error('Connection failed:', error);
      }
    );
  }
  

}
  