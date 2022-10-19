import { Component, OnInit } from '@angular/core';
import { ServicioGuardarService } from '../servicio-guardar.service';

@Component({
  selector: 'app-mensajeria-component',
  templateUrl: './mensajeria-component.component.html',
  styleUrls: ['./mensajeria-component.component.css']
})
export class MensajeriaComponentComponent implements OnInit {
  title:string = 'Envio de Mensajes';
  constructor(private servGuardar: ServicioGuardarService) { }
  mensajes = [
    {'nombre': 'Juan Alberto', 'grado': '3ro A', 'texto':'se porta mal en clase'},
    {'nombre': 'Ramiro Alvaro', 'grado': '2do B', 'texto':'Buen trabajo'},
    {'nombre': 'Cesar Eduardo', 'grado': '1ro A', 'texto':'vuelve a enviar la tarea'},
    {'nombre': 'Emilio Diego', 'grado': '1ro B', 'texto':'llega impuntual'}
  ];
  model:any = {};
  model2:any={};
  msg:string='';
  hideUpdate:boolean = true;
  addMensaje():void{
    this.servGuardar.muestraMensaje("Nombre del alumno: "+ this.model.nombre + "  Del grado: " + this.model.grado)
    this.mensajes.push(this.model)
    this.model = {};
    this.msg = 'Datos agregados con éxito';

  }
  deleteMensaje(i: any):void{
    this.mensajes.splice(i, 1);
    this.msg = 'El mensaje fue eliminado con éxito';
  }
  myValue:any;
  editarMensaje(i: any):void{
    this.hideUpdate = false;
    this.model2.nombre = this.mensajes[i].nombre;
    this.model2.grado = this.mensajes[i].grado;
    this.model2.texto = this.mensajes[i].texto;
    this.myValue = i;
  }
  updateMensaje():void{
        this.mensajes[this.myValue] = this.model2
        this.model2 = {};
        this.msg = 'Corregido de manera exitosa'
    this.hideUpdate = true;
  }
  closeAlert(){
    this.msg = '';
  }


  ngOnInit(): void {
  }

}
