import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TypingOutputComponent } from './typing/typing-output/typing-output.component';
import { TypingInputComponent } from './typing/typing-input/typing-input.component';
import { TypingComponent } from './typing/typing.component';
import {TypingService} from "./typing/typing-service.service";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    TypingOutputComponent,
    TypingInputComponent,
    TypingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    TypingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
