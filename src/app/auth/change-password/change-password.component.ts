import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedService } from 'app/shared/shared.service';
import { AuthService } from '../auth.service';
import { AppConst } from 'app/app.constant';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {
  myForm: FormGroup;
  constructor(
    private sharedService : SharedService,
    private authService : AuthService,
    private router : Router,
    private fb : FormBuilder
  ) {
    this.myForm = this.fb.group({
      oldPassword: ['',[Validators.required]],
      newPassword: ['',[Validators.required]],
      confirmPassword: ['',[Validators.required]]
    });
   }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.myForm.value)
    let data = {
      old_password : this.myForm.value.oldPassword,
      new_password : this.myForm.value.newPassword,
    }
    this.authService.changePassword(data).subscribe((res:any)=>{
      this.router.navigate(['dashboard']);
      this.sharedService.loggerSuccess(res.message);
    })
  }

}
