import { Component, OnInit } from '@angular/core';
import {ImageGalleryService} from './../../shared/services/image-gallery.service';
import {Router} from '@angular/router';
import * as $ from 'jquery';
declare var commonFile, configFile;
var scrollLock = false;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
    galleryImg = configFile.galleryImg;achievementsImg = configFile.achievementsImg;
    filterApplied = 0; TotalAlbum; noDataFound = 0; albumPage = 1;gallery = [];errorMsg;searchBy = '1';years;
    allSearch; AlbumTitle; year = ''; eventDate; Descriptions; text; pageInitialize = 0; TopTenAchievements;
    TopTenNotices;
    constructor(private imagesService: ImageGalleryService, private router: Router) {}
    public arr;
 
    ngOnInit(): void{
        this.imagesService.getGallery().subscribe(response => {
            
            console.log(response);
        })

        var self = this;
        this.loadAlbum();
        function loadImg() {self.loadAlbum()}
        this.loadYear();
        $(window).scroll(function () {                        
            if (!scrollLock) {    
                $('.pageLoaders').each(function () {                    
                    if (commonFile.isScrolledIntoView($(this))) {
                        $(this).children('loadmore').text('Load More');
                        if (self.filterApplied == 0) {                            
                            $('#loader').css('display', 'inline-block');
                            scrollLock = true;
                            loadImg()
                        }
                    }
                });
            }
            if (self.noDataFound != 0) { $('#loader').css('display', 'none'); $('#loadmore').text('No more Records found'); }
        });
        this.loadTopTenAchievements();
        this.loadNoticesTopTenRecords();
    }
    loadYear() {this.imagesService.getYears().subscribe(data => {this.years = data;})}
    loadAlbum() {
        if (this.noDataFound == 0) {
            this.imagesService.getAlbum(this.albumPage).subscribe(
                data => {
                    this.arr = data;                    
                    if (this.arr != null && this.arr.length != 0) {
                        this.TotalAlbum = this.arr[0].TotalAlbum;
                        $('#loader').css('display', 'none');
                        $('#loadmore').text('Load More');                        
                        for (let i = 0; i < this.arr.length; i++) {
                            this.gallery.push(this.arr[i]);
                        }       
                        this.pageInitialize++;
                        this.albumPage++;
                    }
                    else {
                        $('#loader').css('display', 'none');
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
    searchAlbum() {
        if (this.searchBy == '1') this.text = this.allSearch
        else if (this.searchBy == '2') this.text = this.AlbumTitle
        else if (this.searchBy == '3') this.text = this.year
        else if (this.searchBy == '4') {
            var d;
            if (this.eventDate != null) {
                d = new Date(this.eventDate).toLocaleString().split(',')[0];
            }
            else { d = ''}
            this.text = d;
        }
        else if (this.searchBy == '5') this.text = this.Descriptions;
        if (!this.text) {
            this.noDataFound = 0; this.albumPage = 1; this.filterApplied = 0; this.gallery = [];  this.loadAlbum();return false
        }
        this.filterApplied++;
        this.imagesService.searchData(this.searchBy, this.text).subscribe(
            data => {                
                this.arr = data;this.gallery = [];                    
                    for (let i = 0; i < this.arr.length; i++) {
                        this.gallery.push(this.arr[i]);
                    }                    
                },
                error => this.errorMsg = error
        )        
    }
    goToImages(id) {          
        this.router.navigate(['albumimages', id])
    }
    loadTopTenAchievements() {
        debugger    
        this.imagesService.getTopTenAchievements().subscribe(data => {
            debugger   
            this.TopTenAchievements = data;
            commonFile.calldMainJs();
        })
    }
    loadNoticesTopTenRecords() {
        this.imagesService.getNoticesTopTenRecords().subscribe(data => {
            this.TopTenNotices = data;
            commonFile.calldMainJs();
        })
    }
}

//export class objectModel {
//    Album;
//}