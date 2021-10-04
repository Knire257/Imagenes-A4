import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagesComponent } from './images.component';

describe('ImagesComponent', () => {
  let component: ImagesComponent;
  let fixture: ComponentFixture<ImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('the method getDims must return an array with the width and height of the image', ()=>{
    expect(component.getDims()).toHaveSize(2);
  });

  it('the method cropImage must return an array with the new width and new height of the image', ()=>{
    expect(component.cropImage()).toHaveSize(2);
  });
});
