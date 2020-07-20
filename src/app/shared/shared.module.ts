import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadreComponent } from './component/headre/headre.component';
import { FooterComponent } from './component/footer/footer.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { MatDividerModule, MatToolbarModule, MatIconModule, MatButtonModule, MatMenuModule, MatLineModule, MatListModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { AreaComponent } from './widgets/area/area.component';
import { CardComponent } from './widgets/card/card.component';
import { PieComponent } from './widgets/pie/pie.component';
// import{FLexLayoutModule} from'@angular/flex-layout'
// import { HighchartsChartModule } from 'highcharts-angular';

@NgModule({
  declarations: [
    HeadreComponent,
    FooterComponent,
    SidebarComponent,
    AreaComponent,
    CardComponent,
    PieComponent
    
  ],
  imports: [
    CommonModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    // FLexLayoutModule,
    MatMenuModule,
    MatListModule,
    RouterModule,
    // HighchartsChartModule 
  ],
  exports:[
    HeadreComponent,
    FooterComponent,
    SidebarComponent,
    AreaComponent,
    CardComponent,
    PieComponent
  ]
})
export class SharedModule { }
