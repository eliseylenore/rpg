import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { WelcomeComponent } from './app/welcome/welcome.component';
import { StartPageComponent } from './app/start-page/start-page.component';
import { StayInHouseComponent } from "./app/stay-in-house/stay-in-house.component";
import { StealSlippersComponent } from "./app/steal-slippers/steal-slippers.component";
import { TalkToGlendaComponent } from "./app/talk-to-glenda/talk-to-glenda.component";


const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'start',
    component: StartPageComponent
  },
  {
    path: 'stayin',
    component: StayInHouseComponent
  },
  {
    path: 'steal',
    component: StealSlippersComponent
  },
  {
    path: 'talktoglenda',
    component: TalkToGlendaComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
