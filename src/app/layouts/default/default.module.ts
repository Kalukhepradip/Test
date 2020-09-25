import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from 'src/app/module/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { PostComponent } from 'src/app/modules/post/post.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatSidenavModule, MatDividerModule } from '@angular/material';
import { ContactPipe } from 'src/app/module/dashboard/contact.pipe';
@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    PostComponent,
    ContactPipe


  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatDividerModule,
    CommonModule,
    FormsModule,
  ]
})
export class DefaultModule { }
