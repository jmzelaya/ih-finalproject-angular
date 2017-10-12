import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthApiService } from '../../services/auth-api.service';
import { LoginInfo } from '../../interfaces/login-info';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  loginError: string;

  errorMessage: string = '';

  loginUser: LoginInfo = {
    loginUsername: '',
    loginPassword: ''
  }

  constructor(
    private httpThang: HttpClient,
    private authThang: AuthApiService,
    private routerThang: Router

  ) { }

  ngOnInit() {
  }

  loginSubmit() {
    this.authThang.postLogin(this.loginUser)
      .subscribe(
        (userInfo) => {
          this.routerThang.navigate(['/user-home'])
        },

        (errInfo) => {
          if(errInfo.status === 401) {
            this.errorMessage = 'Bad credentials'
          }

          else{
            this.errorMessage = 'Something went wrong, please try agian.'
          }
        }
      )
  }

}
