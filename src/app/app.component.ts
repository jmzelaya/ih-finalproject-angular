import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthApiService } from './services/auth-api.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  zoom: number = 10;
  //Map Start Position
  lat: number = 51.678228;
  lng: number = 7.229007;



  //Markers
  markers: marker[] = [
    {
        name: 'Test 1',
        lat: 42.825588,
        lng: -71.018029,
        draggable: true
    }
  ];

  userInfo: any;



  title = 'app';

  constructor(
    private authThang: AuthApiService,
    private routerThang: Router
  ) {  }

  ngOnInit() {
      this.authThang.getLoginStatus();

      this.authThang.loginStatusNotifier
        .subscribe(
          (loggedInInfo: any) => {
            if (loggedInInfo.isLoggedIn) {
            this.userInfo = loggedInInfo.userInfo;
          }
          else {
            this.userInfo = null;
          }
        }
      );
  }//CLOSE ngOnInit(...)

  logMeOut() {
    this.authThang.logOut()
      .subscribe(
        (apiResponse) => {
           this.routerThang.navigate(['/'])
        }
      );
  }//CLOSE logMeOut(...)

}

//MOVE THIS TO INTERFACES
interface marker{
  name?: string;
  lat: number;
  lng: number;
  draggable: boolean;
}
