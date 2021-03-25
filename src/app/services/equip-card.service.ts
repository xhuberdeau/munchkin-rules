import { Injectable } from '@angular/core';
import { ICard, IPlayer } from '../game-classes/game-types.model';

@Injectable({
  providedIn: 'root'
})
export class EquipCardService {
  constructor() { }

  equip(card: ICard, player: IPlayer): void {
    /*const updatedPlayer = player.equipCard(card);
    this.playersService.updatePlayer(updatedPlayer);*/
    /*this.loggerService.addLog('hero', {
      hero: updatedPlayer.name,
      message: `a équipé la carte ${card.title}`,
    });*/
  }
}
