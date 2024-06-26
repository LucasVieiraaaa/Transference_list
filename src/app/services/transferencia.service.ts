import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Transferencia } from '../models/transferencia.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TransferenciaService {
  private listaTransferencia: any[];
  private url = 'http://localhost:3000/transferencias/';

  constructor(private httpClient: HttpClient) {
    this.listaTransferencia = [];
  }
  // tslint:disable-next-line:typedef
  get transferencias() {
    return this.listaTransferencia;
  }

  todas(): Observable<Transferencia[]> {
    return this.httpClient.get<Transferencia[]>(this.url);
  }

    // tslint:disable-next-line:typedef
    adicionar(transferencia: Transferencia) {
      this.hidratar(transferencia);

      return this.httpClient.post<Transferencia>(this.url, transferencia);
    }
  // tslint:disable-next-line:typedef
  private hidratar(transferencia: Transferencia) {
    transferencia.data = new Date();
  }
}
