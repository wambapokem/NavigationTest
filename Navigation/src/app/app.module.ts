import { showMenuButton } from '../providers/menu';
import { UserData } from '../providers/User';
import { ChatbotPage } from '../pages/chatbot/chatbot';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { ProfilPage } from '../pages/profil/profil';
import { HomePage } from '../pages/home/home';


@NgModule({
  declarations: [
    MyApp,
    ChatbotPage,
    ProfilPage,
    HomePage

  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ChatbotPage,
    ProfilPage,
    HomePage

  ],
  providers: [
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    UserData,
    showMenuButton
  ]


})
export class AppModule { }
