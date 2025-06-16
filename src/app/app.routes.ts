import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { TodosComponent } from './todos/todos.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'counter',component:CounterComponent},
    {path:'todos',component:TodosComponent}
];

// {
//     path: 'todos',
//     loadComponent:()=>{
//         return import('./todos/todos.component').then((m)=>m.TodosComponent)
//     }
// }
