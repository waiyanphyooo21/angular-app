import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ParentComponent } from './parent/parent.component';
import { AdminBioComponent } from './admin-bio/admin-bio.component';
import { UserBioComponent } from './user-bio/user-bio.component';
import { CheckBioComponent } from "./check-bio/check-bio.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ParentComponent, CheckBioComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'nestedApplication';
  user = {"name": "Admin", "isAdmin": false};
  isValid = false;
  admin(){
    this.user.isAdmin = true;
    this.isValid = true;
  }
  userbio(){
    this.user.isAdmin = false;
    this.isValid = true;
  }
}
