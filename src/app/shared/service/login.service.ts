import { UtilService } from './util.service';
import { LoginResponse } from '../interface/LoginResponse';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { Login } from 'src/app/shared/interface/Login';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private readonly wrongSent = "No se ha podido comunicar con el servicio";
  public readonly failMessage = "Error al leer el servicio";

  constructor(
    private readonly utilService: UtilService
  ) {}

  public async grantAccess(request: Login): Promise<any>{
    return new Promise((resolve, reject) =>{
      this.utilService.grantAccess(request).subscribe((responseLogin: any) =>{
        if(responseLogin){
          resolve(responseLogin)
        }else{
          reject(this.failMessage)
        }
      })
    })
  }
}
