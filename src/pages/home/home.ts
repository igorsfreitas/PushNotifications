import { Component } from '@angular/core';
import { OneSignal } from 'ionic-native';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
  	alert(9);

  	this.initializeApp();

  }

  initializeApp() {
		OneSignal.startInit('758b5520-4da5-4ebd-8709-f7782f014c88', '1014840946057');
		OneSignal.inFocusDisplaying(OneSignal.OSInFocusDisplayOption.InAppAlert);
		OneSignal.setSubscription(true);
		OneSignal.handleNotificationReceived().subscribe(() => {
		 	// do something when the notification is received.
		});
		OneSignal.handleNotificationOpened().subscribe(() => {
			// do something when the notification is opened.
		});
		OneSignal.endInit();
		 
		OneSignal.getIds().then(data => {
			// this gives you back the new userId and pushToken associated with the device. Helpful.
	 	});
	}

}
