import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Endereco } from '../../models/endereco';
import { ActivatedRoute, Router } from '@angular/router';
import { EnderecoService } from '../../service/endereco.service';
import Swal from 'sweetalert2';
import { EnderecoListComponent } from '../endereco-list/endereco-list.component';

@Component({
  selector: 'app-endereco-details',
  standalone: true,
  imports: [EnderecoListComponent],
  templateUrl: './endereco-details.component.html',
  styleUrl: './endereco-details.component.css'
})
export class EnderecoDetailsComponent {


  @Input("enderco") endereco: Endereco = new Endereco();
  @Output("retorno") retorno = new EventEmitter<any>();
  router = inject(ActivatedRoute);
  router2 = inject(Router);

  enderecoService = inject(EnderecoService);


  constructor(){
    let id = this.router.snapshot.params['id'];
    if(id > 0){
      this.findById(id);
    }else{
      if(this.endereco.id > 0)
        this.findById(id);
    }

  }
  findById(id: number){

    this.enderecoService.findById(id).subscribe({
      next: (retorno: Endereco) => {
        this.endereco = retorno;
      },
      error: () => {
        Swal.fire({
          title: 'Ocorreu um erro',
          icon: 'error',
          confirmButtonText: 'Ok',
        });
      }
    });

  }

  save(){
    if(this.endereco.id > 0){

      this.enderecoService.update(this.endereco, this.endereco.id).subscribe({
        next: mensagem => {
          Swal.fire({
            title: mensagem,
            icon: 'success',
            confirmButtonText: 'Ok',
          });
          this.router2.navigate(['admin/carros'], { state: { carroEditado: this.endereco } });// enderecos a fazer
        },
        error: erro => {
          Swal.fire({
            title: 'Ocorreu um erro',
            icon: 'error',
            confirmButtonText: 'Ok',
          });
        }
      });

    }else{

      this.enderecoService.save(this.endereco).subscribe({
        next: list => {
          Swal.fire({
            title: 'Ocorreu um erro',
            icon: 'error',
            confirmButtonText: 'Ok',
          });
          this.router2.navigate(['admin/carros'], { state: { carroNovo: this.endereco } }); // enderecos a fazer
        },
        error: erro => {
          Swal.fire({
            title: 'Ocorreu um erro',
            icon: 'error',
            confirmButtonText: 'Ok',
          });
        }
      });

    }
  }

}
