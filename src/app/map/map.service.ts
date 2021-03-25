import { EventEmitter, Injectable } from '@angular/core';
import { IPlayer, ITrapCard } from '../game-classes/game-types.model';
import { IMapTile, MapType } from '../game-classes/map.model';
import { v4 as uuidv4 } from 'uuid';

export type TrapEvent = {tile: IMapTile, card: ITrapCard};

@Injectable({
  providedIn: 'root'
})
export class MapService {
  private $newTrapEvent: EventEmitter<TrapEvent> = new EventEmitter<TrapEvent>(null);
  newTrap = this.$newTrapEvent.asObservable();
  private mapTilesStackedCards: {[key: string]: {owner: string, card: ITrapCard}[]} = {};

  map: MapType = [
    {id: uuidv4(), name: 'Salle rouge', color: 'red'},
    {id: uuidv4(), name: 'Salle marron', color: 'brown'},
    {id: uuidv4(), name: 'Salle verte', color: 'green'},
    {id: uuidv4(), name: 'Salle bleue', color: 'blue'},
    {id: uuidv4(), name: 'Salle violette', color: 'purple'},
    {id: uuidv4(), name: 'Salle grise', color: 'grey'},
  ];

  constructor() {
    this.map.forEach((mapTile) => {
      this.mapTilesStackedCards[mapTile.id] = [];
    });
  }

  placeCardOnMapTile(player: IPlayer, card: ITrapCard, tile: IMapTile): void {
    this.mapTilesStackedCards[tile.id] = [...this.mapTilesStackedCards[tile.id], {owner: player.id, card}];
    this.$newTrapEvent.next({tile, card});
  }
}
