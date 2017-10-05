import { Component, OnInit } from '@angular/core';
import { SignupInfo } from '../../interfaces/signup-info';

import { AuthApiService } from '../../services/auth-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  newUser: SignupInfo = {
    signupFirstName: '',
    signupLastName: '',
    signupEmail: '',
    signupPassword: ''
  };

  errorMessage: string = '';


  constructor(
    private authThang: AuthApiService,
    private routerThang: Router
  ) { }

  ngOnInit() {
  }

  submitSignup() {
    this.authThang.postSignup(this.newUser)
      .subscribe(
        (userInfo) => {

          this.routerThang.navigate(['']);
        },

        (errInfo) => {
          console.log('Signup Error', errInfo);
          if(errInfo.status){
            console.log('cow here1');
            this.errorMessage = 'Validation error';
          }

          else{
            this.errorMessage = 'Something went wrong. Please try again later.'
          }
        }

      );//CLOSE subscribe()
  }//CLOSE submitSignup(...)

}
