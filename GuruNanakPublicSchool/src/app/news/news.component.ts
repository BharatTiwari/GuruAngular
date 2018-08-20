import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {ImageGalleryService} from './../../shared/services/image-gallery.service';
declare var commonFile;
import * as $ from 'jquery';
@Component({
    selector: 'app-news',
    templateUrl: './news.component.html',
    styleUrls: ['./news.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class NewsComponent implements OnInit {
    newsNotices; errorMsg;
    constructor(private service: ImageGalleryService) {

    }
    ngOnInit() {
        this.getRecord()    
    }
    getRecord() {
        this.service.getNewsNotice().subscribe(data => {  
            debugger          
            this.newsNotices = data;                         
            commonFile.calldMainJs();
        },
            error => this.errorMsg = error
        )
    }

}
