import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ICard } from '../../../game-classes/game-types.model';

@Injectable({
  providedIn: 'root'
})
export class NewCardsNotifierService {
  private $newCardsEvent: BehaviorSubject<ICard[]> = new BehaviorSubject<ICard[]>([]);
  newCards = this.$newCardsEvent.asObservable();

  constructor() { }

  notifyPlayerNewCards(cards: ICard[]): void {
    this.$newCardsEvent.next(cards);
  }
}
