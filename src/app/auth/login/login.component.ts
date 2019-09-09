import { Component, OnInit } from '@angular/core';
import { Admin } from '../../models/admin.model';
import { AppConst } from '../../app.constant';
import { SharedService } from '../../shared/shared.service';
import { AuthService } from '../auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
myForm: FormGroup;
  constructor(
    private sharedService : SharedService,
    private authService : AuthService,
    private router : Router,
    private fb : FormBuilder) {
      this.myForm = this.fb.group({
        email: ['', [
          Validators.required,
          Validators.pattern(AppConst.emailValidationPattern)
        ]],
        password: ['',[Validators.required]]
      });
     }
  token: string;
  admin = new Admin();
  emailPattern = AppConst.emailValidationPattern;
  ngOnInit() {
  }

  login() {
    this.authService.adminLogin(this.myForm.value).subscribe((res: any) => {
      console.log(res)
      this.token = res.data.auth_token;
      this.sharedService.setLocalStorage('auth_token', this.token);
      this.sharedService.setLocalStorage('profile', res.data.profile.profile_pic);
      this.sharedService.setLocalStorage('user_name', res.data.profile.user_name);
      this.router.navigate(['/admin'])
      this.sharedService.loggerSuccess(res.message);
    });
  }
}
