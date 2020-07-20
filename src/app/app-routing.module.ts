import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login-page/login/login.component';
import { PersonalDetailsComponent } from './details-page/personal-details/personal-details.component';
import { ProfessionalDetailsComponent } from './details-page/professional-details/professional-details.component';
import { DefaultComponent } from './layout/default/default.component';
import { DashboardComponent } from './module/dashboard/dashboard.component';
import { PostsComponent } from './module/posts/posts.component';

const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    children:[{
      path:'',
      component: DashboardComponent
    },
    {
      path:'summery',
      component: PostsComponent
    }
  
  ]
  // },
  // {
  //   path: 'login',
  //   component: LoginComponent, pathMatch: 'full'
  // },
  // {
  //   path: 'personalinfo',
  //   component: PersonalDetailsComponent,
  // },
  // {
  //   path: 'professionalinfo',
  //   component: ProfessionalDetailsComponent,
  }];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
