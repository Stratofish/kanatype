import {Component, Input, OnInit, Output} from '@angular/core';
import {TypingService} from "../typing-service.service";
import {ProgressUpdateModel} from "../progress-update.model"
import {Subscription} from "rxjs";

@Component({
  selector: 'app-typing-output',
  templateUrl: './typing-output.component.html',
  styleUrls: ['./typing-output.component.css']
})
export class TypingOutputComponent implements OnInit {

  private subscription: Subscription;

  public currentPhrase;

  public phraseCompleted: string = '';
  public phraseCurrentGlyph: string = '';
  public phraseTodo: string = '';

  constructor(protected service: TypingService) {
    this.currentPhrase = this.service.currentPhrase;
    this.subscription = this.service.$typingUpdate.subscribe(item => this.onPhraseUpdate(item));
  }

  public onPhraseUpdate($event: ProgressUpdateModel) {
    this.phraseCompleted = $event.completed;//completed;
    this.phraseCurrentGlyph = $event.currentGlyph;
    this.phraseTodo = $event.todo;
  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
