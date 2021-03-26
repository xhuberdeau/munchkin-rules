import { IPlayer } from '../../../game-classes/game-types.model';
import { AbstractCurseCard } from './abstract-curse.card';

export class LoseRacesCard extends AbstractCurseCard {
  constructor() {
    super({description: 'Perdez toutes vos races', effectDescription: '(perd races)'});
  }

  applyEffect(player: IPlayer): IPlayer {
    return player.loseAllRaces();
  }
}
