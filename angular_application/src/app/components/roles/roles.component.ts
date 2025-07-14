import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';


@Component({
  selector: 'app-roles',
  imports: [
    FormsModule
  ],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.scss'
})
export class RolesComponent {
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
