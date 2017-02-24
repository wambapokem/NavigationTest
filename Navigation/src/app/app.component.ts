import { ChatbotPage } from '../pages/chatbot/chatbot';
import { ProfilPage } from '../pages/profil/profil';
import { HomePage } from '../pages/home/home';
import { Component } from '@angular/core';
import { Platform, MenuController, Nav } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { ViewChild } from '@angular/core/src/metadata/di';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage = HomePage;
  pages: Array<{ title: string, component: any, icon: string }>;

  constructor(platform: Platform, public menu: MenuController, ) {
    this.pages = [
      { title: "HOME", component: HomePage, icon: "cash" },
      { title: "PROFILE", component: ProfilPage, icon: "person" },
      { title: "Chatbot", component: ChatbotPage, icon: "cash" }
    ]
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openRootPage(): void {
    this.menu.close();
    let view = this.nav.getActive();
    if (!(view.instance instanceof HomePage)) {
      console.info("Entering 'HomePage'");

      this.nav.setRoot(HomePage);
    }
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    let view = this.nav.getActive();
    if (!(view.instance instanceof page.component)) {
      console.info("Entering '" + page.title + "'");
      this.nav.insert(1, page.component);
      let removeCount: number = this.nav.length() - 2;
      this.nav.remove(2, removeCount == 0 ? 1 : removeCount);
    }
  }

}
