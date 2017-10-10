import { Component, OnInit } from '@angular/core';
import { AllyApiService } from '../../services/ally-api.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-my-allies',
  templateUrl: './my-allies.component.html',
  styleUrls: ['./my-allies.component.css']
})
export class MyAlliesComponent implements OnInit {

  allies: any[] = [];

  constructor(
    private allyThang: AllyApiService,
    private httpThang: HttpClient
  ) { }

  ngOnInit() {
    this.allyThang.getAllies()
      .subscribe(
        (alliesFromApi: any[]) => {
          this.allies = alliesFromApi;
        }
      );//CLOSE this.postThang.getAllies()
  }

}
