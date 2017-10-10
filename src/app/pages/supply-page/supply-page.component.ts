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
    }


}//CLOSE class SupplyPageComponent
