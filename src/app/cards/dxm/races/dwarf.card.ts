import { IPlayer, Races } from '../../../game-classes/game-types.model';
import { AbstractRaceCard } from './abstract-race.card';

export class DwarfCard extends AbstractRaceCard {
  constructor() {
    super({title: 'Nain'});
  }

  applyEffect(player: IPlayer): void {
    player.races = [...player.races, Races.Dwarf];
  }
}
