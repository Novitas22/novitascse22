import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AboutusComponent } from './aboutus/aboutus.component';
import { EventsComponent } from './events/events.component';
import { WorkshopsComponent } from './workshops/workshops.component';
import { WebDesignComponent } from './web-design/web-design.component';
import { PptComponent } from './ppt/ppt.component';
import { ProjectIdeaComponent } from './project-idea/project-idea.component';
import { CatchTheFlagComponent } from './catch-the-flag/catch-the-flag.component';
import { MingleBingoComponent } from './mingle-bingo/mingle-bingo.component';
import { AdZapComponent } from './ad-zap/ad-zap.component';
import { WinningThrillComponent } from './winning-thrill/winning-thrill.component';
import { PotraitComponent } from './potrait/potrait.component';
import { CyberSecurityComponent } from './cyber-security/cyber-security.component';
import { ReactComponent } from './react/react.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutusComponent,
    EventsComponent,
    WorkshopsComponent,
    WebDesignComponent,
    PptComponent,
    ProjectIdeaComponent,
    CatchTheFlagComponent,
    MingleBingoComponent,
    AdZapComponent,
    WinningThrillComponent,
    PotraitComponent,
    CyberSecurityComponent,
    ReactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
