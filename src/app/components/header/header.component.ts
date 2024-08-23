import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { makeBindingParser } from '@angular/compiler';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-header', //headr
  standalone: true, //headr
  imports: [FooterComponent,FormsModule ], //headr
  templateUrl: './header.component.html', //headr
  styleUrl: './header.component.css' //headr
})
export class HeaderComponent {

}
