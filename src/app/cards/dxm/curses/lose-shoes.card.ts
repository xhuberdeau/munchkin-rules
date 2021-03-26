import { IPlayer } from '../../../game-classes/game-types.model';
import { AbstractCurseCard } from './abstract-curse.card';

export class LoseShoesCard extends AbstractCurseCard {
  constructor() {
    super({description: 'Perdez les chaussures que vous portez', effectDescription: '(perd chaussures)'});
  }

  applyEffect(player: IPlayer): IPlayer {
    return player.loseShoes();
  }
}
