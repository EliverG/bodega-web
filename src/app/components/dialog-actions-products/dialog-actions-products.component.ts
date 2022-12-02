import { Component, OnInit } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Products } from 'src/app/shared/interface/Products';
import { ProductosService } from 'src/app/shared/service/productos.service';
@Component({
  selector: 'app-dialog-actions-products',
  templateUrl: './dialog-actions-products.component.html',
  styleUrls: ['./dialog-actions-products.component.scss']
})
export class DialogActionsProductsComponent implements OnInit {

  public product: Products = {} as Products

  constructor(
    public refConf: DynamicDialogConfig,
    private dialogRef: DynamicDialogRef,
    private readonly productService: ProductosService,
  ) { }

  ngOnInit(): void {
    this.product = this.refConf.data
  }

  public closeDialog(): void {
    this.dialogRef.close(null)
  }

  public async saveDataProduct(product: Products) {
    await this.productService.addProduct(product).then((response) => {
      if (response.status === 200) {
        this.dialogRef.close(response.body)
      } else {
        console.log("error en servicio de guardar")
      }
    })
  }
}
