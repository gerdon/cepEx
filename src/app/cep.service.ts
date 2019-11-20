import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CepService {
  private API_URL = 'https://viacep.com.br/ws/01001000/json/'

  constructor(
    public http: Http
  ) { }

  buscarCep(cep: String) {
    let url = 'https://viacep.com.br/ws/' + cep + '/json/';
    console.log(url);

    return new Promise((resolve, reject) => {
      this.http.get(url)
        .subscribe((result: any) => {
          resolve(result.json());
        },
        (error) => {
          reject(error.json);
        }
      );
    });
  }

}
