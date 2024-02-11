import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { coffeePageComponent } from './coffee-page/coffee-page.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { PageErrorComponent } from './page-error/page-error.component';

const routes: Routes = [
  { path: 'cart-page', component: CartPageComponent, canActivate: [AuthGuard] },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'search/:searchTerm', component: HomeComponent },
  { path: 'tag/:tag', component: HomeComponent },
  { path: 'coffee/:id', component: coffeePageComponent },

  { path: '', redirectTo: '/login', pathMatch: 'full' },

  { path: '**', component: PageErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
