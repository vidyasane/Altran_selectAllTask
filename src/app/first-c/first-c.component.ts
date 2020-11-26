import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-first-c',
  templateUrl: './first-c.component.html',
  styleUrls: ['./first-c.component.css']
})
export class FirstCComponent implements OnInit {
  jsonData: any;
  checkedobj: any;
  arrayofEmails = [];
  arrayofEmails1 = [];
  data;
  count = 0;
  checkedobj1: any;

  constructor(private ser: DataServiceService) { }

  ngOnInit() {
    this.data1();
  }

  data1() {
    this.ser.getData().subscribe(res => {
      this.jsonData = res;
      this.data = this.jsonData;
    });
  }

  selectAll(event) {
    const checked = event.target.checked;
    this.checkedobj = checked;
    if (this.checkedobj === true) {
    for (let i = 0; i < this.data.length; i++) {
      if (i <= this.data.length) {
        this.data[i].flag = checked;
      }
    }

    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i].flag === true) {
        this.arrayofEmails.push(this.data[i]);
      }
    }
  } else {
    for (let i = 0; i < this.data.length; i++) {
      if (i <= this.data.length) {
        this.data[i].flag = checked;
      }
    }
    this.arrayofEmails = [];
  }

  }

  singleSelect(event, obj) {
    const checked = event.target.checked;
    this.checkedobj1 = checked;
    if (this.checkedobj1 === true) {
    this.arrayofEmails.push(obj);
    } else {
      this.arrayofEmails.pop();
    }
  }

  saveEmails() {
    this.arrayofEmails1 = [];
    this.count = 0;
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.arrayofEmails.length; i++) {
      if (this.count <= 9) {
        this.arrayofEmails1.push(this.data[i]);
        this.count++;
      } else {
        alert('dsgfhdgfhj');
        // this.count = 0;
        this.arrayofEmails1 = [];
        break;
      }
    }
  }

}
