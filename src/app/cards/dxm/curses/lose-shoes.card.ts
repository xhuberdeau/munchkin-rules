import { IPlayer } from '../../../game-classes/game-types.model';
import { AbstractCurseCard } from './abstract-curse.card';

export class LoseShoesCard extends AbstractCurseCard {
  constructor() {
    super({effectDescription: 'Perdez les chaussures que vous portez'});
  }

  applyEffect(player: IPlayer): IPlayer {
    return player.loseShoes();
  }
}
