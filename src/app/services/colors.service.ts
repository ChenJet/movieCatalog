import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ColorsService {

  masterColorChange = new EventEmitter<string>();
  colorsArray = ['#ff4444', '#FF9933', '#FFDA33', '#74CB56', '#1EF9EC', '#1EC4F9', '#A54DF2', '#F91E82'];
  private _masterBackgroundColor = this.colorsArray[0];

  constructor() { }

  get masterBackgroundColor() {
    return this._masterBackgroundColor;
  }

  set masterBackgroundColor(color) {
    this._masterBackgroundColor = color;
    this.masterColorChange.emit(this._masterBackgroundColor);
  }
}
