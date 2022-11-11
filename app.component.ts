import { Component, OnInit } from '@angular/core';
import { orderDetails } from './data';
import { ViewChild } from '@angular/core';
import { DataUtil } from '@syncfusion/ej2-data';
import {
  EditService,
  ToolbarService,
  PageService,
  NewRowPosition,
} from '@syncfusion/ej2-angular-grids';
import {
  ChangeEventArgs,
  DropDownListComponent,
} from '@syncfusion/ej2-angular-dropdowns';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  providers: [ToolbarService, EditService, PageService],
})
export class AppComponent {
  public data: Object[] = [];
  public data1: Object[] = [];
  public customerIDDistinctData: Object[];
  public pageSettings: Object;
  public formatoptions: Object;
  public vCount: number;
  //public fields: Object = { text: 'CustomerID', value: 'CustomerID' };

  public dataApplied: { [key: string]: Object }[] = [
    { Key: 'Nilesh', Value: '6baf7ec2-8c99-4837-b83d-63a0c5cef532' },
    { Key: 'Nikunj', Value: '2d4f2675-847b-44dc-9134-f0d9195bdc7c' },
    { Key: 'Harsh', Value: 'b875de15-573b-47c2-af1b-f7a4f46a6079' },
    { Key: 'Umang', Value: '00402a2c-eb63-47f3-90ca-b46494c21914' },
    { Key: 'Karan', Value: 'f83c2c2a-d921-476a-b10d-2b9158ded9b2' },
  ];

  public fields: { [key: string]: string } = { text: 'Key', value: 'Value' };

  newAttribute: any = {};

  ngOnInit(): void {
    this.data1 = [
      {
        text: '6baf7ec2-8c99-4837-b83d-63a0c5cef532',
      },
      {
        text: 'f83c2c2a-d921-476a-b10d-2b9158ded9b2',
      },
    ];
  }

  addFieldValue() {
    this.data1.push(this.newAttribute);
    this.newAttribute = {};
    this.ngOnInit();
  }
}
