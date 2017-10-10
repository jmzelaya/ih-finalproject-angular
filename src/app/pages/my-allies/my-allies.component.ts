import { Component, OnInit } from '@angular/core';
import { AllyApiService } from '../../services/ally-api.service'

@Component({
  selector: 'app-my-allies',
  templateUrl: './my-allies.component.html',
  styleUrls: ['./my-allies.component.css']
})
export class MyAlliesComponent implements OnInit {

  constructor(
    private allyThang: AllyApiService
  ) { }

  ngOnInit() {
  }

}
