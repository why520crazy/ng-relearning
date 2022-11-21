import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { AppComponent } from './app/app.component';
import { NgForComponent } from './app/ng-for/ng-for.component';
import { EventBindingComponent } from './app/event-binding/event-binding.component';
import { NgIfComponent } from './app/ng-if/ng-if.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'ng-if',
    pathMatch: 'full',
  },
  {
    path: 'ng-if',
    component: NgIfComponent,
  },
  {
    path: 'event-binding',
    component: EventBindingComponent,
  },
  {
    path: 'ng-for',
    component: NgForComponent,
  },
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes), provideHttpClient()],
}).catch((err) => console.error(err));
