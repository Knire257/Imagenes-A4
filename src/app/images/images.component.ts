import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {
  public img = new Image();
  constructor() { }

  /*while onInit this sets the img path*/
  ngOnInit(): void {
    this.img.src = '../assets/images/Apex-logo.png';
    console.log(this.isHorizontal());
  }

  /*This method gets the original size of the image*/
  getDims(): any{
    let imgWidth = this.img.width;
    let imgHeigth = this.img.height;
    return [imgWidth,imgHeigth];
  }

  /*This method evals if the image is horizontal or vertical*/
  isHorizontal(): any{
    let originalDims = this.getDims();
    if (originalDims[0] > originalDims[1]){
      return true;
    }else{
      return false;
    }
  }

  /*this method crops the image*/
  cropImage():any{

  }

}
