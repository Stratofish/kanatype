import { Component, OnInit } from '@angular/core';
import {TypingService} from "./typing-service.service";

@Component({
  selector: 'app-typing',
  templateUrl: './typing.component.html',
  styleUrls: ['./typing.component.css']
})
export class TypingComponent implements OnInit {
  constructor(protected service:TypingService) {
  }

  ngOnInit(): void {
  }
}
