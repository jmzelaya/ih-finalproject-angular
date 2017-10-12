import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { SupplyInfo } from '../interfaces/supply-info';
import { environment } from '../../environments/environment';



@Injectable()
export class SupplyApiService {

  baseUrl: string = environment.apiUrl;

  constructor(
    private httpThang: HttpClient
  ) { }

  //GET           /api/supplies
  getSupplies(){
    return this.httpThang.get(
      this.baseUrl + '/api/supplies'
    )
  }//CLOSE getSupplies()

  //POST        /api/supplies
  submitSupply(supplyFields: SupplyInfo){
    return this.httpThang.post(
      this.baseUrl + '/api/supplies',
      supplyFields,
      {withCredentials: true}
    );
  }//CLOSE postSupply()

  getSupplyDetails(supplyId: string){
    return this.httpThang.get(
      this.baseUrl + '/api/supplies/' + supplyId
    );
  }

}
