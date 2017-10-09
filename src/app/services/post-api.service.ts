import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { PostInfo } from '../interfaces/post-info'

@Injectable()
export class PostApiService {

  baseUrl: string = 'http://localhost:3000';

  constructor(
    private httpThang: HttpClient
  ) { }

  // GET /api/phones
  getMyPosts() {
    return this.httpThang.get(
      this.baseUrl + '/api/myposts',
      {withCredentials: true}
    );
  }//CLOSE getMyPosts()

  postNewPost(postFields: PostInfo){
    return this.httpThang.post(
      this.baseUrl + '/api/phones',
      postFields,
      { withCredentials: true }
    );
  }//close postNewPost()
}//CLOSE class PostApiService
