import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { User } from "../../models/user";
import { CadastroPage } from "../cadastro/cadastro";
import { InitialPage } from "../initial/initial";
import { AngularFireAuth } from "angularfire2/auth";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  user = {} as User;

  constructor(public navCtrl: NavController, public navparams: NavParams, private ofauth: AngularFireAuth) {

  }

  async login(user:User) {
    try{
    const result = await this.ofauth.auth.signInWithEmailAndPassword(user.email, user.password);
    this.navCtrl.push(InitialPage);
    }catch(e){
      console.error(e);
    }
  }
  cadastrar() {
    this.navCtrl.push(CadastroPage);
  }

}
