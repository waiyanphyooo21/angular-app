import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ExpenseEntryComponent} from './expense-entry/expense-entry.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ExpenseEntryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'expense-manager';
}
