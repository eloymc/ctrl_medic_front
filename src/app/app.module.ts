import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './auth.interceptor';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './views/login/login.component';
import { CheckboxModule } from 'primeng/checkbox';
import { StyleClassModule } from 'primeng/styleclass';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { SplitButtonModule } from 'primeng/splitbutton';
import { SpeedDialModule } from 'primeng/speeddial';
import { PrincipalComponent } from './principal/principal.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Error404Component } from './views/error404/error404.component';
import { MegaMenuModule } from 'primeng/megamenu';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { SelectButtonModule } from 'primeng/selectbutton';
import { PluginPacientesComponent } from './dashboard/plugin-pacientes/plugin-pacientes.component';
import { PluginCitasComponent } from './dashboard/plugin-citas/plugin-citas.component';
import { FormsModule } from '@angular/forms';
import { TimelineModule } from 'primeng/timeline';
import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { TagModule } from 'primeng/tag';
import { ProyectosComponent } from './views/proyectos/proyectos.component';
import { PacientesFormComponent } from './administracion/pacientes/pacientes-form/pacientes-form.component';
import { CalendarModule } from 'primeng/calendar';
import { HttpClientModule } from '@angular/common/http';
import { DropdownModule } from 'primeng/dropdown';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PrincipalComponent,
    DashboardComponent,
    Error404Component,
    PluginPacientesComponent,
    PluginCitasComponent,
    ProyectosComponent,
    PacientesFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CheckboxModule,
    StyleClassModule,
    InputTextModule,
    ButtonModule,
    SplitButtonModule,
    SpeedDialModule,
    MegaMenuModule,
    CardModule,
    DividerModule,
    SelectButtonModule,
    FormsModule,
    TimelineModule,
    BadgeModule,
    AvatarModule,
    AvatarGroupModule,
    TagModule,
    CalendarModule,
    HttpClientModule,
    DropdownModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
