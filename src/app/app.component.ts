import { TransferenciaService } from './services/transferencia.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'myapp03';
  transferencias: any[] = [];

  constructor(private service: TransferenciaService) {}

  // tslint:disable-next-line:typedef
  transferir($event) {
    this.service.adicionar($event);
  }
}
