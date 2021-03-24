import { Injectable } from '@angular/core';
import { ICard, IPlayer } from '../game-classes/game-types.model';
import { GameLoggerService } from './game-logger.service';
import { InventoryService } from './inventory.service';
import { PlayersService } from './players.service';

@Injectable({
  providedIn: 'root'
})
export class EquipCardService {
  constructor(private inventoryService: InventoryService, private playersService: PlayersService, private loggerService: GameLoggerService) { }

  equip(card: ICard, player: IPlayer): void {
    const updatedPlayer = player.equipCard(card);
    this.playersService.updatePlayer(updatedPlayer);
    this.loggerService.addLog('hero', {
      hero: updatedPlayer.name,
      message: `a équipé la carte ${card.title}`,
    });
  }
}
