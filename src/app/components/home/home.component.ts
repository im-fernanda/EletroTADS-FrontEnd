import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home', //home
  standalone: true, //home
  imports: [HeaderComponent, HomeComponent, FooterComponent], //home
  templateUrl: './home.component.html', //home
  styleUrl: './home.component.css' //home
})
export class HomeComponent {

}
