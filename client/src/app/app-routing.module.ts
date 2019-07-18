import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";
import { HomeComponent } from "./home/home.component";
import { ProfileComponent } from "./profile/profile.component";
import { InventoryComponent } from './inventory/inventory.component';
import { ProductviewComponent } from './productview/productview.component';
import { ShoppingcartComponent } from './shoppingcart/shoppingcart.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "/home" },
  { path: "login", component: LoginComponent },
  { path: "signup", component: SignupComponent },
  { path: "profile", component: ProfileComponent },
  { path: "home", component: HomeComponent },
  { path: "input", component: InventoryComponent },
  { path: "productlist", component: ProductComponent },
  { path: "productview", component: ProductviewComponent },
  { path: "cart", component: ShoppingcartComponent },
  { path: "wish", component: WishlistComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
