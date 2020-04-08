import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PasswordCheckComponent } from './modules/password-check/password-check.component';
import { PasswordValidatorDirective } from './shared/directive/password-validator.directive';

@NgModule({
  declarations: [
    AppComponent,
    PasswordCheckComponent,
    PasswordValidatorDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
