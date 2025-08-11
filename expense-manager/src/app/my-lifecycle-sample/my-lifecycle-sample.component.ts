import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-my-lifecycle-sample',
  imports: [],
  templateUrl: './my-lifecycle-sample.component.html',
  styleUrl: './my-lifecycle-sample.component.scss'
})
export class MyLifecycleSampleComponent implements OnInit{

  constructor() {
  }
  ngOnChanges(): void {
    console.log("Change detection");
  }
  ngOnInit(): void {
        console.log("Initialization of Component/Directive");
    }
  ngDoCheck(){
    console.log("Custom change detection");
  }
  ngAfterContentInit(){
    console.log("Content initialization");
  }

  ngAfterContentChecked(){
    console.log("Checking changes in content");
  }
  ngAfterViewInit(){
    console.log("View initialization");
  }

  ngAfterViewChecked() {
    console.log("Checking changes in views")
  }

  ngOnDestroy() {
    console.log("Destruction of component / directive")
  }
}
