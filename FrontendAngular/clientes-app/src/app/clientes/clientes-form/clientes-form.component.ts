import { Cliente } from './../cliente';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clientes-form',
  templateUrl: './clientes-form.component.html',
  styleUrls: ['./clientes-form.component.css']
})
export class ClientesFormComponent implements OnInit {

  cliente: Cliente;
  nome: string = 'sicrano';

  constructor() {
    this.cliente = new Cliente;
    this.cliente.nome = 'Fulano'

  }

  ngOnInit(): void {
  }

  clicar() {
    console.log('Cliquei!');
  }
}
