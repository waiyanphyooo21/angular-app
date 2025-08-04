// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-home',
//   imports: [],
//   templateUrl: './home.component.html',
//   styleUrl: './home.component.scss'
// })
// export class HomeComponent {

// }

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // ✅ Import this

@Component({
  selector: 'app-home',
  standalone: true, // ✅ Required for standalone component
  imports: [FormsModule], // ✅ Add FormsModule here
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  // keyUpHandler(){
  //   console.log('user pressed the key!');
  // }

  keyUpHandler(event: KeyboardEvent){
    console.log('user press the '+event.key+' key!');
  }

  //code
  email: string = '';
  password: string = '';

  login() {
    console.log('Email:', this.email);
    console.log('Password:', this.password);
  }
}

