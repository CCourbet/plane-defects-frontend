import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './shared/components';
import { LoginComponent } from './login/login.component';
import { FormComponent } from './form/form.component';
import { LoginService } from './shared/services/login.service';

const routes: Routes = [
  { path: '', redirectTo: 'form', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'form', component: FormComponent, canActivate: [LoginService] },
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
