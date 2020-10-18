import {EventEmitter, Injectable, Output} from '@angular/core';
import {Character} from "./character";
import {ProgressUpdateModel} from "./progress-update.model";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TypingService {
  private typingUpdateSource = new BehaviorSubject<ProgressUpdateModel>(new ProgressUpdateModel('', '', ''));
  public $typingUpdate = this.typingUpdateSource.asObservable();

  listeners: Array<Function> = [];

  alphabet: Array<Character> = [
    new Character('あ', 'a'),
    new Character('い', 'i'),
    new Character('う', 'u'),
    new Character('え', 'e'),
    new Character('お', 'o'),
    new Character('か', 'ka'),
    new Character('き', 'ki'),
    new Character('く', 'ku'),
    new Character('け', 'ke'),
    new Character('こ', 'ko'),
    new Character('が', 'ga'),
    new Character('ぎ', 'gi'),
    new Character('ぐ', 'gu'),
    new Character('げ', 'ge'),
    new Character('ご', 'go'),
    new Character('さ', 'sa'),
    new Character('し', 'shi'),
    new Character('す', 'su'),
    new Character('せ', 'se'),
    new Character('そ', 'so'),
    new Character('ざ', 'za'),
    new Character('じ', 'dzi'),
    new Character('ず', 'zu'),
    new Character('ぜ', 'ze'),
    new Character('ぞ', 'zo'),
    new Character('た', 'ta'),
    new Character('ち', 'chi'),
    new Character('つ', 'tsu'),
    new Character('て', 'te'),
    new Character('と', 'to'),
    new Character('だ', 'da'),
    new Character('ぢ', 'dzi'),
    new Character('づ', 'du'),
    new Character('で', 'de'),
    new Character('ど', 'do'),
    new Character('な', 'na'),
    new Character('に', 'ni'),
    new Character('ぬ', 'nu'),
    new Character('ね', 'ne'),
    new Character('の', 'no'),
    new Character('は', 'ha'),
    new Character('ひ', 'hi'),
    new Character('ふ', 'hu'),
    new Character('へ', 'he'),
    new Character('ほ', 'ho'),
    new Character('ば', 'ba'),
    new Character('び', 'bi'),
    new Character('ぶ', 'bu'),
    new Character('べ', 'be'),
    new Character('ぼ', 'bo'),
    new Character('ぱ', 'pa'),
    new Character('ぴ', 'pi'),
    new Character('ぷ', 'pu'),
    new Character('ぺ', 'pe'),
    new Character('ぽ', 'po'),
    new Character('ま', 'ma'),
    new Character('み', 'mi'),
    new Character('む', 'mu'),
    new Character('め', 'me'),
    new Character('も', 'mo'),
    new Character('や', 'ya'),
    new Character('ゆ', 'yu'),
    new Character('よ', 'yo'),
    new Character('ら', 'ra'),
    new Character('り', 'ri'),
    new Character('る', 'ru'),
    new Character('れ', 're'),
    new Character('ろ', 'ro'),
    new Character('わ', 'wa'),
    new Character('ゐ', 'wi'),
    new Character('ゑ', 'we'),
    new Character('を', 'wo'),
    new Character('ん', 'n')
  ];
  sentences: Array<string> = [
    'わるいにわとりとわにいるわ',
    'ぞうくんぱんくうぞ',
    'このらいおんおいらのこ',
    'しんぶんし',
    'わたしまけましたわ'
  ];

  public currentPhrase = {
    phrase: '',
    progress: ''
  };

  constructor() {
    this.currentPhrase.phrase = this.sentences[Math.floor(Math.random()*this.sentences.length)];
    this.currentPhrase.progress = '';
    this.typingUpdateSource.next(new ProgressUpdateModel(this.currentPhrase.progress, this.currentPhrase.phrase.substr(this.currentPhrase.progress.length, 1), this.currentPhrase.phrase.substr(this.currentPhrase.progress.length+1)));
  }

  public checkChar(char: string) {
    let pos = this.currentPhrase.progress.length;
    if (this.currentPhrase.phrase.substring(pos, pos+1) === char) {
      this.currentPhrase.progress += char;
      this.typingUpdateSource.next(new ProgressUpdateModel(this.currentPhrase.progress, this.currentPhrase.phrase.substr(this.currentPhrase.progress.length, 1), this.currentPhrase.phrase.substr(this.currentPhrase.progress.length+1)));

      return true;
    }

    return false;
  }

  public getChar(char: string) {
    for (let i = 0; i < this.alphabet.length; i++) {
      if (this.alphabet[i].romaji === char) {
        return this.alphabet[i].glyph;
      }
    }

    return '';
  }

  public addListener(func: Function) {
    this.listeners.push(func);
  }
}
