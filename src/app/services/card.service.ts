import { Injectable } from '@angular/core';
import { drawableCards } from '../card-lists';
import { Card } from '../game-types.model';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  private drawableCards = drawableCards;
  constructor() { }

  drawCard(): Card {
    return this.drawableCards[Math.floor(Math.random() * this.drawableCards.length)];
  }
}
