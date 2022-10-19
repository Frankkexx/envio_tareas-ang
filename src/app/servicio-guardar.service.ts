import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioGuardarService {

  constructor() { }

  muestraMensaje(mensa:string){
    alert(mensa);
  }
}
