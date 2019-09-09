import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin-layout.service';
import { AppConst } from '../../../app.constant';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SharedService } from 'app/shared/shared.service';
@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {

  editProfileForm: FormGroup;
  userDetail: any;
  isEmail: boolean;
  file;
  
  emailPattern = AppConst.emailValidationPattern;

  constructor(
    private adminService: AdminService,
    private fb: FormBuilder,
    private sharedService: SharedService
  ) {
    this.editProfileForm = this.fb.group({
      email: ['', [
        Validators.required,
        Validators.pattern(AppConst.emailValidationPattern)
      ]],
      user_name: ['', [Validators.required]],
      mobile_number: ['', [Validators.required]],
      profile_pic: ['', Validators.required]
    });
  }

  onSubmit() {
    const fd = new FormData();
    fd.append('profile_pic', this.file);
    fd.append('user_name', this.editProfileForm.controls['user_name'].value);
    fd.append('mobile_number', this.editProfileForm.controls['mobile_number'].value);
    this.adminService.editProfile(fd).subscribe((res: any) => {
      console.log(res);
      this.sharedService.sendProfilePic(res.data);
      this.sharedService.setLocalStorage('profile',res.data.profile_pic);
      this.sharedService.setLocalStorage('user_name',res.data.user_name)
    });
  }

  ngOnInit() {
    this.getUserProfile()
  }
  fileProgress(e) {
    this.file = <File>e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(this.file);
    reader.onload = (_event) => {
      this.userDetail.profile_pic = reader.result;
    }
  }

  getUserProfile() {
    this.adminService.getProfile().subscribe((res: any) => {
      this.userDetail = res.data;
      console.log(this.userDetail);

      if (this.userDetail.profile_pic === '') {
        this.userDetail.profile_pic = AppConst.image;
      }
      this.editProfileForm.controls["email"].disable();
      this.editProfileForm.patchValue({
        "email": this.userDetail.email,
        "user_name": this.userDetail.user_name,
        "mobile_number": this.userDetail.mobile_number,
        "profile_pic": this.userDetail.profile_pic,
      });
    })
  }

}
