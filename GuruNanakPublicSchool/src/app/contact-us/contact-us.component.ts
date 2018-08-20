import { Component, OnInit } from '@angular/core';
declare var commonFile: any;

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
    userModel;
    records = [];
  constructor() { }
  ngOnInit() {
      this.initializeorm()
      commonFile.myMap();
  }
  submitForm() {      
      this.records.push({ Id: this.records.length, record: this.userModel });
      alert('Record is saved')
      this.initializeorm();
  }
  initializeorm() {
      this.userModel = { name: '', address: '', mobile: '', email: '', subject: '', message: '', captcha: '' }
  }

}
