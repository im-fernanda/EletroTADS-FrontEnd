import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {


  usuario!: string;
  senha!: string;

  router = inject (Router)
login: any;
 

  logar(){
    if (this.usuario =='admin'&&this.senha=='admin'){
      this.router.navigate(['/carros']);
    }else
    alert('deu erro ao logar');
  }

}
