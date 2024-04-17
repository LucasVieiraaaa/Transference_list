import { Component, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
    selector: 'app-nova-transferencia',
    templateUrl: './nova-transferencia.component.html',
    styleUrls: ['./nova-transferencia.component.scss']

})
export class NovaTransferenciaComponent{

   @Output() aoTransferir = new EventEmitter<any>();

  valor: number;
  destino: number;

  transferir(): void{
    console.log('Solicitada nova transferência');
    if (this.valor == null){
      alert('Value is Empty');
    }
    else if (this.destino == null){
      alert('Path is Empty');
    }
    else{
      this.aoTransferir.emit({valor: this.valor, destino: this.destino});
    }
  }
}
