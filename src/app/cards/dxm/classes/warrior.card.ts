import { Classes, IPlayer } from '../../../game-classes/game-types.model';
import { Player } from '../../../game-classes/player.class';
import { AbstractClassCard } from './abstract-class.card';

export class WarriorCard extends AbstractClassCard {
  constructor() {
    super({title: 'Guerrier'});
  }

  applyEffect(player: IPlayer): IPlayer {
    return new Player({...player, classes: [...player.classes, Classes.Warrior]});
  }
}
