import { Component, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Transferencia } from '../models/transferencia.model';
import { TransferenciaService } from '../services/transferencia.service';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent {
  @Output() aoTransferir = new EventEmitter<any>();

  valor: number;
  destino: number;

  constructor(private service: TransferenciaService) {}

  // tslint:disable-next-line:typedef
  transferir() {
    console.log('Solicitada nova transferência');
    if (this.valor == null) {
      alert('Value is Empty');
    } else if (this.destino == null) {
      alert('Path is Empty');
    } else {
      const valorEmitir: Transferencia = {valor: this.valor, destino: this.destino} ;
      // this.aoTransferir.emit(valorEmitir);
      this.service.adicionar(valorEmitir).subscribe((resultado) => {
         console.log(resultado);
       });
    }
  }
}
