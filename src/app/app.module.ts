import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { FooterComponent } from './footer/footer.component';
import { TetiereComponent } from './tetiere/tetiere.component';
import { SaisieClientComponent } from './saisie-client/saisie-client.component';
import { RecapComponent } from './recap/recap.component';
import { ProductService } from './product.service';
import { ProductComponent } from './product/product.component';
import { ProductFiltreComponent } from './product-filtre/product-filtre.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule ],
  declarations: [ AppComponent, HelloComponent, FooterComponent, TetiereComponent, SaisieClientComponent, RecapComponent, ProductComponent, ProductFiltreComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ProductService]
})
export class AppModule { }
