import { Injectable } from '@angular/core';
import { drawableCards } from '../card-lists';
import { ICard, IPlayer } from '../game-classes/game-types.model';
import { getRandomInList } from '../utils/random';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  private drawableCards = drawableCards;
  constructor() { }

  drawCard(): ICard {
    return getRandomInList<ICard>(this.drawableCards);
  }
}
