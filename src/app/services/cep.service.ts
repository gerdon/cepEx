import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class CepService {
  private API_URL = 'https://viacep.com.br/ws/'

  constructor(
    public http: Http
  ) { }

  buscarCep(cep: String) {
    return new Promise((resolve, reject) => {
      this.http.get(this.API_URL + cep + '/json/').subscribe(
        (result: any) => {
          resolve(result.json());
        },
        (error: any) => {
          reject(error.json());
        }
      );
    });
  }

}
