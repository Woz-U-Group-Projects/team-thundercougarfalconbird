import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { ProductviewComponent } from './productview/productview.component';
import { InventoryComponent } from './inventory/inventory.component';
import { UserProductComponent } from './user-product/user-product.component';
import { ProductComponent } from './product/product.component';

@NgModule({
  declarations: [
    AppComponent, 
    LoginComponent, 
    SignupComponent, 
    HeaderComponent, 
    HomeComponent, 
    ProfileComponent, 
    ProductviewComponent, 
    InventoryComponent,  
    UserProductComponent, 
    ProductComponent, 
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule, 
    HttpClientModule, 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
