import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/components/header/header.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { CartDetailComponent } from './features/cart-detail/cart-detail.component';
import { PaymentFormComponent } from './features/payment/payment-form/payment-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CartDetailComponent,
    PaymentFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
