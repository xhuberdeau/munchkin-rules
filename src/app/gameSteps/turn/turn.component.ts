import { Component } from '@angular/core';
import { PlayersService } from '../../services/players.service';
import { PlayerAwareComponent } from './player-aware';

@Component({
  selector: 'app-turn',
  templateUrl: './turn.component.html',
  styleUrls: ['./turn.component.scss']
})
export class TurnComponent extends PlayerAwareComponent  {
  constructor(protected playersService: PlayersService) {
    super(playersService);
  }
}
