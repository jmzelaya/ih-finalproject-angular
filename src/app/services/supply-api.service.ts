import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class SupplyApiService {

  constructor(
    private httpThang: HttpClient
  ) { }

}
