import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CustomerService } from './services/customer.service';
import { MerchantService } from './services/merchant.service';
import { HttpClientModule } from '@angular/common/http';
import { CustomerComponent } from './customer/customer.component';
import { MerchantComponent } from './merchant/merchant.component';
import { RegisterCustomerComponent } from './register-customer/register-customer.component';
import { RegisterMerchantComponent } from './register-merchant/register-merchant.component';
import { AdminComponent } from './admin/admin.component';
import { LogoutComponent } from './logout/logout.component';
import { SignupMerchantComponent } from './signup-merchant/signup-merchant.component';
import { FooterComponent } from './footer/footer.component';
import { DeleteCustomerComponent } from './delete-customer/delete-customer.component';
import { PackageComponent } from './package/package.component';
import { AllCustomerDetailsComponent } from './all-customer-details/all-customer-details.component';
import { AllMerchantDetailsComponent } from './all-merchant-details/all-merchant-details.component';
import { PackageMerchantComponent } from './package-merchant/package-merchant.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    CustomerComponent,
    MerchantComponent,
    RegisterCustomerComponent,
    RegisterMerchantComponent,
    AdminComponent,
    LogoutComponent,
    SignupMerchantComponent,
    FooterComponent,
    DeleteCustomerComponent,
    PackageComponent,
    AllCustomerDetailsComponent,
    AllMerchantDetailsComponent,
    PackageMerchantComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    CustomerService,
    MerchantService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
