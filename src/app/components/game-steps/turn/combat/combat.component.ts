import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { EventTypes } from '../../../../game-classes/events.model';
import { IMonsterCard } from '../../../../game-classes/game-types.model';
import { CombatService } from '../../../../services/combat.service';
import { EventDispatcherService } from '../../../../services/event-dispatcher.service';
import { PlayersService } from '../../../../services/players.service';
import { throwDice } from '../../../../utils/random';
import { PlayerAwareComponent } from '../player-aware';

@Component({
  selector: 'app-combat',
  templateUrl: './combat.component.html',
  styleUrls: ['./combat.component.scss']
})
export class CombatComponent implements OnInit {
  monster: IMonsterCard;
  hasThrownDice = false;
  diceValue: number;
  winning: boolean;
  showTrollMessage = false;
  private timeout: any;

  constructor(
    private eventDispatcherService: EventDispatcherService,
    protected playersService: PlayersService,
    private combatService: CombatService) {}

  ngOnInit(): void {
    this.eventDispatcherService.dispatchEvent({ type: EventTypes.EnterCombat });
    this.combatService.monster.subscribe((monster) => {
      if (!this.monster || this.monster.id !== monster.id) {
        this.hasThrownDice = false;
        this.diceValue = null;
        this.winning = null;
        this.showTrollMessage = false;
        if (this.timeout) {
          clearTimeout(this.timeout);
        }
      }
      this.monster = monster;
    });

    this.combatService.isPlayerWinning.subscribe((winning) => {
      this.winning = winning;
      this.showTrollMessage = true;
      if (this.timeout) {
        clearTimeout(this.timeout);
      }
      this.timeout = setTimeout(() => {this.showTrollMessage = false}, 2000);
    });
  }

  dice(): void {
    this.diceValue = throwDice();
    this.eventDispatcherService.dispatchEvent({ type: EventTypes.ThrowCombatDice, diceValue: this.diceValue });
    this.hasThrownDice = true;
  }

  winCombat(): void {
    this.eventDispatcherService.dispatchEvent({ type: EventTypes.WinCombat });
  }

  surrender(): void {
    this.eventDispatcherService.dispatchEvent({ type: EventTypes.LoseCombat });
  }
}
