import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { PostInfo } from '../interfaces/post-info'

@Injectable()
export class PostApiService {

  baseUrl: string = 'http://localhost:3000';

  constructor(
    private httpThang: HttpClient
  ) { }

}

// GET /api/phones
 getPosts() {
   return this.httpThang.get(
     this.baseUrl + '/api/phones'
   );
 }
