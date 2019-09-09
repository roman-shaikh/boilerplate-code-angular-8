import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url: string;

  constructor(private _http: HttpClient) {
    this.url = environment.Base_URL;
  }
  // admin login
  adminLogin(admin: any) {
    return this._http.post(this.url + 'users/admin-login', admin);
  }

  // admin login
  adminLogout() {console.log('hi');
    return this._http.post(this.url + 'users/logout', {});
  }

  // get token
  getToken() {
    return localStorage.getItem('auth_token');
  }

  // change password
  changePassword(data){
    return this._http.post(this.url +'users/change-password',data);
  }

  // forget password
  forgotPassword(data){
    return this._http.post(this.url + 'users/forgot-password', data);
  }

  // reset password
  resetPassword(data){
    return this._http.post(this.url + 'users/set-password', data);
  }
}
