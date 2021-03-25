import { IPlayer } from '../../../game-classes/game-types.model';
import { AbstractCurseCard } from './abstract-curse.card';

export class LoseSmallEquipmentCard extends AbstractCurseCard {
  constructor() {
    super({title: 'Malédiction !\nPetite perte', description: 'Perdez un petit objet aléatoire'});
  }

  applyEffect(player: IPlayer): IPlayer {
    return player.loseSmallObject();
  }
}
