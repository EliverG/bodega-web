import { DialogActionsProductsComponent } from './../dialog-actions-products/dialog-actions-products.component';
import { ProductosService } from './../../shared/service/productos.service';
import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/shared/interface/Products';
import { Table } from 'primeng/table';
import { MenuItem } from 'primeng/api';
import Swal from 'sweetalert2'
import { DialogService, DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  public productList: Products[] = []
  public items: MenuItem[] = []

  public loading: boolean = true
  public selectedItem: any = null
  public ref: DynamicDialogRef = new DynamicDialogRef()
  public dialogConf = new DynamicDialogConfig();

  public selectedProduct: Products = {} as Products

  constructor(
    private readonly productService: ProductosService,
    public dialogService: DialogService
  ) { }

  ngOnInit(): void {
    this.getListProducts()
  }

  public getListProducts(): void {
    this.productService.listProducts().then(response => {
      if (response.status === 200) {
        this.productList = response.body
        this.showItems()
        this.loading = false;
      } else {
        console.log("error")
      }
    })
  }

  public showItems() {

    this.items = [
      {
        label: 'Productos',
        items: [
          { label: 'Añadir', icon: 'pi pi-fw pi-plus-circle' },
          {
            label: 'Editar', icon: 'pi pi-fw pi-file-edit',
            command: ($event) =>
              this.openDialogProduct()
          },


          {
            label: 'Eliminar', icon: 'pi pi-fw pi-delete-left',
            command: ($event) =>
              Swal.fire({
                title: `Desea eliminar el registro?`,
                text: "No podra revertir el cambio!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Si, eliminarlo!'
              }).then((result) => {
                if (result.isConfirmed) {
                  this.deleteByIdProduct(this.selectedItem)
                  Swal.fire(
                    'Eliminado!',
                    `El producto ha sido eliminado`,
                    'success'
                  )
                }
              })
          }
        ]
      },
      {
        label: 'Pdf',
        items: [
          { label: 'Descargar', icon: 'pi pi-fw pi-download' },
          { label: 'Enviar por Correo', icon: 'pi pi-fw pi-send' }
        ]
      }];
  }

  public deleteByIdProduct(idProduct: number) {
    this.productService.deleteProductoById(idProduct).then(result => {
      if (result.status === 200) {
        this.getListProducts();
      } else {
        console.log("no se pudo eliminar")
      }
    })
  }

  public clear(table: Table): void {
    table.clear();
  }

  public getEventValue($event: any) {
    return $event.target.value;
  }

  public async getProductById(id: number) {
    const prodById: Products = {} as Products
    await this.productService.getProductById(id).then(result => {
      const tempBody: Products = result.body
      prodById.id_product = tempBody.id_product
      prodById.product_name = tempBody.product_name
      prodById.stock = tempBody.stock
      prodById.categoria = tempBody.categoria
      prodById.marca = tempBody.marca
      prodById.serie = tempBody.serie
    })
    this.selectedProduct = prodById
  }

  public async openDialogProduct() {
    await this.getProductById(this.selectedItem)
    this.dialogConf.header = 'Detalle Productos',
      this.dialogConf.width = '70%',
      this.dialogConf.baseZIndex = 10000,
      this.dialogConf.contentStyle = { "max-height": "500px", "overflow": "auto" },
      this.dialogConf.data = this.selectedProduct
    this.ref = this.dialogService.open(DialogActionsProductsComponent, this.dialogConf)
  }

}
