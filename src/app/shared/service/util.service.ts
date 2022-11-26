import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Login } from '../interface/Login';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  private readonly apiBodega = environment.apiBodega;
  private readonly messageService: MessageService | any

  constructor(
    private readonly http: HttpClient,
  ) { }

  public grantAccess(usuario: Login){
    const url = `${this.apiBodega}/login`
    return this.http.post<any>(url, usuario).pipe(
      catchError(
          this.handleError<any>('Error al leer acceso de usuario', [])
      )
    );
  }

  public getAllProducts(){
    const url = `${this.apiBodega}/list/products`
    return this.http.get(url).pipe(
      catchError(
        this.handleError<any>('Error al obtener la lista de correos',[])
      )
    )
  }

  public deleteByProdcutId(idProduct : number){
    const url = `${this.apiBodega}/delete/${idProduct}`
    return this.http.get(url).pipe(
      catchError(
        this.handleError<any>('Fallo al eliminar el producto',[])
      )
    )
  }

  public getProductById(idProduct: number){
    const url = `${this.apiBodega}/get-product-id/${idProduct}`
    return this.http.get(url).pipe(
      catchError(
        this.handleError<any>('Fallo al consultar el id',[])
      )
    )
  }


  private handleError<T>(operation = 'operacion', result?: T) {
    return (error: any): Observable<T | undefined> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);

      this.messageService.add({
        severity:'error',
        summary: 'Fallo de comunicación con el Servidor.',
        detail: `Favor Intentar de Nuevo`,
      });

      return of(result);
    };
  }
}
