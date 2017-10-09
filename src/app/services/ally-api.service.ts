import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable()
export class AllyApiService {

  baseUrl: string = 'http://localhost:3000';

  constructor(
    private httpThang: HttpClient
  ) { }

  //GET   /api/my-allies
  getAllies() {
    return this.httpThang.get(
      this.baseUrl + '/api/my-allies'
    );
  }//CLOSE getAllies



}
