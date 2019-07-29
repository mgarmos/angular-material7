import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material.module';
import { PhotosComponent } from './components/photos/photos.component';
import { PhotoDialogComponent } from './components/photo-dialog/photo-dialog.component';




@NgModule({
  declarations: [
    AppComponent,
    PhotosComponent,
    PhotoDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [PhotoDialogComponent]
})
export class AppModule { }
