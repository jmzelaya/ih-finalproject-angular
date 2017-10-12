import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AuthApiService } from './services/auth-api.service';
import { PostApiService } from './services/post-api.service';
import { AllyApiService } from './services/ally-api.service';
import { SupplyApiService } from './services/supply-api.service'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { LogInComponent } from './pages/log-in/log-in.component';
import { UserHomePageComponent } from './pages/user-home-page/user-home-page.component';

import { AgmCoreModule } from '@agm/core';
import { RecentSurvivorComponent } from './components/recent-survivor/recent-survivor.component';
import { SupplyPageComponent } from './pages/supply-page/supply-page.component';
import { MyAlliesComponent } from './pages/my-allies/my-allies.component';
import { SupplyDetailComponent } from './pages/supply-detail/supply-detail.component';
import { UserDetailComponent } from './pages/user-detail/user-detail.component';
import { FileUploadModule } from 'ng2-file-upload';


@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    LogInComponent,
    UserHomePageComponent,
    RecentSurvivorComponent,
    SupplyPageComponent,
    MyAlliesComponent,
    SupplyDetailComponent,
    UserDetailComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FileUploadModule
  ],
  providers: [
    AuthApiService,
    PostApiService,
    AllyApiService,
    SupplyApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
