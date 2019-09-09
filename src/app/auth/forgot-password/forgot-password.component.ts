import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppConst } from 'app/app.constant';
import { AuthService } from '../auth.service';
import { SharedService } from 'app/shared/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  myForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService : AuthService,
    private sharedService : SharedService,
    private router : Router
  ) {
    this.myForm = this.fb.group({
      email: ['', [
        Validators.required,
        Validators.pattern(AppConst.emailValidationPattern)
      ]]
    })
  }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.myForm.value);
    const data = {
      email : this.myForm.value.email,
      user_type : "1" // as per requirement
    }
    this.authService.forgotPassword(data).subscribe((res:any)=>{
      this.router.navigate(['/login']);
      this.sharedService.loggerSuccess(res.message);
    })
  }
}
