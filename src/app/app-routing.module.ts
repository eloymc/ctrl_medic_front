import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './views/login/login.component';
import { PrincipalComponent } from './principal/principal.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProyectosComponent } from './views/proyectos/proyectos.component';
import { Error404Component } from './views/error404/error404.component';
import { PacientesFormComponent } from './administracion/pacientes/pacientes-form/pacientes-form.component';

const routes: Routes = [
  {
    path:'',
    component:PrincipalComponent,
    children:[
      {path:'',component:ProyectosComponent},
      {path:'proyecto', component:DashboardComponent},
      {path:'proyecto/:action', component:ProyectosComponent},
      {path:'dashboard', component:DashboardComponent},
      {
        path:'administracion', 
        children:[
          {path:'pacientes', component:PacientesFormComponent}
        ]
      }
    ]
  },
  {path:'login',component:LoginComponent},
  {path:'error',component:Error404Component},
  {path:'**',redirectTo:'/error'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
