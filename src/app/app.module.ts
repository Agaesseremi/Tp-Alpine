import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ConfigAlpineBarComponent } from './components/config-alpine-bar/config-alpine-bar.component';
import { ChoiceBarComponent } from './components/choice-bar/choice-bar.component';
import { ChoiceCardComponent } from './components/choice-card/choice-card.component';
import { ViewImageComperatorComponent } from './components/view-image-comperator/view-image-comperator.component'
import { reducer } from './reducer/reducer';
import { ButtonChoiceComponent } from './components/button-choice/button-choice.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ConfigAlpineBarComponent,
    ChoiceBarComponent,
    ChoiceCardComponent,
    ViewImageComperatorComponent,
    ButtonChoiceComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ alpine: reducer }, {}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
