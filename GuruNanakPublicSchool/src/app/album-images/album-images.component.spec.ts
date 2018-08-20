import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumImagesComponent } from './album-images.component';

describe('AlbumImagesComponent', () => {
  let component: AlbumImagesComponent;
  let fixture: ComponentFixture<AlbumImagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlbumImagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
