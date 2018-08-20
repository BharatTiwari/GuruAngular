import { Component, OnInit } from '@angular/core';
import {ImageGalleryService} from './../../shared/services/image-gallery.service';
@Component({
  selector: 'app-birthday',
  templateUrl: './birthday.component.html',
  styleUrls: ['./birthday.component.css']
})
export class BirthdayComponent implements OnInit {
    BirthDayStudentToday; BirthDayTeacherToday; BirthDayTeacherofMonth;
    constructor(private service : ImageGalleryService) { }

  ngOnInit() {
      this.loadBirthDayStudentToday();
      this.loadBirthDayTeacherToday();
      this.loadBirthDayTeacherofMonth();
    }
  loadBirthDayStudentToday() {
      this.service.getBirthDayStudentToday().subscribe(data => {          
          this.BirthDayStudentToday = data;
      })
  }
  loadBirthDayTeacherToday() {
      this.service.getBirthDayTeacherToday().subscribe(data => {
          this.BirthDayTeacherToday = data;
      })
  }
  loadBirthDayTeacherofMonth() {
      this.service.getBirthDayTeacherofMonth().subscribe(data => {
          this.BirthDayTeacherofMonth = data;
      })
  }

}
