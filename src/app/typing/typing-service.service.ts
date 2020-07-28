import { Injectable } from '@angular/core';
import {Character} from "./character";

@Injectable({
  providedIn: 'root'
})
export class TypingService {
  alphabet: Array<Character> = [
    new Character('あ', 'a'),
    new Character('い', 'i'),
    new Character('う', 'u'),
    new Character('え', 'e'),
    new Character('お', 'o'),
    new Character('わ', 'wa'),
    new Character('る', 'ru')
  ];
  sentences: Array<string> = [
    'わるいにわとりとわにいるわ',
    'ぞうくんぱんくうぞ',
    'このらいおんおいらのこ',
    'しんぶんし',
    'わたしまけましたわ'
  ];

  public currentSentence: String;
  public currentProgress: String;

  constructor() {
    this.currentSentence = this.sentences[0];
    this.currentProgress = '';
  }

  public checkChar(char: string) {
    let pos = this.currentProgress.length;
    console.log(pos, this.currentSentence.substring(pos, pos+1));
    if (this.currentSentence.substring(pos, pos+1) === char) {
      this.currentProgress += char;
      return true;
    }

    return false;
  }

  public getChar(char: string) {
    console.log(char);
    for (let i = 0; i < this.alphabet.length; i++) {
      if (this.alphabet[i].romaji === char) {
        console.log(char, this.alphabet[i].romaji)
        return this.alphabet[i].glyph;
      }
    }

    return '';
  }
}
