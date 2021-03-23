import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Player } from '../../game-types.model';
import { PlayersService } from '../../services/players.service';

@Component({
  template: ''
})
export abstract class PlayerAwareComponent implements OnInit {
  player: Player;
  protected constructor(protected activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.player = this.activatedRoute.snapshot.data.currentPlayer;
  }
}
