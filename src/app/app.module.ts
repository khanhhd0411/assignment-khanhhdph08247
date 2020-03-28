import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ServiceComponent } from './service/service.component';
import { ProductService } from './service/product.service';
import {HttpClientModule} from '@angular/common/http';



@NgModule({
  imports:      [ BrowserModule, FormsModule,HttpClientModule ],
  declarations: [ AppComponent, HelloComponent, ProductComponent, ProductListComponent, ServiceComponent],
  bootstrap:    [ AppComponent ],
  providers: [ProductService]
})
export class AppModule { }
