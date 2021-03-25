import { Component, Input, OnInit } from '@angular/core';
import { EventTypes } from '../game-classes/events.model';
import { IPlayer, isEquipableCard } from '../game-classes/game-types.model';
import { EventDispatcherService } from '../services/event-dispatcher.service';

@Component({
  selector: 'app-equiped-cards',
  templateUrl: './equiped-cards.component.html',
  styleUrls: ['./equiped-cards.component.scss']
})
export class EquipedCardsComponent implements OnInit {
  @Input() player: IPlayer;
  constructor(private eventDispatcherService: EventDispatcherService ) { }

  ngOnInit(): void {
  }

  onDrop($event: DragEvent): void {
    const data = $event.dataTransfer.getData('text/plain');
    if (data) {
      const card = JSON.parse(data);
      if (isEquipableCard(card)) {
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
