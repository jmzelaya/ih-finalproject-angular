import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthApiService } from '../../services/auth-api.service';
import { PostApiService } from '../../services/post-api.service'
import { PostInfo } from '../../interfaces/post-info';
import { RecentSurvivorComponent } from '../../components/recent-survivor/recent-survivor.component';
import { AllyApiService } from '../../services/ally-api.service'

@Component({
  selector: 'app-user-home-page',
  templateUrl: './user-home-page.component.html',
  styleUrls: ['./user-home-page.component.css']
})
export class UserHomePageComponent implements OnInit {

  posts: any[] = [];

  allyPosts = [];

  userInfo: any;

  newPost: PostInfo = {
    textContent: '',
    author: ''
  };

  errorMessage: string;

  constructor(
    private routerThang : Router,
    private httpThang: HttpClient,
    private activatedThang: ActivatedRoute,
    private authThang: AuthApiService,
    private postThang: PostApiService
  ) { }

  ngOnInit() {
    this.postThang.getMyPosts()
      .subscribe(
        (postsFromApi: any[]) => {
          this.posts = postsFromApi;
        }
      );//CLOSE this.postThang.getMyPosts()

    this.authThang.getLoginStatus()
      .subscribe(
        (loggedInInfo: any) => {
            if (loggedInInfo.isLoggedIn){
                this.userInfo = loggedInInfo.userInfo;
            }
        }//close get loginstatus
    )

  }//CLOSE ngOnInit()

  updateFeed() {
    this.postThang.getAlliesPosts()
      .subscribe(
        (allyPostsFromApi: any[]) => {
          this.posts = allyPostsFromApi;
        }
      );
  }

  receiveCow() { //should probably make this not "receiveCow() :D"
    //call service
    this.postThang.postNewPost(this.newPost)
      .subscribe(
        (fullPostDetails) => {
          console.log('New post success', fullPostDetails);
          this.posts.unshift(fullPostDetails);
          this.newPost = {
            textContent: '',
            author: ''
          };
        },

        (errorInfo) => {
          if(errorInfo.status === 400) {
            this.errorMessage = 'Validation error'
          }

          else {
            this.errorMessage = 'Unknown error. Try again later'
          }
          console.log('New Phone Error', errorInfo)
        }
      )
  }//CLOSE receiveCow()



}//CLOSE class UserHomePageComponent
