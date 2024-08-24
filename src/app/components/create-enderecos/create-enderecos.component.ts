import { FooterComponent } from '../../layout/footer/footer.component';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AddressService } from '../../service/service-enderecos.service';
import { Enderecos } from '../../model/enderecos'

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

export class CreateEnderecosComponent {
  createAddressForm: FormGroup;

  constructor(private fb: FormBuilder, private addressService: AddressService) {
    this.createAddressForm = this.fb.group({
      rua: ['', Validators.required],
      numero: ['', Validators.required],
      bairro: ['', Validators.required],
      complemento: [''],
      uf: ['', [Validators.required, Validators.maxLength(2), Validators.pattern('^[A-Z]{2}$')]], // Validação para UF
      cidade: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  createAddress(): void {
    if (this.createAddressForm.valid) {
      this.addressService.createAddress(this.createAddressForm.value).subscribe({
        next: (response) => {
          console.log('Endereço cadastrado com sucesso!', response);
          // Lógica adicional, como redirecionamento ou exibir mensagem
        },
        error: (error) => {
          console.error('Erro ao cadastrar endereço', error);
        },
      });
    } else {
      this.createAddressForm.markAllAsTouched(); // Marca todos os campos para mostrar os erros
    }
  }

}
