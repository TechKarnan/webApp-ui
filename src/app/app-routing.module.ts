import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainpageComponent } from './homepage/mainpage.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
 {
path:'',
component:MainpageComponent,
 },
 {
  path:'home',
component:MainpageComponent,
 },
 {
  path:'register',
component:RegisterComponent,
 },
 {
  path:'login',
component:LoginComponent,
 }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
