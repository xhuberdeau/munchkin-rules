import { Component, OnInit } from '@angular/core';
import { Player } from '../../game-types.model';
import { PlayersService } from '../../services/players.service';

@Component({
  template: ''
})
export abstract class PlayerAwareComponent implements OnInit {
  player: Player;
  protected constructor(protected playersService: PlayersService) { }

  ngOnInit(): void {
    this.playersService.currentPlayer.subscribe((player) => this.player = player);
  }
}
