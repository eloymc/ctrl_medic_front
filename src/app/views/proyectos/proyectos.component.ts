import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent {
  public action:string = '';
  public params:any = null;

  constructor(private activatedRoute: ActivatedRoute) {
    this.action = activatedRoute.snapshot.params['action'];
    console.log(this.action);
 
  }
}
