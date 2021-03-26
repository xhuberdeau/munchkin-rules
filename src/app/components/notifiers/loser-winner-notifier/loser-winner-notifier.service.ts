import { EventEmitter, Injectable } from '@angular/core';
import { IPlayer } from '../../../game-classes/game-types.model';

export type LoserWinnerEvent = { losers: IPlayer[], winners: IPlayer[], isGameOver: boolean };

@Injectable({
  providedIn: 'root'
})
export class LoserWinnerNotifierService {
  private $loserWinnerEvent: EventEmitter<LoserWinnerEvent> = new EventEmitter<LoserWinnerEvent>(null);
  loserWinnerEvent = this.$loserWinnerEvent.asObservable();

  constructor() { }

  notifyLosersAndWinners(losers: IPlayer[], winners: IPlayer[], isGameOver: boolean): void {
    this.$loserWinnerEvent.next({  losers, winners, isGameOver });
  }
}
