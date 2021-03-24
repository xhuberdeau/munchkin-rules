import { Classes, IPlayer } from '../../../game-classes/game-types.model';
import { AbstractClassCard } from './abstract-class.card';

class PriestCard extends AbstractClassCard {
  constructor() {
    super({title: 'Prêtre'});
  }

  applyEffect(player: IPlayer): void {
    player.classes = [...player.classes, Classes.Priest];
  }
}
