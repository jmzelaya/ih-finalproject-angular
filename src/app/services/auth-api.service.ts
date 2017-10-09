import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SignupInfo } from '../interfaces/signup-info';
import { LoginInfo } from '../interfaces/login-info';


@Injectable()
export class AuthApiService {

  baseUrl: string = 'http://localhost:3000';

  constructor(
    private httpThang: HttpClient
  ) { }

  postSignup(userInfo: SignupInfo){
    console.log(userInfo);
    return this.httpThang.post(
      this.baseUrl + '/api/process-signup',
      userInfo,
      { withCredentials: true }
    );
  }

  postLogin(userInfo: LoginInfo){
    return this.httpThang.post(
      this.baseUrl + '/api/process-login',
      userInfo,
      { withCredentials: true }
    );
  }

  logOut() {
    return this.httpThang.delete(
      this.baseUrl + '/api/logout',
      { withCredentials: true }
    );
  }

  getLoginStatus(){
    return this.httpThang.get(
      this.baseUrl + '/api/checklogin',
      { withCredentials: true }
    );
  }

  getRecentSurvivors(){
    return this.httpThang.get(
      this.baseUrl + '/api/users'
    )
  }

}//CLOSE class AuthApiService{}
