import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { SharedService } from 'app/shared/shared.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  resetPasswordForm: FormGroup
  token: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private authService : AuthService,
    private sharedService : SharedService,
    private router : Router
  ) {
    this.resetPasswordForm = this.fb.group({
      new_password: ['', [
        Validators.required
      ]],
      confirm_new_password : ['',[
        Validators.required
      ]]
    })
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((res: any) => {
      this.token = res.token;
    })
  }

  onSubmit() {
    const data = {
      new_password : this.resetPasswordForm.value.new_password,
      reset_password_token : this.token
    }
    this.authService.resetPassword(data).subscribe((res:any)=>{
      this.router.navigate(['/login'])
      this.sharedService.loggerSuccess(res.message)
    })    
  }
}
