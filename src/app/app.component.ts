import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'Envio de Mensajes';
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
    let i =this.myValue;
    for(let j=0; j<this.mensajes.length; j++){
      if (i==j){
        this.mensajes[i] = this.model2
        this.model2 = {};
        this.msg = 'Corregido de manera exitosa'
      }
    }
    // console.log(this.model2)
    this.hideUpdate = true;
  }
  closeAlert(){
    this.msg = '';
  }
}
