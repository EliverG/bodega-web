import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {PasswordModule} from 'primeng/password';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProductsComponent } from './components/products/products.component';
import {TableModule} from 'primeng/table';
import {MessagesModule, } from 'primeng/messages';
import {MessageModule, } from 'primeng/message';
import { SplitButtonModule } from 'primeng/splitbutton';
import {ProgressBarModule} from 'primeng/progressbar';
import {MultiSelectModule} from 'primeng/multiselect';
import {SliderModule} from 'primeng/slider';
import {ToastModule} from 'primeng/toast';
import {CalendarModule} from 'primeng/calendar';
import {ContextMenuModule} from 'primeng/contextmenu';
import {DialogModule} from 'primeng/dialog';
import {DropdownModule} from 'primeng/dropdown';
import {MenuModule} from 'primeng/menu';
import { DividerModule } from "primeng/divider";

import {DialogService, DynamicDialogModule} from 'primeng/dynamicdialog';
import { DialogActionsProductsComponent } from './components/dialog-actions-products/dialog-actions-products.component';




@NgModule({
  declarations: [AppComponent, LoginComponent, ProductsComponent, DialogActionsProductsComponent],

  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MultiSelectModule,
    SliderModule,
    InputTextModule,
    ButtonModule,
    FormsModule,
    PasswordModule,
    TableModule,
    MessagesModule,
    MessageModule,
    SplitButtonModule,
    ProgressBarModule,
    BrowserAnimationsModule,
    CalendarModule,
		DialogModule,
		ContextMenuModule,
		DropdownModule,
		ToastModule,
    MenuModule,
    DynamicDialogModule,
    DividerModule
  ],
  providers: [DialogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
