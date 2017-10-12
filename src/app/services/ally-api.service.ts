import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from '../../environments/environment';

@Injectable()
export class AllyApiService {

  baseUrl: string = environment.apiUrl;


  constructor(
    private httpThang: HttpClient
  ) { }

  //GET   /api/my-allies
  getAllies() {
    return this.httpThang.get(
      this.baseUrl + '/api/my-allies',
      {withCredentials: true}
    );
  }//CLOSE getAllies


  // POST /api/users/allies/:allyId
    addAlly(allyId){
      // console.log(allyId);
      return this.httpThang.post(
        this.baseUrl + `/api/users/allies/${allyId}`,{},
        {withCredentials: true}
      );
    }//close addAlly()

}
