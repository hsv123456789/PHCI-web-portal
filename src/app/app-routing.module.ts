import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppAnalyticsComponent } from './app-analytics';
import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { WebAnalyticsComponent } from './web-analytics';
const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'',component: LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'web',component:WebAnalyticsComponent},
  {path:'app',component:AppAnalyticsComponent},
  //Otherwise redrict to home 
  {path:'**',redirectTo:''}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
