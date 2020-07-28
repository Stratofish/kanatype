import {Component, OnInit, Output} from '@angular/core';
import {TypingService} from "../typing-service.service";

@Component({
  selector: 'app-typing-output',
  templateUrl: './typing-output.component.html',
  styleUrls: ['./typing-output.component.css']
})
export class TypingOutputComponent implements OnInit {

  public sentence: String;
  public typedSentence: String;

  constructor(protected service: TypingService) {
    this.sentence = this.service.sentences[0];
  }

  ngOnInit(): void {
  }

}
