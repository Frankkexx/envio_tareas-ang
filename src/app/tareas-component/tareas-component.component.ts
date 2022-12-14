import { Component, OnInit } from '@angular/core';
import { ServicioGuardarService } from '../servicio-guardar.service';

@Component({
  selector: 'app-tareas-component',
  templateUrl: './tareas-component.component.html',
  styleUrls: ['./tareas-component.component.css']
})
export class TareasComponentComponent implements OnInit {
  title:string = 'NUEVA TAREA';

  constructor(private servGuardar:ServicioGuardarService){}

  actividad = [
    {'tarea': 'Actividad 1 - Dias de la semana', 'grado': '3ro A', 'archivo':File},
    {'tarea': 'Actividad 2 - las mañanitas', 'grado': '2do B','archivo':File },
    {'tarea': 'Actividad 1 - Verbos', 'grado': '1ro A', 'archivo':File},
    {'tarea': 'Actividad 4 - Saltamontes', 'grado': '1ro B', 'archivo':File}
  ];
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
