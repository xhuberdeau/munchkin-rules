import { Classes, IPlayer } from '../../../game-classes/game-types.model';
import { AbstractClassCard } from './abstract-class.card';

export class ThiefCard extends AbstractClassCard {
  constructor() {
    super({title: 'Voleur'});
  }

  applyEffect(player: IPlayer): void {
    player.classes = [...player.classes, Classes.Thief];
  }
}
