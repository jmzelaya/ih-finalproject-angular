import { Component, OnInit } from '@angular/core';
import { AuthApiService } from '../../services/auth-api.service';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-recent-survivor',
  templateUrl: './recent-survivor.component.html',
  styleUrls: ['./recent-survivor.component.css']
})
export class RecentSurvivorComponent implements OnInit {

  baseUrl: string = 'http://localhost:3000'

  survivors: any = {};

  constructor(
    private httpThang: HttpClient,
    private authThang: AuthApiService
  ) { }

  ngOnInit() {
      this.authThang.getRecentSurvivors()
        .subscribe(
          (survivorsFromApi: any[]) => {
            this.survivors = survivorsFromApi;
          }
        );//CLOSE this.postThang.getMyPosts()

  }//CLOSE ngOnInit()

}
