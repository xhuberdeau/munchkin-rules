import { Injectable } from '@angular/core';
import { ReplaySubject, } from 'rxjs';
import { ArmureTrapue } from '../cards/treasure/equipment/armure-trapue';
import { BottesHemorroides } from '../cards/treasure/equipment/bottes-hemorroides';
import { PaperSwordEquipment } from '../cards/treasure/equipment/paper-sword.equipment';
import { IPlayer, PlayerSex } from '../game-classes/game-types.model';
import { Player } from '../game-classes/player.class';
import { GameLoggerService } from './game-logger.service';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {
  private currentPlayerSync: IPlayer;
  private currentPlayerSubject: ReplaySubject<IPlayer> = new ReplaySubject<IPlayer>(1);
  currentPlayer = this.currentPlayerSubject.asObservable();
  private players: IPlayer[] = [];
  constructor(private logger: GameLoggerService) {
    this.addPlayer('Peter Parker',  'Homme');
    this.addPlayer('Emma Watson',  'Femme');
  }

  addPlayer(name: string, sex: PlayerSex): IPlayer {
    const newPlayer = new Player({name,
        sex,
        order: this.players.length + 1,
        inventory: [
          new PaperSwordEquipment(),
        new BottesHemorroides(),
        new ArmureTrapue(),
    ]});
    this.players = [...this.players, newPlayer];
    if (this.players.length === 1) {
      this.broadcastPlayer(newPlayer);
    }
    this.logger.addLog('hero', {
      message: 'a rejoint la partie',
      hero: newPlayer.name,
    });
    return newPlayer;
  }

  updatePlayer(player: IPlayer): IPlayer {
    const playerIndex = this.players.findIndex((p) => p.name === player.name);
    this.players[playerIndex] = player;
    if (this.currentPlayerSync.name === player.name) {
      this.broadcastPlayer(player);
    }

    return player;
  }

  getPlayers(): IPlayer[] {
    return this.players;
  }

  private broadcastPlayer(player: IPlayer): void {
    this.currentPlayerSubject.next(player);
    this.currentPlayerSync = player;
  }
}
