import {Component, OnInit, Output} from '@angular/core';
import {TypingService} from "../typing-service.service";

@Component({
  selector: 'app-typing-output',
  templateUrl: './typing-output.component.html',
  styleUrls: ['./typing-output.component.css']
})
export class TypingOutputComponent implements OnInit {

  public currentPhrase;

  constructor(protected service: TypingService) {
    this.currentPhrase = this.service.currentPhrase;
  }

  ngOnInit(): void {
  }

}
