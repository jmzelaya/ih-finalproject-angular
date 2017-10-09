import { Component, OnInit } from '@angular/core';
import { PostApiService } from '../../services/post-api.service';
import { AuthApiService } from '../../services/auth-api.service';

import { PostInfo } from '../../interfaces/post-info'


@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  posts: any[] = [];

  constructor(
    private postThang: PostApiService,
    private authThang: AuthApiService
  ) { }

  ngOnInit() {
    this.postThang.getPosts()
      .subscribe(
        (postsFromApi: any[]) => {
          this.posts = postsFromApi;
        }
      );//CLOSE getPosts()
  }

}
