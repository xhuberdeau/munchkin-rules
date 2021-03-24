import { Injectable } from '@angular/core';
import {  IPlayer, ICard } from '../game-classes/game-types.model';
import { GameLoggerService } from './game-logger.service';
import {  PlayersService } from './players.service';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {
  constructor(private logger: GameLoggerService, private playersService: PlayersService) {}

  addCard(card: ICard, player: IPlayer): void {
    this.playersService.updatePlayer(player.addCardToInventory(card));
    this.logger.addLog('hero', {
      message: `a obtenu la carte ${card.title}`,
      hero: player.name
    });
  }
}
