import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

declare var configFile;
@Injectable({
  providedIn: 'root'
})
export class ImageGalleryService {
    debugger
    schoolCode = configFile.schoolCode;
    rootUrl = configFile.rootUrl
    constructor(private _http: HttpClient) { } 

    getGallery() {    
        return this._http.get<any>('http://webapi.palmboard.in/api/gallery/Photo?SchCode=fspsgn&key=jg98ATQO6XksZUmA5Ni7yw==&pg=1' );
    }
    //this.getGallery() 

    getAlbum(albumPage) {                
        return this._http.get(this.rootUrl + 'PhotoAlbums?SchCode=' + this.schoolCode + '&pg=' + albumPage ).catch(this.errorHandler);
    }
    getYears() {        
        return this._http.get(this.rootUrl+'PhotoAlbumYears?schcode=' + this.schoolCode ).catch(this.errorHandler);
    }
    searchData(type, text) {          
        text = text.split(' ').join('%20');                
        return this._http.get(this.rootUrl + 'PhotoAlbumSearch?SchCode=' + this.schoolCode + '&Type=' + type + '&Search=' + text + '&pg=1' ).catch(this.errorHandler);
    }
    getImages(albumId, imagesPage) {                
        return this._http.get(this.rootUrl + 'PhotoOfAlbum?SchCode=' + this.schoolCode + '&ID=' + albumId + '&pg=' + imagesPage ).catch(this.errorHandler)
    }    
    getNewsNotice() {        
        return this._http.get(this.rootUrl+'EventsAll?SchoolCode=' + this.schoolCode)
    }
    getAchievements(page) {        
        return this._http.get(this.rootUrl + 'AchivementAllPageWise?SchoolCode=' + this.schoolCode + '&pg=' + page ).catch(this.errorHandler)
    }
    searchAchievements(SearchBy, text, page) {        
        return this._http.get(this.rootUrl + 'AchivementPageSearch?SchoolCode=' + this.schoolCode + '&SearchBy=' + SearchBy + '&KeyToSearch=' + text + '&pg=' + page ).catch(this.errorHandler)
    }
    getTopTenAchievements() {
        
        debugger       
        return this._http.get<any>(this.rootUrl + 'AchivementOnHomePageTopTenRecords?SchoolCode=' + this.schoolCode + '&HeadingLength=' + 1 ).catch(this.errorHandler)
    }
    getBirthDayStudentToday() {        
        return this._http.get(this.rootUrl + 'BirthDayStudentToday?SchoolCode=' + this.schoolCode ).catch(this.errorHandler)
    }
    getBirthDayTeacherToday() {
        return this._http.get(this.rootUrl + 'BirthDayTeacherToday?SchoolCode=' + this.schoolCode ).catch(this.errorHandler)
    }
    getBirthDayTeacherofMonth() {
        return this._http.get(this.rootUrl + 'BirthDayTeacherofMonth?SchoolCode=' + this.schoolCode ).catch(this.errorHandler)
    }
    getNoticesTopTenRecords() {
        return this._http.get(this.rootUrl + 'NoticesOnHomePageTopTenRecords?SchoolCode=' + this.schoolCode + '&HeadingLength=' + 10 ).catch(this.errorHandler)
    }
    errorHandler(error: HttpErrorResponse) {
        debugger          
        return Observable.throw(error.message || "Server Error");
    }
}
