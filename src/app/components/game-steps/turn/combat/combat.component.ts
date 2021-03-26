import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { EventTypes } from '../../../../game-classes/events.model';
import { IMonsterCard } from '../../../../game-classes/game-types.model';
import { CombatService } from '../../../../services/combat.service';
import { EventDispatcherService } from '../../../../services/event-dispatcher.service';
import { PlayersService } from '../../../../services/players.service';
import { PlayerAwareComponent } from '../player-aware';

@Component({
  selector: 'app-combat',
  templateUrl: './combat.component.html',
  styleUrls: ['./combat.component.scss']
})
export class CombatComponent extends PlayerAwareComponent implements OnInit {
  monster: IMonsterCard;

  constructor(
    private eventDispatcherService: EventDispatcherService,
    protected playerService: PlayersService,
    private combatService: CombatService,
    protected cdr: ChangeDetectorRef) {
    super(playerService, cdr);
  }

  ngOnInit(): void {
    this.eventDispatcherService.dispatchEvent({ type: EventTypes.EnterCombat });
    this.combatService.monster.subscribe((monster) => {
      this.monster = monster;
    });
  }

}
