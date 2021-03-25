import { IPlayer } from '../../../game-classes/game-types.model';
import { AbstractCurseCard } from './abstract-curse.card';

export class LoseArmorCard extends AbstractCurseCard {
  constructor() {
    super({description: 'Perdez l\'armure que vous portez'});
  }

  applyEffect(player: IPlayer): IPlayer {
    return player.loseArmor();
  }
}
