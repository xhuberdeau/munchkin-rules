import { IPlayer, Races } from '../../../game-classes/game-types.model';
import { AbstractRaceCard } from './abstract-race.card';

class ElfCard extends AbstractRaceCard {
  constructor() {
    super({title: 'Elfe'});
  }

  applyEffect(player: IPlayer): void {
    player.races = [...player.races, Races.Elf];
  }
}
