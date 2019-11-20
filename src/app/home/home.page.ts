import { Component } from '@angular/core';
import { CepService } from './../cep.service';

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
    private cepService: CepService
  ) {}

  getCep() {
    this.cepService.buscarCep(this.cep).then((result: any) => {
      this.endereco = result;
    }).catch((error: any) => {
      error
    });
  }

}
