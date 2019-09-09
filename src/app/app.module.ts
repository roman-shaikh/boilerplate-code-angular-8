import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LoginComponent } from './auth/login/login.component';
import { UserLayoutComponent } from './layouts/user-layout/user-layout.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';
import { AuthInterceptor } from './auth/auth.intercepter';
import { SharedService } from './shared/shared.service';
import { SharedModule } from './shared/shared.module';
import { ErrorsHandlerService } from './shared/error-handler';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    LoginComponent,
    UserLayoutComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
  ],
  providers: [
    SharedService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    {
      provide: ErrorHandler,
      useClass: ErrorsHandlerService
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
