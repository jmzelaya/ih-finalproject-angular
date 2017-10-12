import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthApiService } from '../../services/auth-api.service';

import { SupplyApiService } from '../../services/supply-api.service';
import { SupplyInfo } from '../../interfaces/supply-info';

@Component({
  selector: 'app-supply-detail',
  templateUrl: './supply-detail.component.html',
  styleUrls: ['./supply-detail.component.css']
})
export class SupplyDetailComponent implements OnInit {
  baseUrl: string = 'http://localhost:3000'

  supplyInfo: any = {};
  userInfo: any;


  errorMessage: string;

  newSupply: SupplyInfo = {
    productName: '',
    productDescription: '',
    productValue: '',
  }

  constructor(
    private activatedThang: ActivatedRoute,
    private routerThang: Router,
    private supplyThang: SupplyApiService,
    private authThang: AuthApiService
  ) { }

  ngOnInit() {
    this.activatedThang.params.subscribe((myParams) => {
        this.supplyThang.getSupplyDetails(myParams.supplyId)
          .subscribe(
            (theSupplyFromApi) => {
                this.supplyInfo = theSupplyFromApi;
            }

          );

    });

    this.authThang.getLoginStatus()
      .subscribe(
        (loggedInInfo: any) => {
            if (loggedInInfo.isLoggedIn) {
                this.userInfo = loggedInInfo.userInfo;
            }
        }
      );
  }//CLOSE ngOnInit

}
