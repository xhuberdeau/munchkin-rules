import { Component, Input, OnInit } from '@angular/core';
import { IPlayer } from '../../../game-classes/game-types.model';
import { PlayersService } from '../../../services/players.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {
  player: IPlayer;
  constructor(private playersService: PlayersService) { }

  ngOnInit(): void {
    this.playersService.currentPlayer.subscribe((player) => this.player = player);
  }

  onDragStart($event: DragEvent, card): void {
    $event.dataTransfer.setData('text/plain', JSON.stringify(card));
  }
}
