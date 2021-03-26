import { Component, OnInit } from '@angular/core';
import { IPlayer } from '../../../game-classes/game-types.model';
import { CombatService } from '../../../services/combat.service';
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
  constructor(private combatService: CombatService, private playersService: PlayersService) { }

  ngOnInit(): void {
    this.combatService.isCombatMode.subscribe((isCombatMode) => this.isCombatMode = isCombatMode);
    this.playersService.currentTurnObs.subscribe((currentTurn) => this.currentTurn = currentTurn);
    this.playersService.currentPlayer.subscribe((player) => this.player = player);
  }

}
