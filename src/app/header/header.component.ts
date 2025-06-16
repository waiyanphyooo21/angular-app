// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { RouterLink } from '@angular/router';
// import { Router, NavigationEnd } from '@angular/router';

// @Component({
//   selector: 'app-header',
//   standalone: true,
//   imports: [CommonModule, RouterLink, ],
//   templateUrl: './header.component.html',
//   styleUrls: ['./header.component.scss']
// })
// export class HeaderComponent {
//   currentRoute: string = '';

//   constructor(private router: Router) {
//     this.router.events.subscribe((event) => {
//       if (event instanceof NavigationEnd) {
//         this.currentRoute = event.url;
//       }
//     });
//   }

//   isActive(route: string): boolean {
//     return this.currentRoute === route;
//   }
// }

import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  currentRoute = '';

  constructor(router: Router) {
    router.events.subscribe(e => {
      if (e instanceof NavigationEnd) this.currentRoute = e.url;
    });
  }

  isActive = (route: string) => this.currentRoute === route;
}
