import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { FIREBASE_CONFIG } from './app.firebase.config';

import { CadastroPage } from '../pages/cadastro/cadastro';
import { HomePage } from '../pages/home/home';
import { InitialPage } from "../pages/initial/initial";

import { AngularFireAuthModule} from "angularfire2/auth";

@NgModule({
  declarations: [
    MyApp,
    CadastroPage,
    InitialPage,
    HomePage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CadastroPage,
    InitialPage,
    HomePage,
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
