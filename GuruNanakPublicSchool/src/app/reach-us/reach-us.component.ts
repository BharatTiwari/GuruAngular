import { Component, OnInit } from '@angular/core';
declare var commonFile: any;
import * as $ from 'jquery';
@Component({
    selector: 'app-reach-us',
    templateUrl: './reach-us.component.html',
    styleUrls: ['./reach-us.component.css']
})
export class ReachUsComponent implements OnInit {
    
    
    constructor() { }
    ngOnInit() {
        
        $(document).ready(function () {
            commonFile.GetRoute();
        })
    }

    GetRoute() {
        commonFile.GetRoute();
    }

}
