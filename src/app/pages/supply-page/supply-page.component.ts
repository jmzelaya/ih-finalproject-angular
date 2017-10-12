import { Component, OnInit } from '@angular/core';
import { SupplyApiService } from '../../services/supply-api.service';
import { HttpClient } from '@angular/common/http';
import { SupplyInfo } from '../../interfaces/supply-info';

@Component({
  selector: 'app-supply-page',
  templateUrl: './supply-page.component.html',
  styleUrls: ['./supply-page.component.css']
})
export class SupplyPageComponent implements OnInit {

  baseUrl: string = 'http://localhost:3000'

  supplies: any[] = [];

  errorMessage: string;

  newSupply: SupplyInfo = {
    productName: '',
    productDescription: '',
    productValue: '',
    tag: ''
  }

  constructor(
    private supplyThang: SupplyApiService,
    private httpThang: HttpClient
  ) { }

  ngOnInit() {
    this.supplyThang.getSupplies()
      .subscribe(
        (suppliesFromApi: any[]) => {
          this.supplies = suppliesFromApi;
        }
      );//CLOSE this.postThang.getSupplies()
    }//CLOSE ngOnInit()

    submitSupply() { //should probably make this not "receiveCow() :D"
      //call service
      this.supplyThang.submitSupply(this.newSupply)
        .subscribe(
          (fullSupplyDetails) => {
            console.log('New supply success', fullSupplyDetails);
            this.supplies.unshift(fullSupplyDetails);
            this.newSupply = {
              productName: '',
              productDescription: '',
              productValue: '',
              tag: ''
            };
          },

          (errorInfo) => {
            if(errorInfo.status === 400) {
              this.errorMessage = 'Validation error'
            }

            else {
              this.errorMessage = 'Unknown error. Try again later'
            }
            console.log('New Supply Error', errorInfo)
          }
        )
    }//CLOSE receiveCow()


}//CLOSE class SupplyPageComponent
