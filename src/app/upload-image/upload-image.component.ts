import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { ImageService } from './image.service';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.css']
})

export class UploadImageComponent implements OnInit {

  public files: any;
  profiledata;
  fileToUpload: File = null;

  constructor( private imageService: ImageService) { }

  ngOnInit() {
  }

  processFile(files: FileList) {
    console.log(files);
    this.fileToUpload = files.item(0);

    this.imageService.uploadFile(this.fileToUpload);
    // console.log(this.fileToUpload);
    // tslint:disable-next-line:max-line-length
    // $('.drop-zone').css({'background-image': 'url(' + window.URL.createObjectURL(files[0]) + ')' , 'background-position': 'center', 'background-size': 'cover' });
  }
}
