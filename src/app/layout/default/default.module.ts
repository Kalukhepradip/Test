import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from 'src/app/module/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { PostsComponent } from 'src/app/module/posts/posts.component';
import { SharedModule } from 'src/app/shared/shared.module';
import {  MatSidenavModule, MatDividerModule, MatCardModule, MatIconModule, MatTableModule } from '@angular/material';
import {MatTabsModule} from '@angular/material/tabs';
import {MatGridListModule} from '@angular/material/grid-list';
// import { FlexLayoutModule } from '@angular/flex-layput'

@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    PostsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatTabsModule,
    MatDividerModule,
    // FlexLayoutModule,
    MatCardModule,
    MatIconModule,
    MatTableModule,
    MatGridListModule,
  ],
  // entryComponents: [
  //   ProfileComponent
  // ]
})
export class DefaultModule { }
