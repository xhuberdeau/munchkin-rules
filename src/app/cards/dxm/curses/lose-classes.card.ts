import { IPlayer } from '../../../game-classes/game-types.model';
import { AbstractCurseCard } from './abstract-curse.card';

export class LoseClassesCard extends AbstractCurseCard {
  constructor() {
    super({effectDescription: 'Perdez toutes vos classes'});
  }

  applyEffect(player: IPlayer): IPlayer {
    return player.loseAllClasses();
  }
}
