import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthApiService } from '../../services/auth-api.service';
import { PostApiService } from '../../services/post-api.service'
import { PostInfo } from '../../interfaces/post-info';

@Component({
  selector: 'app-user-home-page',
  templateUrl: './user-home-page.component.html',
  styleUrls: ['./user-home-page.component.css']
})
export class UserHomePageComponent implements OnInit {

  posts: any[] = [];

  newPost: PostInfo = {
    textContent: ''
  };

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
      );
  }



}
