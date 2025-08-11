import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-expense-entry',
  imports: [],
  templateUrl: './expense-entry.component.html',
  styleUrl: './expense-entry.component.scss'
})
export class ExpenseEntryComponent implements OnInit{
  title: any;
  constructor() {
  }
  ngOnInit(): void {
      this.title = 'Expense Entry'
  }
}
