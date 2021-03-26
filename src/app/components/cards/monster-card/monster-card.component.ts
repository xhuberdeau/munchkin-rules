import { Component, Input, OnInit } from '@angular/core';
import { EventTypes } from '../../../game-classes/events.model';
import { IMonsterCard, isCombatCardTargettedToMonster, isEquipableCard } from '../../../game-classes/game-types.model';
import { CombatService } from '../../../services/combat.service';
import { EventDispatcherService } from '../../../services/event-dispatcher.service';

@Component({
  selector: 'app-monster-card',
  templateUrl: './monster-card.component.html',
  styleUrls: ['./monster-card.component.scss']
})
export class MonsterCardComponent implements OnInit {
  monster: IMonsterCard;
  monsterUrl: string;
  constructor(private eventDispatcherService: EventDispatcherService, private combatService: CombatService) {}

  ngOnInit(): void {
    this.combatService.monster.subscribe((monster) => {
      if (!this.monster || this.monster.id !== monster.id) {
        this.monsterUrl = `https://www.robohash.org/${Math.random().toString(36).substring(7)}?set=set2`;
      }
      this.monster = monster;
    });
  }

  onDrop($event: DragEvent): void {
    const data = $event.dataTransfer.getData('text/plain');
    if (data) {
      const card = JSON.parse(data);
      if (isCombatCardTargettedToMonster(card)) {
        this.eventDispatcherService.dispatchEvent({type: EventTypes.UseCombatCardOnMonster, card, monster: this.monster});
      } else {
        alert('Seules les cartes combat destinées au monstre peuvent être jouées ici');
      }
    }
  }

  allowDrop($event: DragEvent): void {
    $event.preventDefault();
  }
}
