import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'counter',component:CounterComponent}
];
