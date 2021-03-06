import { Component, OnInit } from '@angular/core';
import { AuthApiService } from '../../services/auth-api.service';
import { HttpClient } from '@angular/common/http';
import { AllyApiService } from '../../services/ally-api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { PostApiService } from '../../services/post-api.service';

@Component({
  selector: 'app-recent-survivor',
  templateUrl: './recent-survivor.component.html',
  styleUrls: ['./recent-survivor.component.css']
})
export class RecentSurvivorComponent implements OnInit {

  baseUrl: string = 'http://localhost:3000'

  survivors: any = [];

  constructor(
    private httpThang: HttpClient,
    private authThang: AuthApiService,
    private allyThang: AllyApiService,
    private activatedThang: ActivatedRoute,
    private postThang: PostApiService
  ) { }

  ngOnInit() {
      this.authThang.getRecentSurvivors()
        .subscribe(
          (survivorsFromApi: any[]) => {
            this.survivors = survivorsFromApi;
          }
        );//CLOSE subscribe() getRecentSurvivors()
  }//CLOSE ngOnInit()


  addAlly(cow){
        this.allyThang.addAlly(cow)
          .subscribe(
            (theAllyFromApi) => {
                  console.log("success");
            },

          );

  }//CLOSE addAlly()


}
