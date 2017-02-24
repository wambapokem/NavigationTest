import { showMenuButton } from '../../providers/menu';
import { ProfilPage } from '../profil/profil';
import { UserData } from '../../providers/User';


import { Component } from '@angular/core';
import { Content } from 'ionic-angular';
import { NavController } from 'ionic-angular';
import { Keyboard } from 'ionic-angular';
import { ViewChild } from '@angular/core';



@Component({
  selector: 'page-chatbot',
  templateUrl: 'chatbot.html'
})
export class ChatbotPage {
  /** Reference to the only/main <ion-content> in chatbot.html. */
  @ViewChild(Content) content: Content;
  user_message: string;

  constructor(public navCtrl: NavController, public provider: showMenuButton, public keyboard: Keyboard, public user: UserData) {

  }
  //  saves the message in a temporary list and prints it on the chat.
  sendUserMessage() {

    var messsage = this.user_message;

    if (messsage !== "") {

      this.createMessage(messsage, "messageUser");

      this.user.sendMessage(messsage, this.printBotMessage.bind(this));
    }
  }




	/**
	 * Prints the given message with the given css class on the chat.
	 */
  createMessage(message: string, styleClass: string) {
    var node = document.createElement("div");

    node.className = styleClass;

    node.appendChild(document.createTextNode(message));

    document.getElementById("chat").appendChild(node);

    this.user_message = "";

    this.content.scrollToBottom(300);

  }
  // Initializes to print a message from the bot on the chat.
  printBotMessage(botmessage: string) {
    console.log(botmessage);
    if (botmessage == "Profile") {
      this.provider.showMenuButton = false;
      this.navCtrl.push(ProfilPage);
    } else {
      this.createMessage(botmessage, "messageBot");
    }
  }

  closeKeyboard() {
    this.keyboard.close()
  }
  // ionViewDidLoad() {
  //   this.content.scrollToBottom(300);
  // }

  ionViewWillLeave() {
    this.provider.showMenuButton = true;
  }
}
