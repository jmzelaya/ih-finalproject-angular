import { Component, OnInit } from '@angular/core';
import { SupplyApiService } from '../../services/supply-api.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-supply-page',
  templateUrl: './supply-page.component.html',
  styleUrls: ['./supply-page.component.css']
})
export class SupplyPageComponent implements OnInit {

  baseUrl: string = 'http://localhost:3000'

  constructor(
    private supplyThang: SupplyApiService,
    private httpThang: HttpClient
  ) { }

  ngOnInit() {
  }

}
