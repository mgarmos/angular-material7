import { Component, OnInit } from '@angular/core';
import { PhotosService } from 'src/app/services/photos.service';
import { Photo } from 'src/app/models/photo';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  photos: Photo[] = [];

  constructor(public photoService: PhotosService) { }

  ngOnInit(): void {
    this.photoService.getPhotos()
      .subscribe(photos => {console.log(photos); this.photos =  photos; }, 
      err => alert('Error al intentar cargar los datos\nCrear pantalla modal: ' + err));
  }

  openDialog() {
    alert('Implementar pantalla modal');
  }

}
