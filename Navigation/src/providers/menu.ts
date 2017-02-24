import { Injectable } from '@angular/core';

@Injectable()
export class showMenuButton {
  private _showMenuButton: boolean;

  constructor() {

    this._showMenuButton = true;
  }


  public get showMenuButton(): boolean {
    return this._showMenuButton;
  }

  public set showMenuButton(value: boolean) {
    this._showMenuButton = value;
  }
}
