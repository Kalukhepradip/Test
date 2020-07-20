import { Component, OnInit } from '@angular/core';
import { ProfilsComponent } from '../dialog/profils/profils.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  disableClose = true;
  constructor( public dialog: MatDialog,) { }

  ngOnInit() {
  }
  addProfile() {
    const dialogRef = this.dialog.open(ProfilsComponent, {
      disableClose: true,
      height: 'auto',
      width: '300px',
      data: {}
    });
}
}
