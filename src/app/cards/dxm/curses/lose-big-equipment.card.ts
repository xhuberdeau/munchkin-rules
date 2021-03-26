import { IPlayer } from '../../../game-classes/game-types.model';
import { AbstractCurseCard } from './abstract-curse.card';

export class LoseBigEquipmentCard extends AbstractCurseCard {
  constructor() {
    super({title: 'Malédiction !\nGrosse perte', description: 'Perdez un gros objet aléatoire', effectDescription: '(perd gros objet)'});
  }

  applyEffect(player: IPlayer): IPlayer {
    return player.loseBigObject();
  }
}
