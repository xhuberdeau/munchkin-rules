import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { EventTypes, IEvent } from '../game-classes/events.model';
import { ITrapCard } from '../game-classes/game-types.model';
import { LogType } from '../game-classes/logs.model';
import { CardService } from './card.service';
import { EventDispatcherService } from './event-dispatcher.service';
import { GameLoggerService } from './game-logger.service';
import { MapService } from '../map/map.service';
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
    private mapService: MapService,
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
      case EventTypes.EquipCard:
        this.onCardEquip(event);
        break;
      case EventTypes.PlaceCardOnMapTile:
        this.onCardPlacedOnMapTile(event);
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
      this.gameLoggerService.addPlayerLog({ type: LogType.Player, player: this.playersService.currentPlayerSync, message: `a obtenu la carte ${this.addStandOutLog(card.title)}`});
    });
  }

  private onCardEquip(event: IEvent): void {
    const card = this.cardService.findCardById(event.card.id);
    this.playersService.updatePlayer(this.playersService.currentPlayerSync.equipCard(card));
    this.gameLoggerService.addPlayerLog({ type: LogType.Player, player: this.playersService.currentPlayerSync, message: `a équipé la carte ${this.addStandOutLog(card.title)}`});
  }

  private onCardPlacedOnMapTile(event: IEvent): void {
    const card = this.cardService.findCardById(event.card.id);
    this.playersService.updatePlayer(this.playersService.currentPlayerSync.removeCard(card));
    this.mapService.placeCardOnMapTile(this.playersService.currentPlayerSync, card as ITrapCard, event.tile);
    this.gameLoggerService.addPlayerLog({ type: LogType.Player, player: this.playersService.currentPlayerSync, message: `a placé la carte ${this.addStandOutLog(card.title)} dans la ${this.addStandOutLog(event.tile.name)}`});
  }

  private addStandOutLog(val: string): string {
    return `<span class="stand-out-log">${val}</span>`;
  }
}
