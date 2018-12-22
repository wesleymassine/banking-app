import { AppComponent } from './../app.component';
import { Component, OnInit, EventEmitter, Output, Inject, SimpleChanges, ChangeDetectorRef } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
@Component({
  selector: 'app-home-logada',
  templateUrl: './home-logada.component.html',
  styleUrls: ['./home-logada.component.css']
})
export class HomeLogadaComponent implements OnInit {
  statusCliente;
  constructor() { }

  ngOnInit() {
    this.statusCliente = [
      {
        saldo: '3,65',
        limite: '2.500',
        saldoParcial: '684,00',
        valorParcela: '250,00',
        saldoBruto: '3.450,00'
      }
    ];
  }
}
