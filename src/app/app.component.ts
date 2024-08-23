import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',// onde roda
  standalone: true, // onde roda
  imports: [RouterOutlet], // onde roda
  templateUrl: './app.component.html', // onde roda
  styleUrl: './app.component.css', // onde roda
  
})
export class AppComponent {
  title = 'AngularNovo';
}
