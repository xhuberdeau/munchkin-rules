import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IMonsterCard } from '../game-classes/game-types.model';
import { CardService } from './card.service';

@Injectable({
  providedIn: 'root'
})
export class CombatService {
  private $isCombatMode: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isCombatMode = this.$isCombatMode.asObservable();

  currentMonsterSync: IMonsterCard;
  private $monster: BehaviorSubject<IMonsterCard> = new BehaviorSubject<IMonsterCard>(null);
  monster = this.$monster.asObservable();

  constructor(private cardService: CardService) { }

  startCombatMode(): void {
    this.$isCombatMode.next(true);
  }

  stopCombatMode(): void {
    this.$isCombatMode.next(false);
  }

  pickMonster(): IMonsterCard {
    const monster = this.cardService.drawMonsterCard();
    this.broadcastMonster(monster);

    return monster;
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
