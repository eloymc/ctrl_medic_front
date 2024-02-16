import { Component } from '@angular/core';
import { Direccion } from 'src/app/models/direccion';
import { Paciente } from 'src/app/models/paciente';
import { AddressService } from 'src/app/services/address.service';

@Component({
  selector: 'app-pacientes-form',
  templateUrl: './pacientes-form.component.html',
  styleUrls: ['./pacientes-form.component.css']
})
export class PacientesFormComponent {

  public direccion:Direccion = {
    id:0,
    calle:'',
    numero_ext:'',
    numero_int:'',
    colonia:'',
    municipio:'',
    estado:'',
    pais:'MX',
    cp:''
  };

  public paciente:Paciente = {
    id: 0,
    nombre: '',
    apellido_paterno: '',
    apellido_materno: '',
    genero: '',
    email: '',
    telefono_1: '',
    telefono_2: '',
    id_direccion: 0,
    direccion: this.direccion,
    fecha_nacimiento: new Date,
    activo: true
  };
  public paises:any = [];
  public rcp:any = [];
  public colonias:any = [];
  public edad:number = 0;
  public generoOptions:any = [
    {'label':'Masculino','value':'Masculino'},
    {'label':'Femenino','value':'Femenino'}
  ];

  constructor(
    private _address: AddressService
  ) {
    this._address.paises().subscribe(
      data=>{
        this.paises = data;
      },
      err=>{
        console.log(err);
      }
    );
  }

  public dameEdad(){
    if(this.paciente.fecha_nacimiento){
      const convertAge = new Date(this.paciente.fecha_nacimiento);
      const timeDiff = Math.abs(Date.now() - convertAge.getTime());
      this.edad = Math.floor((timeDiff / (1000 * 3600 * 24))/365);
    }
  }

  public traerCP(){
    console.log(this.direccion.cp);
    console.log(this.direccion.cp.length);
    if(this.direccion.cp.length < 5) return;
    this._address.cp(this.direccion.pais,this.direccion.cp).subscribe(
      data=>{
        this.rcp = data;
        this.paciente.direccion.estado = this.rcp.places[0].state;
        console.log(data);
      },
      err=>{
        console.log(err);
      }
    );
  }
  
}
