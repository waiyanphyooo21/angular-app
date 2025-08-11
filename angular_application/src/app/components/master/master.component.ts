import { Component } from '@angular/core';
import {RolesComponent} from '../roles/roles.component';
import {DesignationComponent} from '../designation/designation.component';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-master',
  imports: [RolesComponent, DesignationComponent, CommonModule],
  templateUrl: './master.component.html',
  styleUrl: './master.component.scss'
})
export class MasterComponent {
  currentComponents = "roles";
  changeTab(tabname: string) {
    this.currentComponents = tabname;
  }
}
