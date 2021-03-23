import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Hero, Player, PlayerSex, Card } from '../game-types.model';
import { GameLoggerService } from './game-logger.service';
import {  PlayersService } from './players.service';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {
  constructor(private logger: GameLoggerService, private playersService: PlayersService) {}

  addCard(card: Card, player: Player) {
    console.log(card, player);
    this.playersService.updatePlayer({...player, inventory: [...player.inventory, card]});
    this.logger.addLog('hero', `a obtenu la carte ${card.title}`);
  }
}
