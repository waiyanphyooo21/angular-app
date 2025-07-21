import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {IRole} from '../../model/interface/role';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-roles',
  imports: [
    FormsModule, CommonModule
  ],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.scss'
})
export class RolesComponent implements OnInit{

  rolelist:IRole[] = [];

  ngOnInit() {

  }

  getALlRoles(){
    this.http.get("https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllRoles").subscribe((res:any) => {
      this.rolelist = res.data;
    })
  }







  //api
  constructor(private http:HttpClient) {

  }

  //old
  firstName: string = 'John';
  angularVersion: number = 19;
  currentDate: Date = new Date();
  selectedType = "checkbox";
  selectedCity: "" | undefined;
  showWelcomerAlert(){
    alert(`Welcome to Angular ${this.angularVersion} Development!`)
  }

  showMessage(message: string){
    alert(message)
  }

}
