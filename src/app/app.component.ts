import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'praveen';
  constructor(public router:Router){

  }
  
  goto_register(){
    this.router.navigate(['events']);
  }

  goto_aboutus(){
    this.router.navigate(['aboutus']);
  }
  goto_home()
  {
    this.router.navigate(['/']);
  }
  goto_events(){
    this.router.navigate(['events']);
  }
  goto_workshops()
  {
    this.router.navigate(['workshops']);
  }
}
