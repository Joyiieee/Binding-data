import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent {
  appName="This is an interpolation example!"
  clientName = "Clarence";
  appliedCSSClass = "green";
  notappliedCSSClass = false;
  myColor = "red";

  showData($event:any){
    console.log("Button is clicked!"); if($event) {
      console.log($event.target);
      console.log($event.target.value);
    }
  }
}
