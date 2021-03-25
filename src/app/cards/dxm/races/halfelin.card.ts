import { IPlayer, Races } from '../../../game-classes/game-types.model';
import { AbstractRaceCard } from './abstract-race.card';

export class HalfelinCard extends AbstractRaceCard {
  constructor() {
    super({title: 'Halfelin'});
  }

  applyEffect(player: IPlayer): void {
    player.races = [...player.races, Races.Halfelin];
  }
}
