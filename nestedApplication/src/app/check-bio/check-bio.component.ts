import { Component, Input } from '@angular/core';
import { AdminBioComponent } from '../admin-bio/admin-bio.component';
import { UserBioComponent } from '../user-bio/user-bio.component';
import { NgComponentOutlet } from '@angular/common';

@Component({
  selector: 'app-check-bio',
  imports: [NgComponentOutlet],
  templateUrl: './check-bio.component.html',
  styleUrl: './check-bio.component.scss'
})
export class CheckBioComponent {
@Input() user!: {name: string, isAdmin: boolean};
getBioComponent(){
  console.log(this.user.isAdmin);
  return this.user.isAdmin ? AdminBioComponent : UserBioComponent;
}
}
