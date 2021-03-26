import { Component, Input, OnInit } from '@angular/core';
import { IPlayer } from '../../../game-classes/game-types.model';
import { CombatService } from '../../../services/combat.service';

@Component({
  selector: 'app-hero-stats',
  templateUrl: './hero-stats.component.html',
  styleUrls: ['./hero-stats.component.scss']
})
export class HeroStatsComponent implements OnInit {
  @Input() player: IPlayer;
  isCombatMode: boolean;
  constructor(private combatService: CombatService) { }

  ngOnInit(): void {
    this.combatService.isCombatMode.subscribe((isCombatMode) => this.isCombatMode = isCombatMode);
  }

}
