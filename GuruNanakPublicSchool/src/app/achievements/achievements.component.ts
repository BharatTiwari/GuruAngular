import { Component, OnInit } from '@angular/core';
import {ImageGalleryService} from './../../shared/services/image-gallery.service';
import {Router} from '@angular/router';
import * as $ from 'jquery';
declare var commonFile: any;
var scrollLock = false;
@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.css']
})
export class AchievementsComponent implements OnInit {
    achievements = []; detailedAchievement = {};
    filterApplied = 0; TotalAchievements; noDataFound = 0; page = 1; errorMsg; searchBy = '1'; years;
    allSearch; AlbumTitle; year = ''; eventDate; Descriptions; text; pageInitialize = 1;
    constructor(private service: ImageGalleryService) { }

    ngOnInit() {        
        this.loadAchievements();
        var self = this;
        
        function loadImg() { self.loadAchievements() }
        
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
    }
    arr;
    searchAlbum() {
        
        if (this.searchBy == '1') this.text = this.allSearch
        else if (this.searchBy == '2') this.text = this.AlbumTitle
        else if (this.searchBy == '3') this.text = this.year
        else if (this.searchBy == '4') {
            var d;
            if (this.eventDate != null) {
                d = new Date(this.eventDate).toLocaleString().split(',')[0];
            }
            else { d = '' }
            this.text = d;
        }
        else if (this.searchBy == '5') this.text = this.Descriptions;
        if (!this.text) {
            this.noDataFound = 0; this.page = 1; this.filterApplied = 0; this.achievements = [];
            this.loadAchievements();
            return false
        }
        
        this.filterApplied++;
        this.service.searchAchievements(this.searchBy, this.text, this.page).subscribe(
            data => {
                
                this.arr = data;
                this.achievements = [];
                for (let i = 0; i < this.arr.length; i++) {
                    this.achievements.push(this.arr[i]);
                }
            },
            error => this.errorMsg = error
        )
    }
    getDetail(id) {
        for (let i = 0; i < this.achievements.length; i++) {
            if (id == this.achievements[i].AId) {
                this.detailedAchievement = Object.assign({}, this.achievements[i]);
                break;
            }
        }
        $(window).scrollTop(0)
    }
  loadAchievements() {
      if (this.noDataFound == 0) {
          this.service.getAchievements(this.pageInitialize).subscribe(
              data => {
                  this.arr = data;
                  if (this.arr != null && this.arr.length != 0) {
                      this.TotalAchievements = this.arr[0].Total;
                      $('#loader').css('display', 'none');
                      $('#loadmore').text('Load More');
                      for (let i = 0; i < this.arr.length; i++) {
                          this.achievements.push(this.arr[i]);
                      }                      
                      this.detailedAchievement = Object.assign({}, this.achievements[0]);
                      this.pageInitialize++;
                      this.page++;
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
}
