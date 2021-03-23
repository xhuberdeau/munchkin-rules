import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { Player } from '../game-types.model';
import { PlayersService } from '../services/players.service';

@Injectable()
export class CurrentPlayerResolver implements Resolve<Player> {
  constructor(private playersService: PlayersService) {}
  resolve(): Observable<Player> {
    return this.playersService.currentPlayer;
  }
}
