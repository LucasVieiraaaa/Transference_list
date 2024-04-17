import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TransferenciaService {
  private listaTransferencia: any[];

  constructor() {
    this.listaTransferencia = [];
  }
  // tslint:disable-next-line:typedef
  get transferencias() {
    return this.listaTransferencia;
  }
  // tslint:disable-next-line:typedef
  adicionar(transferencia: any) {
    this.hidratar(transferencia);

    this.listaTransferencia.push(transferencia);
  }

  // tslint:disable-next-line:typedef
  private hidratar(transferencia: any) {
    transferencia.data = new Date();
  }
}
