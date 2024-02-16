import { Component, OnInit } from '@angular/core';
import { MegaMenuItem } from 'primeng/api';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  items: MegaMenuItem[] | undefined;

  constructor(
    private _auth: AuthService,
    private _router: Router
  ){
    this._auth.checkUser().subscribe();
  }

  ngOnInit() {
    this.items = [];
    
  }

  cerrarSesion(){
    this._auth.logout().subscribe(
      data=>{
        localStorage.clear();
        this._router.navigate(['/login']);
      }
    );
  }
}
