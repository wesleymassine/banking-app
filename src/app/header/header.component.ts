import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { ModalNotCadastroComponent } from '../modal-not-cadastro/modal-not-cadastro.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, AfterViewInit {
  formLogin;
  theEvent;
  key;
  regex;
  keys;
  getCadastro;
  message;
  constructor(private fb: FormBuilder, private router: Router, public dialog: MatDialog) { }
  @ViewChild('hello') helloTemplate;
  ngAfterViewInit() {
    console.log(this.helloTemplate);
  }

  ngOnInit() {
    console.log('Component app-header inciado...');
    this.formLogin = this.fb.group({
      cpf: ['']
    });
  }
  // regexp
  onlynumber(evt) {
    this.theEvent = evt || window.event;
    this.key = this.theEvent.keyCode || this.theEvent.which;
    this.key = String.fromCharCode(this.key);
    this.regex = /^[0-9.]+$/;
    if (!this.regex.test(this.key)) {
      this.theEvent.returnValue = false;
      if (this.theEvent.preventDefault) {
        this.theEvent.preventDefault();
      }
    }
  }
  login() {
    this.getCadastro = JSON.parse(localStorage.getItem('cadastro'));
    const cpfPersistido = this.getCadastro['cpf'];
    const cpfDigitado = this.formLogin.get('cpf').value;

    console.log('cpfPersistido >>>>>>> ', cpfPersistido);
    console.log('cpfDigitado >>>>>>> ', cpfDigitado);
    if (cpfPersistido === cpfDigitado) {
      this.router.navigate(['home-logada']);
    } else {
      this.openDialog();
    }
  }

  openDialog() {
    const dialogRef = this.dialog.open(ModalNotCadastroComponent, {
      height: '350px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
