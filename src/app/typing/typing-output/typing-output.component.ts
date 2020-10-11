import {Component, OnInit, Output} from '@angular/core';
import {TypingService} from "../typing-service.service";

@Component({
  selector: 'app-typing-output',
  templateUrl: './typing-output.component.html',
  styleUrls: ['./typing-output.component.css']
})
export class TypingOutputComponent implements OnInit {

  public currentPhrase;

  public phraseCompleted: string = 'ab';
  public phraseCurrentGlyph: string = 'cd';
  public phraseTodo: string = 'ef';

  constructor(protected service: TypingService) {
    this.phraseCompleted = 'ab';
    this.currentPhrase = this.service.currentPhrase;
    this.service.addListener(this.updateMe);
  }

  public updateMe(completed: string, currentGlyph: string, todo: string) {
    console.log('update', completed);

    this.phraseCompleted += '.';//completed;
    console.log(this.phraseCompleted);
    this.phraseCurrentGlyph = currentGlyph;
    this.phraseTodo = todo;
  }

  ngOnInit(): void {
  }

}
