import { IPlayer } from '../../../game-classes/game-types.model';
import { AbstractCurseCard } from './abstract-curse.card';

export class LoseLevelCard extends AbstractCurseCard {
  constructor() {
    super({effectDescription: 'Perdez 1 niveau'});
  }

  applyEffect(player: IPlayer): IPlayer {
    return player.loseLevel();
  }
}
