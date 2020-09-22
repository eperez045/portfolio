import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GuardsCheckStart } from '@angular/router';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  forma: FormGroup;

  constructor( private fb: FormBuilder) {

    this.crearFormulario();

  }

  ngOnInit(): void {
  }

  get nombreNoValido(){
    return this.forma.get('nombre').invalid && this.forma.get('nombre').touched;
  }

  get apellidoNoValido(){
    return this.forma.get('apellido').invalid && this.forma.get('apellido').touched;
  }

  get emailNoValido(){
    return this.forma.get('email').invalid && this.forma.get('email').touched;
  }

  get textoNoValido(){
    return this.forma.get('texto').invalid && this.forma.get('texto').touched;
  }

  // tslint:disable-next-line: typedef
  crearFormulario(){
    this.forma = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      texto: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  // tslint:disable-next-line: typedef
  guardar(){
    console.log(this.forma);
    if (this.forma.invalid){
      Object.values(this.forma.controls).forEach(control => {
        control.markAllAsTouched();
      });
    }else{
      this.forma.reset();
    }
  }

}
