import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import{Routes, RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatToolbarModule,
  MatMenuModule,
  MatIconModule,
  MatButtonModule,
  MatTableModule,
  MatDividerModule,
  MatProgressSpinnerModule,
  MatInputModule,
  MatCardModule,
  MatSlideToggleModule,
  MatCheckboxModule,
  MatSelectModule,
  MatOptionModule} from '@angular/material';
import { DefaultModule } from './layouts/default/default.module';
import { AppRoutingModule } from './app-routing.module';
// import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
   
    
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatInputModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatDividerModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatOptionModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    FormsModule,
    MatCheckboxModule,
    // RouterModule.forRoot(appRoutes),
    DefaultModule,
    AppRoutingModule,
    // FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
  ]
})
export class AppModule { }
