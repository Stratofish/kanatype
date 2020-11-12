import {Component, Input, OnInit} from '@angular/core';
import {TypingService} from "../typing-service.service";

@Component({
  selector: 'app-typing-input',
  templateUrl: './typing-input.component.html',
  styleUrls: ['./typing-input.component.css']
})
export class TypingInputComponent implements OnInit {

  public char: string = '';
  public typed: string = '';

  constructor(protected service: TypingService) { }

  @Input()
  public onKeypress($event) {
    let glyph = this.service.getChar(this.char + $event.key);
    if ((glyph !== '') &&
      (this.service.checkChar(glyph)))
    {
      this.char = '';
    } else {
      this.char += $event.key;
      this.typed = glyph;
    }
    $event.preventDefault();
    $event.stopPropagation();
  }

  @Input()
  public onChange($event) {
    this.typed = this.service.getChar(this.char);
  }

  ngOnInit(): void {
  }
}


