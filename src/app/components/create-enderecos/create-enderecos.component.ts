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

export class CreateEnderecosComponent {
  createAddressForm: FormGroup;
  router: any;

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

  ngOnInit(): void { }

  createAddress() {
    if (!this.createAddressForm?.valid) {
      return;
    }
    // Coletar os dados do formulário
    const data = new FormData(); // Se você estiver usando FormData para uploads de arquivos
    data.append('rua', this.createAddressForm.get('rua')?.value);
    data.append('numero', this.createAddressForm.get('numero')?.value);
    data.append('bairro', this.createAddressForm.get('bairro')?.value);
    data.append('complemento', this.createAddressForm.get('complemento')?.value);
    data.append('cidade', this.createAddressForm.get('cidade')?.value);
    data.append('uf', this.createAddressForm.get('uf')?.value);
    
    this.addressService.createAddress(data).subscribe({
      next: () => {
     
        this.router.navigate(['/']);
      },
      error: (error) => {
  
        console.error('Erro ao cadastrar evento:', error);
      },
    });
  } 
}
  