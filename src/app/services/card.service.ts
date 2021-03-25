import { Injectable } from '@angular/core';
import { dxmCards, monsterCards, treasureCards } from '../cards/cards';
import { IDXMCard, IMonsterCard, ITreasureCard } from '../game-classes/game-types.model';
import { getRandomInList } from '../utils/random';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  private treasureDeck: ITreasureCard[] = treasureCards;
  private monsterDeck: IMonsterCard[] = monsterCards;
  private dxmDeck: IDXMCard[] = dxmCards;

  constructor() { }

  drawTreasureCards(cardCount: number = 1): ITreasureCard[] {
    const cards: ITreasureCard[] = [];
    for (let i = 1; i <= cardCount; i++) {
      cards.push(getRandomInList<ITreasureCard>(this.treasureDeck));
    }

    return cards;
  }

  drawMonsterCard(): IMonsterCard {
    return getRandomInList<IMonsterCard>(this.monsterDeck);
  }

  drawDxmCards(cardCount: number = 1): IDXMCard[] {
    const cards: IDXMCard[] = [];
    for (let i = 1; i <= cardCount; i++) {
      cards.push(getRandomInList<IDXMCard>(this.dxmDeck));
    }

    return cards;
  }
}
