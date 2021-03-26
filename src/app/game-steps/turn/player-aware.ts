import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { IPlayer } from '../../game-classes/game-types.model';
import { PlayersService } from '../../services/players.service';

@Component({
  template: ''
})
export abstract class PlayerAwareComponent implements OnInit {
  player: IPlayer;
  protected constructor(protected playersService: PlayersService, protected crd: ChangeDetectorRef) { }

  ngOnInit(): void {
     this.playersService.currentPlayer.subscribe((p) => {
      this.player = p;
      this.crd.detectChanges();
    });
  }
}
