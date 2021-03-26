import { Component, OnInit } from '@angular/core';
import { EventTypes } from '../../../../game-classes/events.model';
import { IPlayer, isTrapCard, ITrapCard } from '../../../../game-classes/game-types.model';
import { IMapTile, MapType } from '../../../../game-classes/map.model';
import { EventDispatcherService } from '../../../../services/event-dispatcher.service';
import { PlayersService } from '../../../../services/players.service';
import { MapService } from './map.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  map: MapType = [];
  private player: IPlayer;
  trapsByMap: {[key: string]: ITrapCard[]} = {};
  constructor(private mapService: MapService, private eventDispatcherService: EventDispatcherService, private playersService: PlayersService) { }

  ngOnInit(): void {
    this.map = this.mapService.map;
    this.prepareTrapsBuMapTiles();

    this.playersService.currentPlayer.subscribe((player) => {
      if (player.id !== this.player?.id) {
        // reset traps map to hide traps from other players
        this.prepareTrapsBuMapTiles();
        this.player = player;
      }
    });

    this.mapService.newTrap.subscribe((trap) => {
      const tileId = trap.tile.id;
      this.trapsByMap[tileId] = [...this.trapsByMap[tileId], trap.card];
    });
  }

  onDrop($event: DragEvent, tile: IMapTile): void {
    const data = $event.dataTransfer.getData('text/plain');
    if (data) {
      const card = JSON.parse(data);
      if (isTrapCard(card)) {
        this.eventDispatcherService.dispatchEvent({ type: EventTypes.PlaceCardOnMapTile, card, tile });
      } else {
        alert('Seules les malédictions et les cartes [COMBAT] peuvent être placées dans une salle');
      }
    }
  }

  allowDrop($event: DragEvent): void {
    $event.preventDefault();
  }

  chooseTile(tile: IMapTile): void {
    this.eventDispatcherService.dispatchEvent({ type: EventTypes.ChooseRoom, tile});
  }

  roomIsAvailable(tile: IMapTile): boolean {
    return !this.mapService.isRoomOccupied(tile);
  }

  private prepareTrapsBuMapTiles(): void {
    this.map.forEach((tile) => {
      this.trapsByMap[tile.id] = [];
    });
  }
}
