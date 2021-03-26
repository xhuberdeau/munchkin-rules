import { Component, OnInit } from '@angular/core';
import { EventTypes } from '../../../game-classes/events.model';
import {
  IPlayer,
  isCombatCardTargettedToPlayer,
  isCombatPlayerBoosterCard,
  isEquipableCard,
  isPlayerLevelBoostCard
} from '../../../game-classes/game-types.model';
import { CombatService } from '../../../services/combat.service';
import { EventDispatcherService } from '../../../services/event-dispatcher.service';
import { PlayersService } from '../../../services/players.service';

@Component({
  selector: 'app-hero-stats',
  templateUrl: './hero-stats.component.html',
  styleUrls: ['./hero-stats.component.scss']
})
export class HeroStatsComponent implements OnInit {
  player: IPlayer;
  isCombatMode: boolean;
  currentTurn: number;
  constructor(private combatService: CombatService, private playersService: PlayersService, private eventDispatcherService: EventDispatcherService) { }

  ngOnInit(): void {
    this.combatService.isCombatMode.subscribe((isCombatMode) => this.isCombatMode = isCombatMode);
    this.playersService.currentTurnObs.subscribe((currentTurn) => this.currentTurn = currentTurn);
    this.playersService.currentPlayer.subscribe((player) => this.player = player);
  }

  onDrop($event: DragEvent): void {
    const data = $event.dataTransfer.getData('text/plain');
    if (data) {
      const card = JSON.parse(data);
      if (this.isCombatMode && isCombatPlayerBoosterCard(card)) {
        this.eventDispatcherService.dispatchEvent({type: EventTypes.UseCombatCardOnPlayer, card});
      } else if (isPlayerLevelBoostCard(card)) {
        this.eventDispatcherService.dispatchEvent({type: EventTypes.UsePlayerLevelBooster, card});
      } else {
        alert('Seules les cartes augmentant votre niveau ou bien celles augmentant votre puissance durant un combat peuvent être utilisées ici');
      }
    }
  }

  allowDrop($event: DragEvent): void {
    $event.preventDefault();
  }
}
