import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponentComponent } from './principal-component/principal-component.component';
import { MensajeriaComponentComponent } from './mensajeria-component/mensajeria-component.component';
import { TareasComponentComponent } from './tareas-component/tareas-component.component';
import { RouterModule, Routes } from '@angular/router';
import { ServicioGuardarService } from './servicio-guardar.service';
import { TareasHijoComponentComponent } from './tareas-component/tareas-hijo-component/tareas-hijo-component.component';
import { EncuentaComponentComponent, EncuestaApp } from './encuenta-component/encuenta-component.component';

const appRoutes:Routes=[

  {path:'principal', component:PrincipalComponentComponent},
  {path:'mensajeria', component:MensajeriaComponentComponent},
  {path:'tareas', component: TareasComponentComponent},
  {path:'encuestas', component:EncuentaComponentComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponentComponent,
    MensajeriaComponentComponent,
    TareasComponentComponent,
    TareasHijoComponentComponent,
    // EncuestaApp
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ServicioGuardarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
