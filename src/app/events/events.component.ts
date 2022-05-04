import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  // goto_tech(){
  //   this.router.navigate(['events/tech-events']);
  // }
  // goto_nontech(){
  //   this.router.navigate(['events/non-tech-events']);
  // }

  goto_ppt(){
    this.router.navigate(['events/ppt']);
  }
  goto_project_idea()
  {
    this.router.navigate(['events/project-idea']);
  }
  goto_web_design(){
    this.router.navigate(['events/web-design']);
  }
  goto_catch_the_flag(){
    this.router.navigate(['events/catch-the-flag']);
  }
  goto_bingo(){
    this.router.navigate(['events/mingle-bingo']);
  }
  goto_ad_zap(){
    this.router.navigate(['events/ad-zap']);
  }
  goto_winning_thrill(){
    this.router.navigate(['events/winning-thrill']);
  }
  goto_potrait(){
    this.router.navigate(['events/potrait']);
  }
}
