import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-first-c',
  templateUrl: './first-c.component.html',
  styleUrls: ['./first-c.component.css'],
  // tslint:disable-next-line:no-host-metadata-property
  host: {
    '(document:click)': 'onClick($event)',
  },
})
export class FirstCComponent implements OnInit {
  jsonData: any;
  checkedobj: any;
  arrayofEmails = [];
  arrayofEmails1 = [];
  data;
  count = 0;
  checkedobj1: any;
  unselIndex: number;
  comData;
  CompanyDetails;
  selectedCompanyData: any;
  abc: any;
  relatCusCode: any;

  constructor(private ser: DataServiceService) { }

  ngOnInit() {
    this.data1();
    this.getCompanyDetails();
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
      this.unselIndex = this.arrayofEmails.indexOf(obj);
      this.arrayofEmails.splice(this.unselIndex, 1);
    }
  }

  saveEmails() {
    this.arrayofEmails1 = [];
    this.count = 0;
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.arrayofEmails.length; i++) {
      if (this.count <= 9) {
        this.arrayofEmails1.push(this.arrayofEmails[i]);
        this.count++;
      } else {
        alert('Emails are more than 10...Select only few.');
        // this.count = 0;
        this.arrayofEmails1 = [];
        break;
      }
    }
  }

  getCompanyDetails() {
    this.ser.getCompanyData().subscribe(res => {
    this.comData = res;
    this.CompanyDetails = this.comData;
    });
  }


  selectedCompany(data) {
    this.selectedCompanyData = data;
    // tslint:disable-next-line:prefer-for-of
    for (let index = 0; index < this.CompanyDetails.length; index++) {
      if (Number(this.selectedCompanyData) === this.CompanyDetails[index].comId) {
        this.abc = this.CompanyDetails[index];
        this.relatCusCode = this.abc.relatCusCode;
      }
    }
  }

  onClick(event) {
    
   }

}
