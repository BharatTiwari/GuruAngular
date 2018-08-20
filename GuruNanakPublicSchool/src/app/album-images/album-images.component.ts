import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ImageGalleryService} from './../../shared/services/image-gallery.service';
import * as $ from 'jquery';
declare var commonFile, configFile;
var scrollLock = false;
@Component({
    selector: 'app-album-images',
    templateUrl: './album-images.component.html',
    styleUrls: ['./album-images.component.css']
})

export class AlbumImagesComponent implements OnInit {
    galleryImg = configFile.galleryImg;
    images = []; imagesPage = 1; noDataFound = 0; errorMsg; albumId;
    constructor(private imagesService: ImageGalleryService, private router: ActivatedRoute) { }
    ngOnInit() {
        var self = this;
        this.albumId = parseInt(this.router.snapshot.paramMap.get('id'));
        this.loadImages(this.albumId, this.imagesPage);
        function loadImg() { self.loadImages(self.albumId, self.imagesPage) }
        $(window).scroll(function () {
            if (!scrollLock) {
                $('.pageLoaders').each(function () {
                    if (commonFile.isScrolledIntoView($(this))) {
                        $(this).children('loadmore').text('Load More');
                        $('#loader').css('display', 'inline-block');
                        debugger
                        scrollLock = true;
                        loadImg()
                    }
                });
            }
            if (self.noDataFound != 0) { $('#loader').css('display', 'none'); $('#loadmore').text('No more Records found'); }
        });
    }
    public arr;
    loadImages(albumId, imagesPage) {
        if (this.noDataFound == 0) {
            this.imagesService.getImages(albumId, imagesPage).subscribe(
                data => {
                    $('#loader').css('display', 'none');
                    this.arr = data;
                    if (this.arr != null && this.arr.length != 0) {
                        $('#loadmore').text('Load More');
                        for (let i = 0; i < this.arr.length; i++) {
                            this.images.push(this.arr[i]);
                        }   
                        debugger                    
                        //$('.masonry-grid').attr('style', '');
                        commonFile.calldMainJs();
                        this.imagesPage++;
                    }
                    else {
                        $('#loadmore').text('No more Records found');
                        this.noDataFound++;
                    }
                    setTimeout(function () {
                        scrollLock = false;
                    }, 1000)
                },
                error => this.errorMsg = error
            )
        }
    }

}
