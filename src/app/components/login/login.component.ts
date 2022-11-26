import { Router, RouterModule } from '@angular/router';
import { LoginService } from '../../shared/service/login.service';
import { Component, OnInit } from '@angular/core';
import { Login } from '../../shared/interface/Login';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public userName : string = ''
  public password: string = ''

  constructor(
    private readonly login: LoginService,
    private readonly route: Router,
  ) { }

  ngOnInit(): void {
  }

  public accessGrant(){
    const userData = {} as Login
    userData.usuario = this.userName
    userData.contrasena = this.password
    if(this.userName && this.password){
      this.login.grantAccess(userData).then(response =>{
        if(response.status === 200){
          Swal.fire(
            'Acceso Correcto',
            `Bienvenido ${this.userName}`,
            'success'
          )
          this.route.navigateByUrl('products')
        }else{
          Swal.fire(
            'Acceso Denegado',
            `usuario o contraseña incorrecta`,
            'error'
          )
        }
      })
      }
  }

}
