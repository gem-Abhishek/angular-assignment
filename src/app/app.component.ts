import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import {
  ColDef,
  ColGroupDef,
  GridApi,
  GridReadyEvent,
} from 'ag-grid-community';
import frontendData from '../app/frontend.json';
import { ProjectAllocationCustomisationComponent } from './project-allocation-customisation/project-allocation-customisation.component';
import { SkillspopupComponent } from './skillspopup/skillspopup.component';

interface Frontend{
  Sno: Number;
  Name:String;
  Skills:String;
  "Project Allocation":String;
  Comment:String;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-assignment';
  private gridApi!: GridApi;
  columnApi:any;
  public frontendColDefs: (ColDef | ColGroupDef)[]=[
    {
    headerName:'Frontend Table',
    children:[
    {headerName:"S.No",field:'Sno'},
    {headerName:"Name",field:'Name'},
    {headerName:"Skills",field:'Skills',cellRenderer:SkillspopupComponent},
    {headerName:"Project Allocation",field:'Project Allocation',cellRenderer: ProjectAllocationCustomisationComponent},
    {headerName:"Comment",field:'Comment',editable:true,
  },
    ],
  },
  ];
  public defaultColDef: ColDef = {
    enableRowGroup: true,
    enablePivot: true,
    enableValue: true,
    sortable: true,
    filter: true,
    resizable: true,
  };
  public frontendRowData:Frontend[]=frontendData;
  public domLayout: 'normal' | 'autoHeight' | 'print' = 'autoHeight';
  public popupParent: HTMLElement = document.body;

  OnGridReady(params: { api: any; columnApi: any; }){
    this.gridApi=params.api;
    this.columnApi=params.columnApi;
  }

  public BackendColDefs: (ColDef | ColGroupDef)[]=[
    {
    headerName:'Backend Table',
    children:[
    {headerName:"S.No",field:'Sno'},
    {headerName:"Name",field:'Name'},
    {headerName:"Skills",field:'Skills',cellRenderer:SkillspopupComponent},
    {headerName:"Project Allocation",field:'Project Allocation',cellRenderer: ProjectAllocationCustomisationComponent},
    {headerName:"Comment",field:'Comment', editable:true,
  },
    ],
  },
  ];
  public BackendRowData:Frontend[]=frontendData;
  // public projectAllocationColDefs: (ColDef | ColGroupDef)[]=[
  //   {
  //   headerName:'Project Allocation Table',
  //   children:[
  //   {headerName:"S.No",field:'Sno'},
  //   {headerName:"Name",field:'Name'},
  //   {headerName:"Skills",field:'Skills'},
  //   {headerName:"Project Allocation",field:'Project Allocation'},
  //   {headerName:"Comment",field:'Comment',editable:true,
  // },
  //   ],
  // },
  // ];
  // public projectAllocationRowData:Frontend[]=[];
  
  receiveMessage($event: any){
    console.log($event);
  }
  
  getRowId=(params: { data: { Sno: any; }; })=>params.data.Sno;

  onRemoveSelected() {
    var selectedRowData = this.gridApi.getSelectedRows();
    this.gridApi.applyTransaction({ remove: selectedRowData });
  }

  

  parentFunction(data: any){
    console.log(data);
    console.log("%%%");
  }

  public rowSelection='single';
  onSelectionChanged() {
    const selectedRows = this.gridApi.getSelectedRows();
    console.log(this.gridApi.getSelectedRows());
  }
}


  
  
  