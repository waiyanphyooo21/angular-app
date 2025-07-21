import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IDesignation } from '../../model/interface/role';

@Component({
  selector: 'app-designation',
  imports: [],
  templateUrl: './designation.component.html',
  styleUrl: './designation.component.scss'
})
export class DesignationComponent implements OnInit{
constructor(private http:HttpClient){

}
designationList:IDesignation[] = [];
ngOnInit() {
    this.getALlDesignations();
  }

getALlDesignations(){
  this.http.get("https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllDesignation").subscribe((res:any) => {
    this.designationList = res.data;
  })
}

}
