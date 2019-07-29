import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

import { PhotosService } from './services/photos.service';
import {Photo} from './models/photo';
import { PhotoDialogComponent } from './components/photo-dialog/photo-dialog.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {

  albumsId: number[] = [ 1, 2, 3];


  constructor( public photoService: PhotosService, public dialog: MatDialog) {}

  openDialog() {
    console.log("... abriendo el dialogo");
    let dialogRef = this.dialog.open(PhotoDialogComponent);
  }




}
