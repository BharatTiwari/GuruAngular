import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {ImageGalleryService} from './../../shared/services/image-gallery.service';
declare var commonFile, configFile;
@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class EventsComponent implements OnInit {
    galleryImg = configFile.galleryImg;
    gallery; errorMsg;
    constructor(private service: ImageGalleryService) { }

    ngOnInit() {
        //this.service.getImages3().subscribe(data => {            
        //    this.gallery = data;
        //},
        //    error => this.errorMsg = error
        //)
    }

}
