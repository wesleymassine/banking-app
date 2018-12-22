import { AppComponent } from './../app.component';
import { Component, OnInit, EventEmitter, Output, Inject, SimpleChanges, ChangeDetectorRef, AfterViewInit, AfterContentChecked } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
@Component({
  selector: 'app-home-logada',
  templateUrl: './home-logada.component.html',
  styleUrls: ['./home-logada.component.css']
})
export class HomeLogadaComponent implements OnInit, AfterContentChecked {
  statusCliente;
  saldoCliente;
  limeteCliente;
  saldoParcial;
  valorParcela;
  saldoBruto;
  saldoPoupanca;
  constructor() { }

  ngOnInit() {
    this.statusCliente = [
      {
        saldo: '0,00',
        limite: '1.000',
        saldoParcial: '0,00',
        valorParcela: '250,00',
        saldoBruto: '0,00',
        saldoPoupanca: '0,00'
      }
    ];
  }

  pegaSaldo() {
    this.statusCliente.forEach(item => {
      this.saldoCliente = item.saldo;
      console.log(`limite do cliente ${this.saldoCliente}`);
    });
  }
  pegaLimite() {
    this.statusCliente.forEach(item => {
      this.limeteCliente = item.limite;
      console.log(`limite do cliente ${this.limeteCliente}`);
    });
  }

  pegasaldoParcial() {
    this.statusCliente.forEach(item => {
      this.saldoParcial = item.saldoParcial;
      console.log(`saldoParcial do cliente ${this.saldoParcial}`);
    });
  }
  pegavalorParcela() {
    this.statusCliente.forEach(item => {
      this.valorParcela = item.valorParcela;
      console.log(`saldoParcial do cliente ${this.valorParcela}`);
    });
  }
  pegasaldoBruto() {
    this.statusCliente.forEach(item => {
      this.saldoBruto = item.saldoBruto;
      console.log(`saldoBruto do cliente ${this.saldoBruto}`);
    });
  }
  pegasaldoPoupanca() {
    this.statusCliente.forEach(item => {
      this.saldoPoupanca = item.saldoPoupanca;
      console.log(`saldoPoupanca do cliente ${this.saldoPoupanca}`);
    });
  }

  ngAfterContentChecked() {
    this.pegaSaldo();
    this.pegaLimite();
    this.pegasaldoBruto();
    this.pegasaldoParcial();
    this.pegavalorParcela();
    this.pegasaldoPoupanca();
  }
}
