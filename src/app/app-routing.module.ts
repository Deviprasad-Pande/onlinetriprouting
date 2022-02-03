import {NgModule}  from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { CustomerComponent } from './customer/customer.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { MerchantComponent } from './merchant/merchant.component';
import { SignupComponent } from './signup/signup.component';
import { SignupMerchantComponent } from './signup-merchant/signup-merchant.component';
import { FooterComponent } from './footer/footer.component';
import { DeleteCustomerComponent } from './delete-customer/delete-customer.component';
import { PackageComponent } from './package/package.component';
import { AllCustomerDetailsComponent } from './all-customer-details/all-customer-details.component';
import { AllMerchantDetailsComponent } from './all-merchant-details/all-merchant-details.component';
import { PackageMerchantComponent } from './package-merchant/package-merchant.component';



const routes: Routes = [
{path:"",redirectTo:"login",pathMatch:"full"},
{path:"login",component:LoginComponent},
{path:"merchant", component: MerchantComponent},
{path:"customer", component: CustomerComponent},
{path:"admin",component:AdminComponent},
{path:"signup",component: SignupComponent },
{path:"logout",component: LogoutComponent},
{path:"signup-merchant",component: SignupMerchantComponent},
{path: "footer", component : FooterComponent},
{path: "delete-customer", component: DeleteCustomerComponent},
{path: "package", component: PackageComponent},

{path: "package-merchant", component: PackageMerchantComponent},
{path: "all-customer-details",component: AllCustomerDetailsComponent},
{path: "all-merchant-details",component: AllMerchantDetailsComponent},





{path:"**",redirectTo:"login",pathMatch:"full"}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }












