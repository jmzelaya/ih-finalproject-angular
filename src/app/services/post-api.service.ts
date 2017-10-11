import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { PostInfo } from '../interfaces/post-info'

@Injectable()
export class PostApiService {

  baseUrl: string = 'http://localhost:3000';

  constructor(
    private httpThang: HttpClient
  ) { }

  // GET /api/posts
  getMyPosts() {
    return this.httpThang.get(
      this.baseUrl + '/api/myposts',
      {withCredentials: true}
    );
  }//CLOSE getMyPosts()

  postNewPost(postFields: PostInfo){
    console.log(postFields);
    return this.httpThang.post(
      this.baseUrl + '/api/posts',
      postFields,
      { withCredentials: true }
    );
  }//CLOSE postNewPost()

  //GET /api/posts/ally
  getAlliesPosts() {
    return this.httpThang.get(
      this.baseUrl + '/api/posts/ally',
      {withCredentials: true}
    )
  }//CLOSE getAlliesPosts()

}//CLOSE class PostApiService
