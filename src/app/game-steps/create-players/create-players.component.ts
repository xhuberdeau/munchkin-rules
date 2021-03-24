import { Component, OnInit } from '@angular/core';
import { PlayerSex } from '../../game-classes/game-types.model';
import { PlayersService } from '../../services/players.service';

@Component({
  selector: 'app-create-players',
  templateUrl: './create-players.component.html',
  styleUrls: ['./create-players.component.scss']
})
export class CreatePlayersComponent implements OnInit {
  isPreparingNewPlayer = false;
  playerName: string;
  playerSex: PlayerSex;
  constructor(private playersService: PlayersService) { }

  ngOnInit(): void {
  }

  addPlayer(): void {
    this.playersService.addPlayer(this.playerName, this.playerSex);
    this.isPreparingNewPlayer = false;
    this.playerName = null;
    this.playerSex = null;
  }

  prepareNewPlayer(): void {
    this.isPreparingNewPlayer = true;
  }
}
