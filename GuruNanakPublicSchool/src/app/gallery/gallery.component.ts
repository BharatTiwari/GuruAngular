import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {ImageGalleryService} from './../../shared/services/image-gallery.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class GalleryComponent implements OnInit {

    gallery = [];
    errorMsg;
    constructor(private imagesService : ImageGalleryService) { }

    ngOnInit() {
            
        this.loadImg(1);
    }
    
    loadImg(num) {
        
        //this.imagesService.getImages(num).subscribe(
        //    data => {
                
        //        let arr = data.Album;
        //        for (let i = 0; i < arr.length; i++) {
        //            this.gallery.push(arr[i]);
        //        }
        //    },
        //    error => this.errorMsg = error
        //)
    }

}
