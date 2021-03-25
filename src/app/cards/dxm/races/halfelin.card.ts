import { IPlayer, Races } from '../../../game-classes/game-types.model';
import { Player } from '../../../game-classes/player.class';
import { AbstractRaceCard } from './abstract-race.card';

export class HalfelinCard extends AbstractRaceCard {
  constructor() {
    super({title: 'Halfelin'});
  }

  applyEffect(player: IPlayer): IPlayer {
    return new Player({...player, races: [...player.races, Races.Halfelin]});
  }
}
