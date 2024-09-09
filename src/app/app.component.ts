import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

 count=0;
 isDisable=this.count ? false : true;
 incr()
 {
  this.count++
 }
 decr()
 {
  if (this.count == 0) {
    this.isDisable = true;
  }
  else {
    this.count--;
  }
 }
 reset()
 {
  this.count=0
 }

}
