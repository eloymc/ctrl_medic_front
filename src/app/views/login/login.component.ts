import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public email:string='';
  public password:string='';

  constructor(
    private _auth:AuthService, private router: Router
  ){
    localStorage.clear();
  }

  login(){
    this._auth.login({email:this.email, password:this.password}).subscribe(
      data=>{ 
        let datos:any = data;
        localStorage.setItem('tk',datos.access_token);
        this.router.navigate(['']);
        //console.log(data);
      },
      err=>{ console.log(err); }
    );
  }

}
