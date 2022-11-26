import { Component, OnInit } from '@angular/core';
import { timeStamp } from 'console';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { Products } from 'src/app/shared/interface/Products';
@Component({
  selector: 'app-dialog-actions-products',
  templateUrl: './dialog-actions-products.component.html',
  styleUrls: ['./dialog-actions-products.component.scss']
})
export class DialogActionsProductsComponent implements OnInit {

  public product: Products = {} as Products

  constructor(
    public refConf: DynamicDialogConfig,
  ) { }

  ngOnInit(): void {
    this.displayDataProduct()
  }

  public displayDataProduct(): void{
    this.product = this.refConf.data
    console.log("este es product: ", this.product)
    console.log("este es marca: 2222 ", this.product.marca)
  }

}
