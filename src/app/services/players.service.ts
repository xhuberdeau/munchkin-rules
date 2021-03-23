import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Hero, Player, PlayerSex } from '../game-types.model';
import { GameLoggerService } from './game-logger.service';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {
  private currentPlayerSubject: BehaviorSubject<Player> = new BehaviorSubject<Player>(null);
  currentPlayer = this.currentPlayerSubject.asObservable();
  private players: Player[] = [];
  constructor(private logger: GameLoggerService) { }

  addPlayer(name: string, sex: PlayerSex): Player {
    const newPlayer = {
      name,
      turn: this.players.length + 1,
      health: 3,
      inventory: [],
      sex,
    };
    this.players = [...this.players, newPlayer];
    if (this.players.length === 1) {
      this.currentPlayerSubject.next(newPlayer);
    }
    this.logger.addLog('hero', {
      message: 'a rejoint la partie',
      hero: newPlayer.name,
    });
    return newPlayer;
  }

  getPlayers(): Player[] {
    return this.players;
  }
}
