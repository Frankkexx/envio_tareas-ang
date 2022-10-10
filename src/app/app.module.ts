import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponentComponent } from './principal-component/principal-component.component';
import { MensajeriaComponentComponent } from './mensajeria-component/mensajeria-component.component';
import { TareasComponentComponent } from './tareas-component/tareas-component.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes:Routes=[

  {path:'', component:PrincipalComponentComponent},
  {path:'mensajeria', component:MensajeriaComponentComponent},
  {path:'tareas', component: TareasComponentComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponentComponent,
    MensajeriaComponentComponent,
    TareasComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
