import { Products } from './../interface/Products';
import { Injectable } from '@angular/core';
import { rejects } from 'assert';
import { UtilService } from './util.service';
import { resolve } from 'dns';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  public readonly failMessage = "Error al leer el servicio";

  constructor(
    private readonly utilService: UtilService
  ) { }

  public async listProducts():Promise<Products[]>{
    return new Promise((resolve, rejects)=>{
      this.utilService.getAllProducts().subscribe(response =>{
        if(response.status === 200){
          resolve(response.body)
        }else{
          rejects(this.failMessage)
        }
      })
    })
  }

  public async deleteProductoById(idProduct:number):Promise<any>{
    return new Promise((resolve,reject)=>{
      this.utilService.deleteByProdcutId(idProduct).subscribe(result =>{
        if(result.status === 200){
          resolve(result)
        }else{
          reject(this.failMessage)
        }
      })
    })
  }

  public async getProductById(idProduct : number) : Promise<any>{
    return new Promise((resolve, reject) =>{
      this.utilService.getProductById(idProduct).subscribe(result =>{
        if(result.status === 200){
          resolve(result)
        }else{
          reject(this.failMessage)
        }
      })
    })
  }

  public async addProduct(product :Products) : Promise<any>{
    return new Promise((resolve,reject) =>{
      this.utilService.addProduct(product).subscribe(resp =>{
        if(resp.status === 200){
          resolve(resp)
        }else{
          reject(this.failMessage)
        }
      })
    })
  }
}
