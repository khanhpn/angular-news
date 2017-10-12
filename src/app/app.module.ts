import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SubComponent } from './sub.component';
import { StudyMultiComponent } from './multi-component/study-multi.component';

@NgModule({
  declarations: [
    AppComponent,
    SubComponent,
    StudyMultiComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
