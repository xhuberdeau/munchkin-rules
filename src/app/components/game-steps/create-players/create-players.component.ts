import { Component, OnInit } from '@angular/core';
import { EventTypes } from '../../../game-classes/events.model';
import { PlayerSex } from '../../../game-classes/game-types.model';
import { EventDispatcherService } from '../../../services/event-dispatcher.service';

@Component({
  selector: 'app-create-players',
  templateUrl: './create-players.component.html',
  styleUrls: ['./create-players.component.scss']
})
export class CreatePlayersComponent implements OnInit {
  isPreparingNewPlayer = false;
  playerName: string;
  playerSex: PlayerSex;
  constructor(private eventDispatcherService: EventDispatcherService) { }

  ngOnInit(): void {
  }

  addPlayer(): void {
    this.eventDispatcherService.dispatchEvent({type: EventTypes.JoinGame, playerName: this.playerName, playerSex: this.playerSex});
    this.isPreparingNewPlayer = false;
    this.playerName = null;
    this.playerSex = null;
  }

  prepareNewPlayer(): void {
    this.isPreparingNewPlayer = true;
  }

  startGame(): void {
    this.eventDispatcherService.dispatchEvent({ type: EventTypes.GameStart});
  }
}
