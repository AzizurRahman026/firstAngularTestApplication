import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
// sets up routing in standalone Angular applications...
import { provideRouter } from '@angular/router';
import routeConfig from './app/routes';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routeConfig)
  ]
}).catch(err => console.error(err));
