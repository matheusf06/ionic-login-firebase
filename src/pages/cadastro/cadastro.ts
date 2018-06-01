import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { User } from "../../models/user";
import { AngularFireAuth } from "angularfire2/auth";

@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html'
})
export class CadastroPage {

  user = {} as User;

  constructor(public navCtrl: NavController, public navparams: NavParams, private ofauth: AngularFireAuth) {

  }

  cancelar() {
    this.navCtrl.pop();
  }

  async registrar(user: User) {
    try {
      const result = await this.ofauth.auth.createUserWithEmailAndPassword(user.email, user.password);
      console.log(result);
      this.navCtrl.pop();
    } catch (e) {
      console.error(e)
    }
  }

}
