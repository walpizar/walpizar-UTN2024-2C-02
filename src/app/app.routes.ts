import { Routes } from '@angular/router';
import { ProductsComponent } from './pages/components/products/products.component';
import { LoginComponent } from './pages/components/auth/login/login.component';

export const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'products', component:ProductsComponent},
  {path:'productsDetail',redirectTo:''}

];
