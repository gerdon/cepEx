import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

import { CepService } from './../services/cep.service';
import { LoadingService } from './../services/loading.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  cep: String;

  endereco: any = {
    bairro: "",
    cep: "",
    complemento: "",
    gia: "",
    ibge: "",
    localidade: "",
    logradouro: "",
    uf: "",
    unidade: ""
  };

  constructor(
    private cepService: CepService,
    public loading: LoadingService,
    public toastController: ToastController
  ) {
    this.cep = null;
    this.endereco = {};
  }

  getCep() {
    this.endereco = {};
    this.loading.present();

    this.cepService.buscarCep(this.cep).then((result: any) => {
      this.endereco = result;
      this.cep = null
      this.loading.dismiss();
    }).catch((error: any) => {
      this.presentToast('Insira um Cep válido');
      console.log(error)
      this.loading.dismiss();
    });
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }

}
