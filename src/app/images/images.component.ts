import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {

  /* Variables publicas que serán usadas en los distintos métodos*/
  public img = new Image();
  public imageWidth: any;
  public imageHeight: any;

  /*Edit this array to change the image*/
  public imagePaths = ['../assets/images/1.png', '../assets/images/2.jpg', '../assets/images/3.png', '../assets/images/4.jpg'];
  public imageWidths = [];
  public imageHeights = [];
  public imageOrientation = [];
  constructor() { }

  /*while onInit this sets the img path*/
  ngOnInit(): void {
    this.resizeImage();
  }

  /*this method will determine if the image is horizontal or vertical*/
  setOrientation(path:any): any{
    let image = new Image();
    image.src = path
    if (image.width > image.height) {
      return "horizontal";
    } else {
      return "vertical";
    }
  }

  /*This method gets the original size of the image*/
  getDims(): any {
    let imgWidth = this.img.width;
    let imgHeight = this.img.height;
    return [imgWidth, imgHeight];
  }

  /*This method evals if the image is horizontal or vertical*/
  isHorizontal(): any {
    let originalDims = this.getDims();
    if (originalDims[0] > originalDims[1]) {
      return true;
    } else {
      return false;
    }
  }

  /*this method crops the image*/
  cropImage(): any {
    let imgSize = this.getDims();
    let A4Dims = [1123, 796];
    let imgAspectRatio = imgSize[0] / imgSize[1];
    let imgNewDims = [];

    /*If the image is bigger than a A4 paper sheet, it will resize it*/
    let bigImage = false;

    /*a/b=imgAspectRatio*/
    let new_width;
    let new_height;

    new_height = Math.ceil(A4Dims[0] / imgAspectRatio);
    new_width = Math.ceil(imgAspectRatio * A4Dims[1]);

    if (this.isHorizontal()) {
      if (imgSize[0] > A4Dims[0] || imgSize[1] > A4Dims[1]) {
        bigImage = true;
      }
    } else {
      if (imgSize[0] > A4Dims[1] || imgSize[1] > A4Dims[0]) {
        bigImage = true;
      }
    }

    if (bigImage) {
      if (new_width > A4Dims[0]) {
        new_width = Math.ceil(imgAspectRatio * new_height);
        if (new_width > A4Dims[0]) {
          new_width = new_width - (new_width - A4Dims[0]);
          new_height = Math.ceil(new_width / imgAspectRatio);
        }
      } else if (new_height > A4Dims[1]) {
        new_height = Math.ceil(new_width / imgAspectRatio);
        if (new_height > A4Dims[1]) {
          new_height = new_height - (new_height - A4Dims[1]);
          new_width = Math.ceil(imgAspectRatio * new_height);
        }
      } else {
        new_width = imgSize[0];
        new_height = imgSize[1];
      }
    } else {
      new_width = imgSize[0];
      new_height = imgSize[1];
    }
    imgNewDims = [new_width, new_height];
    console.log(new_width, new_height, "viejos", imgSize)
    return imgNewDims;
  }

  /*this method will call the others and paste the image*/
  resizeImage(): void {
    for (let path of this.imagePaths){
      console.log(path);
      this.img.src = path;
      let newSize = this.cropImage();
      this.imageWidth = newSize[0];
      this.imageHeight = newSize[1];
      /*console.log(this.imageWidth, this.imageHeight);*/
      this.imageWidths = this.imageWidths.concat(newSize[0]);
      this.imageHeights = this.imageHeights.concat(newSize[1]);
      this.imageOrientation = this.imageOrientation.concat(this.setOrientation(path));
    }
    console.log(this.imageWidths)
    console.log(this.imageHeights)

  }
}
