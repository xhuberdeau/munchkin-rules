import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { EventTypes, IEvent } from '../game-classes/events.model';
import { LogType } from '../game-classes/logs.model';
import { CardService } from './card.service';
import { EventDispatcherService } from './event-dispatcher.service';
import { GameLoggerService } from './game-logger.service';
import { PlayersService } from './players.service';

@Injectable({
  providedIn: 'root'
})
export class EventHubService {

  constructor(
    private eventDispatcher: EventDispatcherService,
    private gameLoggerService: GameLoggerService,
    private playersService: PlayersService,
    private cardService: CardService,
    private router: Router,
  ) {
    this.eventDispatcher.events.subscribe((event) => {
      this.treatEvent(event);
    });
  }

  private treatEvent(event: IEvent): void {
    switch (event.type) {
      case EventTypes.JoinGame:
        this.onGameJoin(event);
        break;
      case EventTypes.GameStart:
        this.onGameStart();
        break;
    }
  }

  private onGameJoin(event: IEvent): void {
    const player = this.playersService.addPlayer(event.playerName, event.playerSex);
    this.playersService.stackCards(player, this.cardService.drawDxmCards(3));
    this.playersService.stackCards(player, this.cardService.drawTreasureCards(3));
    this.gameLoggerService.addPlayerLog({ type: LogType.Player, player, message: 'a rejoint la partie.'});
  }

  private onGameStart(): void {
    this.gameLoggerService.addGeneralLog({ type: LogType.General, message: 'La partie démarre.'});
    this.router.navigateByUrl('/turn/map');
    const addedCards = this.playersService.unstackCurrentPlayerStackedCards();
    addedCards.forEach((card) => {
      this.gameLoggerService.addPlayerLog({ type: LogType.Player, player: this.playersService.currentPlayerSync, message: `a obtenu la carte ${card.title}`});
    });
  }
}
