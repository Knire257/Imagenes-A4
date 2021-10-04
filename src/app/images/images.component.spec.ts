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

  it('the method getDims must been called', ()=>{
    let calledmethod = spyOn(component, 'getDims');
    expect(calledmethod).toHaveBeenCalled();
  })

  it('the method isHorizontal must been called', ()=>{
    let calledmethod = spyOn(component, 'isHorizontal');
    expect(calledmethod).toHaveBeenCalled();
  })

  it('the method isHorizontal must be true', ()=>{
    expect(component.isHorizontal()).toBeTruthy();
  })
});
