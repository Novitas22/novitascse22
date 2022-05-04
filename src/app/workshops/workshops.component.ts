import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-workshops',
  templateUrl: './workshops.component.html',
  styleUrls: ['./workshops.component.css']
})
export class WorkshopsComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  goto_cyber(){
    this.router.navigate(['workshop/cyber-security']);
  }
  goto_react(){
    this.router.navigate(['workshop/react']);
  }
}
