import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SigninComponent} from './components/signin/signin.component';

const routes: Routes = [
  {path: '', redirectTo: 'signIn', pathMatch: 'full'},
  {path: 'signIn', component: SigninComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// export const AppRoutingModule = RouterModule.forRoot(routes);

