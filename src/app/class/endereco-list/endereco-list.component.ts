import { Component, inject, ViewChild } from '@angular/core';
import { HomeComponent } from '../../components/home/home.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { HeaderComponent } from '../../components/header/header.component';
import { Endereco } from '../../models/endereco';
import { EnderecoService } from '../../service/endereco.service';
import Swal from 'sweetalert2';
import { EnderecoDetailsComponent } from '../endereco-details/endereco-details.component';

@Component({
  selector: 'app-endereco-list', //list
  standalone: true, //list
  imports: [HeaderComponent, HomeComponent, FooterComponent,EnderecoDetailsComponent], //list
  templateUrl: './endereco-list.component.html', //list
  styleUrl: './endereco-list.component.css'
})
export class EnderecoListComponent {



  navigateToEdit(url: string): void {
    window.location.href = url; // Simples redirecionamento
  }

  
  lista: Endereco[] = [];
  enderecoEdit: Endereco = new Endereco();

  enderecoService = inject(EnderecoService);

  constructor(){
    this.listAll();

    let enderecoNovo = history.state.enderecoNovo;
    let enderecoEditado = history.state.enderecoEditado;

    if (enderecoNovo != null) {
      enderecoNovo.id = 555;
      this.lista.push(enderecoNovo);
    }

    if (enderecoEditado != null) {
      let indice = this.lista.findIndex((x) => {
        return x.id == enderecoEditado.id;
      });
      this.lista[indice] = enderecoEditado;
    }
  }

  listAll(){

    this.enderecoService.listAll().subscribe({
      next: lista => { //quando o back retornar o que se espera
        this.lista = lista;
      },
      error: erro => { //quando ocorrer qualquer erro (badrequest, exceptions..)
        Swal.fire({
          title: 'Ocorreu um erro',
          icon: 'error',
          confirmButtonText: 'Ok',
        });
      }
    });




  }
  deleteById(endereco: Endereco,) {
   
    Swal.fire({
      title: 'Tem certeza que deseja deletar este registro?',
      icon: 'warning',
      showConfirmButton: true,
      showDenyButton: true,
      confirmButtonText: 'Sim',
      cancelButtonText: 'Não',

    }).then((result) => {
      if (result.isConfirmed) {
       
        this.enderecoService.delete(endereco.id).subscribe({
          next: lista => { //quando o back retornar o que se espera
            Swal.fire({
              title: 'Deletado com sucesso',
              icon: 'success',
              confirmButtonText: 'Ok',
            });


            this.listAll();
          },
          error: erro => { //quando ocorrer qualquer erro (badrequest, exceptions..)
            Swal.fire({
              title: 'Ocorreu um erro',
              icon: 'error',
              confirmButtonText: 'Ok',
            });
          }
        });
      }
      
    });
}

}
