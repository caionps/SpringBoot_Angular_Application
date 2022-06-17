import { ActivatedRoute, Router } from '@angular/router';
import { ClientesService } from './../../clientes.service';
import { Cliente } from './../cliente';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clientes-form',
  templateUrl: './clientes-form.component.html',
  styleUrls: ['./clientes-form.component.css']
})
export class ClientesFormComponent implements OnInit {

  cliente: Cliente;
  success: boolean = false;
  errors?: String[];
  id?: number;

  constructor(
    private service: ClientesService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {
    this.cliente = new Cliente();
    activatedRoute.params.subscribe(values => {
      this.id = values["id"];
      console.log(this.id);
    });
  }

  ngOnInit(): void {
    if (typeof this.id !== 'undefined') {
      this.service
        .getClienteById(this.id)
        .subscribe(
          response => this.cliente = response ,
          errorResponse => this.cliente = new Cliente()
        )
    }
  }

  onSubmit() {
    if(typeof this.id !== 'undefined'){

      this.service
      .atualizar(this.cliente)
      .subscribe(response => {
        this.success = true;
        this.errors = [];
      }, errorResponse => {
        this.errors = ['Erro ao atualizar o cliente.']
      })

    }else {
      this.service
      .salvar(this.cliente)
      .subscribe(response => {
        this.success = true;
        this.errors = [];
        this.cliente = response;
      }, errorResponse => {
        this.success = false;
        this.errors = errorResponse.error.errors;
      });
    }
  }

  voltarParaListagem() {
    this.router.navigate(['/clientes-lista'])
  }

}
