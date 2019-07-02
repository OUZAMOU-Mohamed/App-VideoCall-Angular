import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularAgoraRtcModule, AgoraConfig } from 'angular-agora-rtc'; // Add

import { AppComponent } from './app.component';

// Add
const agoraConfig: AgoraConfig = {
  AppID: '6b912bbb1a154811a479dfa277018c7b',
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularAgoraRtcModule.forRoot(agoraConfig) // Add
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }