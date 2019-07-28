import { Component, OnInit } from '@angular/core';

import { PhotosService } from './services/photos.service';

import {Photo} from './models/photo'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {

  
  albumsId: number[] = [ 1, 2, 3];


  constructor( public photoService: PhotosService) {}




}
