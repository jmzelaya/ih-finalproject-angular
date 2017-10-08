import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AuthApiService } from './services/auth-api.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { LogInComponent } from './pages/log-in/log-in.component';
import { UserHomePageComponent } from './pages/user-home-page/user-home-page.component';

import { AgmCoreModule } from '@agm/core';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { FriendPageComponent } from './pages/friend-page/friend-page.component';
import { SuppliesComponent } from './pages/supplies/supplies.component';
import { RecentSurvivorsComponent } from './pages/recent-survivors/recent-survivors.component';

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    LogInComponent,
    UserHomePageComponent,
    UserPageComponent,
    FriendPageComponent,
    SuppliesComponent,
    RecentSurvivorsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA-Az-KWwgFia0wnW8YNa14evOIBojM3Fs'
    })
  ],
  providers: [AuthApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
