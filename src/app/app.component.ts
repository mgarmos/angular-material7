import { Component, OnInit } from '@angular/core';

import { PhotosService } from './services/photos.service';

import {Photo} from './models/photo'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent implements OnInit {

  photos: Photo[] = [];
  albumsId: number[] = [ 1, 2, 3];


  constructor( public photoService: PhotosService) {}


  ngOnInit(): void {
    this.photoService.getPhotos()
      .subscribe(
        photos => console.log(photos),
        err => console.log(err)
      );
  }

}
