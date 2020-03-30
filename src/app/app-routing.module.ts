import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { PasswordCheckComponent } from './modules/password-check/password-check.component';

const routes: Routes = [
  { path: '', component:PasswordCheckComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
