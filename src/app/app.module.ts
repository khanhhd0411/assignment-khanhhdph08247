import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ServiceComponent } from './service/service.component';
import { ProductService } from './service/product.service';
import { HomeComponent } from './home/home.component';
import {HttpClientModule} from '@angular/common/http';
import { ProductDetailComponent } from './product-detail/product-detail.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule,AppRoutingModule,HttpClientModule ],
  declarations: [ AppComponent, HelloComponent, ProductComponent, ProductListComponent, ServiceComponent, HomeComponent, ProductDetailComponent, ],
  bootstrap:    [ AppComponent ],
  providers: [ProductService]
})
export class AppModule { }
