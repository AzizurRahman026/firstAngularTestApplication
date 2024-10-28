import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
// provides the necessary services and directives for routing in Angular applications...
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-root',
  template: `
    <!-- <main>
      <header class="brand-name">
        <img class="brand-logo" src="/assets/logo.svg" alt="logo">
      </header>
      <section class="content">
        <app-home></app-home>
      </section>
    </main> -->
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css'],
  imports: [HomeComponent, RouterModule]
})
  
export class AppComponent {
  title = 'homes';
}
