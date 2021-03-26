import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IMonsterCard, IPlayer } from '../game-classes/game-types.model';
import { CardService } from './card.service';

@Injectable({
  providedIn: 'root'
})
export class CombatService {
  currentMonsterSync: IMonsterCard;
  private $monster: BehaviorSubject<IMonsterCard> = new BehaviorSubject<IMonsterCard>(null);
  monster = this.$monster.asObservable();

  constructor(private cardService: CardService) { }

  pickMonster(): void {
    const monster = this.cardService.drawMonsterCard();
    this.broadcastMonster(monster);
  }

  updateMonster(monster: IMonsterCard): IMonsterCard {
    this.broadcastMonster(monster);

    return monster;
  }

  private broadcastMonster(monster: IMonsterCard): void {
    this.$monster.next(monster);
    this.currentMonsterSync = monster;
  }
}
