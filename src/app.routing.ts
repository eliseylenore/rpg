import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { WelcomeComponent } from './app/welcome/welcome.component';
import { StartPageComponent } from './app/start-page/start-page.component';

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'start',
    component: StartPageComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
