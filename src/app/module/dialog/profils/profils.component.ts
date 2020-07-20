import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-profils',
  templateUrl: './profils.component.html',
  styleUrls: ['./profils.component.css']
})
export class ProfilsComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef<ProfilsComponent>) { }
facebook:string="assets/facebook.jpg";
twitter:string="assets/twitter.jpg"
instagram:string="assets/Insta.jpg"
linkdin:string="assets/linkdin.png"
youtube:string="assets/youtube.jpg"


  ngOnInit() {
  }

}
