import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInPageComponent } from './sign-in-page/sign-in-page.component';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';
import { SignOutPageComponent } from './sign-out-page/sign-out-page.component';
import { AuthGuardService } from './service/auth-guard.service';

const routes: Routes = [
  {
    path: 'sign-in',
    component: SignInPageComponent, 
  },
  {
    path: 'sign-up',
    component: SignUpPageComponent,
  },
  {
    path: 'sign-out',
    component: SignOutPageComponent,
    canActivate:[AuthGuardService]
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {
}
