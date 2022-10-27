import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppAnalyticsComponent } from './app-analytics';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { WebAnalyticsComponent } from './web-analytics';
const routes: Routes = [
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: '', component: LoginComponent },
  { path: 'register', component: RegisterComponent, canActivate: [AuthGuard] },
  { path: 'web', component: WebAnalyticsComponent, canActivate: [AuthGuard] },
  { path: 'app', component: AppAnalyticsComponent, canActivate: [AuthGuard] },
  //Otherwise redrict to home
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
