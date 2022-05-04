import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AdZapComponent } from './ad-zap/ad-zap.component';
import { CatchTheFlagComponent } from './catch-the-flag/catch-the-flag.component';
import { CyberSecurityComponent } from './cyber-security/cyber-security.component';
import { EventsComponent } from './events/events.component';
import { MingleBingoComponent } from './mingle-bingo/mingle-bingo.component';
import { PotraitComponent } from './potrait/potrait.component';
import { PptComponent } from './ppt/ppt.component';
import { ProjectIdeaComponent } from './project-idea/project-idea.component';
import { ReactComponent } from './react/react.component';
import { WebDesignComponent } from './web-design/web-design.component';
import { WinningThrillComponent } from './winning-thrill/winning-thrill.component';
import { WorkshopsComponent } from './workshops/workshops.component';

const routes: Routes = [
  {path:'aboutus', component: AboutusComponent},
  {path:'events', component: EventsComponent},
  {path:'workshops', component: WorkshopsComponent},
  {path:'events/ppt', component: PptComponent},
  {path:'events/project-idea', component: ProjectIdeaComponent},
  {path:'events/web-design', component: WebDesignComponent},
  {path:'events/catch-the-flag', component: CatchTheFlagComponent},
  {path:'events/mingle-bingo', component: MingleBingoComponent},
  {path:'events/ad-zap', component: AdZapComponent},
  {path:'events/winning-thrill', component: WinningThrillComponent},
  {path:'events/potrait', component: PotraitComponent},
  {path:'workshop/cyber-security', component: CyberSecurityComponent},
  {path:'workshop/react', component: ReactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
