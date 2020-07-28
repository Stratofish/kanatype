import {Component, Input, OnInit} from '@angular/core';
import {TypingService} from "../typing-service.service";

@Component({
  selector: 'app-typing-input',
  templateUrl: './typing-input.component.html',
  styleUrls: ['./typing-input.component.css']
})
export class TypingInputComponent implements OnInit {

  public char: string = '';

  constructor(protected service: TypingService) { }

  @Input()
  public onChange($event) {
    let glyph = this.service.getChar(this.char + $event.key);
    if ((glyph !== '') &&
      (this.service.checkChar(glyph)))
    {
      this.char = '';
    } else {
      this.char += $event.key;
    }
    $event.preventDefault();
    $event.stopPropagation();
  }

  ngOnInit(): void {
  }

}
