import { IPlayer } from '../../../game-classes/game-types.model';
import { AbstractCurseCard } from './abstract-curse.card';

export class LoseLevelCard extends AbstractCurseCard {
  constructor() {
    super({description: 'Perdez 1 niveau', effectDescription: '(-1 lvl)'});
  }

  applyEffect(player: IPlayer): IPlayer {
    return player.loseLevel();
  }
}
