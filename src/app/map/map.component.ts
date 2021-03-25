import { Component, OnInit } from '@angular/core';
import { EventTypes } from '../game-classes/events.model';
import { isTrapCard, ITrapCard } from '../game-classes/game-types.model';
import { IMapTile, MapType } from '../game-classes/map.model';
import { EventDispatcherService } from '../services/event-dispatcher.service';
import { MapService } from './map.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  map: MapType = [];
  trapsByMap: {[key: string]: ITrapCard[]} = {};
  constructor(private mapService: MapService, private eventDispatcherService: EventDispatcherService) { }

  ngOnInit(): void {
    this.map = this.mapService.map;
    this.map.forEach((tile) => {
      this.trapsByMap[tile.id] = [];
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
        alert('Vous ne pouvez pas placer cette carte dans la salle');
      }
    }
  }

  allowDrop($event: DragEvent): void {
    $event.preventDefault();
  }
}
