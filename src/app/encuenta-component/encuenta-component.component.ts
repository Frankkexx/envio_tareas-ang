import { Component, Input, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
// import { Article } from './Article';
@Component({
  selector: 'app-encuenta-component',
  templateUrl: './encuenta-component.component.html',
  styleUrls: ['./encuenta-component.component.css']
})
export class EncuentaComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
}
export class EncuestaApp{
  titulo: string = "Encuesta aqui";
}