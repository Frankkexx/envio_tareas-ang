import { Component, Input, OnInit } from '@angular/core';
import { ServicioGuardarService } from 'src/app/servicio-guardar.service';

@Component({
  selector: 'app-tareas-hijo-component',
  templateUrl: './tareas-hijo-component.component.html',
  styleUrls: ['./tareas-hijo-component.component.css']
})
export class TareasHijoComponentComponent implements OnInit {

  @Input() mensaje: any;

  @Input() i: any;
  actividad: any;

  constructor(private servGuardar:ServicioGuardarService){}
  model:any = {};
  model2:any={};
  msg:string='';
  hideUpdate:boolean = true;
  addMensaje():void{
    this.servGuardar.muestraMensaje("Nombre de la Tarea: "+ this.model.tarea)
    this.actividad.push(this.model)
    this.model = {};
    this.msg = 'Datos agregados con éxito';

  }
  deleteMensaje(i: any):void{
    this.actividad.splice(i, 1);
    this.msg = 'El mensaje fue eliminado con éxito';
  }
  myValue:any;
  editarMensaje(i: any):void{
    this.hideUpdate = false;
    this.model2.tarea = this.actividad[i].tarea;
    this.model2.grado = this.actividad[i].grado;
    this.model2.texto = this.actividad[i].archivo;
    this.myValue = i;
  }
  updateMensaje():void{
        this.actividad[this.myValue] = this.model2
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
