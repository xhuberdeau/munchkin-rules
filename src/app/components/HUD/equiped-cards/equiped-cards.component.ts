import { Component, OnInit } from '@angular/core';
import { EventTypes } from '../../../game-classes/events.model';
import { IPlayer, isEquipableCard } from '../../../game-classes/game-types.model';
import { CombatService } from '../../../services/combat.service';
import { EventDispatcherService } from '../../../services/event-dispatcher.service';
import { PlayersService } from '../../../services/players.service';

@Component({
  selector: 'app-equiped-cards',
  templateUrl: './equiped-cards.component.html',
  styleUrls: ['./equiped-cards.component.scss']
})
export class EquipedCardsComponent implements OnInit {
  player: IPlayer;
  isCombatMode: boolean;
  constructor(private eventDispatcherService: EventDispatcherService, private combatService: CombatService, private playersService: PlayersService) { }

  ngOnInit(): void {
    this.combatService.isCombatMode.subscribe((isCombatMode) => this.isCombatMode = isCombatMode);
    this.playersService.currentPlayer.subscribe((player) => this.player = player);
  }

  onDrop($event: DragEvent): void {
    const data = $event.dataTransfer.getData('text/plain');
    if (data) {
      const card = JSON.parse(data);
      if (this.isCombatMode) {
        alert('Impossible d\'équiper cette carte : vous êtes en combat');
      } else if (isEquipableCard(card)) {
        this.eventDispatcherService.dispatchEvent({type: EventTypes.EquipCard, card});
      } else {
        alert('Vous ne pouvez pas équiper cette carte');
      }
    }
  }

  allowDrop($event: DragEvent): void {
    $event.preventDefault();
  }
}
