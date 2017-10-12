import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthApiService } from '../../services/auth-api.service';
import { PostApiService } from '../../services/post-api.service'
import { PostInfo } from '../../interfaces/post-info';
import { RecentSurvivorComponent } from '../../components/recent-survivor/recent-survivor.component';
import { AllyApiService } from '../../services/ally-api.service'
import { FileUploader } from 'ng2-file-upload';
import { DatePipe } from '@angular/common';
import { environment } from '../../../environments/environment';


@Component({
  selector: 'app-user-home-page',
  templateUrl: './user-home-page.component.html',
  styleUrls: ['./user-home-page.component.css']
})
export class UserHomePageComponent implements OnInit {

  baseUrl: string = environment.apiUrl;

  myUploader =
  new FileUploader(
    {
      method: 'POST',
      url: this.baseUrl + '/api/posts',
      itemAlias: 'postImage'
    }
  );

  imageDomain = this.baseUrl;
  posts: any[] = [];

  allyPosts = [];

  userInfo: any;

  newPost: PostInfo = {
    textContent: '',
    postImage: '',
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
    this.authThang.getLoginStatus()
    .subscribe(
      (loggedInInfo: any) => {
        if (loggedInInfo.isLoggedIn){
          this.userInfo = loggedInInfo.userInfo;
        }
      }//close get loginstatus
    )

    this.postThang.getMyPosts()
      .subscribe(
        (postsFromApi: any[]) => {
          this.posts = postsFromApi;
        }
      );//CLOSE this.postThang.getMyPosts()


    this.postThang.getAlliesPosts()
      .subscribe(
        (allyPostsFromApi: any[]) => {
          this.posts = allyPostsFromApi;
        }
      );


  }//CLOSE ngOnInit()


  receiveCow(){
    if (this.myUploader.getNotUploadedItems().length > 0) {
        this.savePhoneWithImage();
    }

    else {
        this.savePhoneNoImage();
    }
  }

  savePhoneWithImage() {
      this.myUploader.onBuildItemForm = (item, form) => {
          form.append('textContent', this.newPost.textContent);
      };

      this.myUploader.onSuccessItem = (item, response) => {
          const fullPostDetails = JSON.parse(response);
          console.log('New post success', fullPostDetails);
          this.posts.unshift(fullPostDetails);
          this.errorMessage = '';
          this.newPost = {
            textContent: '',
            postImage: '',
            author: ''
          };
      };

      this.myUploader.onErrorItem = (item, response) => {
          console.log('New post error', response);

          this.errorMessage = 'Unknown error. Try again later.'
      };

      this.myUploader.uploadAll();
  }

  savePhoneNoImage() {
      this.postThang.postNewPost(this.newPost)
        .subscribe(
          (fullPostDetails) => {
              console.log('New post success', fullPostDetails);
               this.posts.unshift(fullPostDetails);


              this.errorMessage = '';
              this.newPost = {
                textContent: '',
                author: '',
                postImage: '',
              };
          },

          (errorInfo) => {
              console.log('New post error', errorInfo);

              if (errorInfo.status === 400) {
                  this.errorMessage = 'Validation error.';
              }
              else {
                  this.errorMessage = 'Unknown error. Try again later.'
              }
          }
        );
  }


  // receiveCow() { //should probably make this not "receiveCow() :D"
  //   //call service
  //   this.postThang.postNewPost(this.newPost)
  //     .subscribe(
  //       (fullPostDetails) => {
  //         console.log('New post success', fullPostDetails);
  //         this.posts.unshift(fullPostDetails);
  //         this.newPost = {
  //           textContent: '',
  //           postImage: '',
  //           author: ''
  //         };
  //       },
  //
  //       (errorInfo) => {
  //         if(errorInfo.status === 400) {
  //           this.errorMessage = 'Validation error'
  //         }
  //
  //         else {
  //           this.errorMessage = 'Unknown error. Try again later'
  //         }
  //         console.log('New Phone Error', errorInfo)
  //       }
  //     )
  // }//CLOSE receiveCow()



}//CLOSE class UserHomePageComponent
