import { Classes, IPlayer } from '../../../game-classes/game-types.model';
import { AbstractClassCard } from './abstract-class.card';

export class WarriorCard extends AbstractClassCard {
  constructor() {
    super({title: 'Guerrier'});
  }

  applyEffect(player: IPlayer): void {
    player.classes = [...player.classes, Classes.Warrior];
  }
}
