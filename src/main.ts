import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { AppComponent } from './app/app.component';
import { NgForComponent } from './app/ng-for/ng-for.component';
import { EventBindingComponent } from './app/event-binding/event-binding.component';
import { NgIfComponent } from './app/ng-if/ng-if.component';
import { FormsComponent } from './app/forms/forms.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { importProvidersFrom } from '@angular/core';

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
  {
    path: 'forms',
    component: FormsComponent,
  },
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes), provideHttpClient(), importProvidersFrom(BrowserAnimationsModule)],
}).catch((err) => console.error(err));
