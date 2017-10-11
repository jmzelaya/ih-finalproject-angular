import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { LogInComponent } from './pages/log-in/log-in.component';
import { UserHomePageComponent } from './pages/user-home-page/user-home-page.component';
import { SupplyPageComponent } from './pages/supply-page/supply-page.component';
import { MyAlliesComponent } from './pages/my-allies/my-allies.component';
import { SupplyDetailComponent } from './pages/supply-detail/supply-detail.component';
import { UserDetailComponent } from './pages/user-detail/user-detail.component';


const routes: Routes = [
  {path: "", component: SignUpComponent},
  {path: "login", component: LogInComponent},
  {path: "user-home", component: UserHomePageComponent},
  {path: 'supplies', component: SupplyPageComponent},
  {path: 'supplies/:supplyId', component: SupplyDetailComponent},
  {path: 'my-allies', component: MyAlliesComponent},
  {path: 'my-allies/:userId', component: UserDetailComponent},
  {path: '**', component: SignUpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
