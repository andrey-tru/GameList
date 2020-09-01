import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ListComponent } from './list/list.component';
import { SearchPipe } from './search.pipe';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { GameComponent } from './game/game.component';


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    SearchPipe,
    GameComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
