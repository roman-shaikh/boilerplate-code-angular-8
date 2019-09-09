import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment'

@Injectable({
  providedIn: 'root'
})


export class AdminService {
    constructor(
        private _http : HttpClient
    ) 
    { 
        this.url = environment.Base_URL;
    }

    url: string;
    getProfile(){
        return this._http.get(this.url + 'users/get-user-profile')
    }

    editProfile(data){
        return this._http.post(this.url + 'users/update-user-profile',data)
    }
}