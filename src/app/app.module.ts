import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { routing } from '../app.routing';
import { StartPageComponent } from './start-page/start-page.component';
import { StayInHouseComponent } from './stay-in-house/stay-in-house.component';
import { StealSlippersComponent } from './steal-slippers/steal-slippers.component';
import { TalkToGlendaComponent } from './talk-to-glenda/talk-to-glenda.component';
import { DisplayPointsComponent } from './display-points/display-points.component';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
}

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    StartPageComponent,
    StayInHouseComponent,
    StealSlippersComponent,
    TalkToGlendaComponent,
    DisplayPointsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
