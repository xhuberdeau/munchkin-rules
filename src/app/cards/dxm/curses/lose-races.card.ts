import { IPlayer } from '../../../game-classes/game-types.model';
import { AbstractCurseCard } from './abstract-curse.card';

export class LoseRacesCard extends AbstractCurseCard {
  constructor() {
    super({effectDescription: 'Perdez toutes vos races'});
  }

  applyEffect(player: IPlayer): IPlayer {
    return player.loseAllRaces();
  }
}
