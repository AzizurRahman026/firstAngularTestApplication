import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
// provides the necessary services and directives for routing in Angular applications...
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-root',
  template: `
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css'],
  imports: [HomeComponent, RouterModule]
})
  
export class AppComponent {
  title = 'homes';
}
