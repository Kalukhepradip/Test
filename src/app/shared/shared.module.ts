import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
// import { SidebarComponent } from './component/sidebar/sidebar.component';
import { MatDividerModule, MatToolbarModule, MatIconModule, MatButtonModule, MatMenuModule, MatListModule } from '@angular/material';
import { RouterModule } from '@angular/router';
// import { SearchPipe } from '../modules/post/search.pipe';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    // SidebarComponent,
    // SearchPipe
    
  ],
  imports: [
    CommonModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    RouterModule,
    MatListModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    // SidebarComponent
  ]
})
export class SharedModule { }
