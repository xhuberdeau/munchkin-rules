import { Component, OnInit } from '@angular/core';
import { EventTypes } from '../../../game-classes/events.model';
import { EventDispatcherService } from '../../../services/event-dispatcher.service';

@Component({
  selector: 'app-combat',
  templateUrl: './combat.component.html',
  styleUrls: ['./combat.component.scss']
})
export class CombatComponent implements OnInit {

  constructor(private eventDispatcherService: EventDispatcherService) { }

  ngOnInit(): void {
    this.eventDispatcherService.dispatchEvent({ type: EventTypes.EnterCombat });
  }

}
