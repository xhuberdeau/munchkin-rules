import { Classes, IPlayer } from '../../../game-classes/game-types.model';
import { AbstractClassCard } from './abstract-class.card';

class WizardCard extends AbstractClassCard {
  constructor() {
    super({title: 'Magicien'});
  }

  applyEffect(player: IPlayer): void {
    player.classes = [...player.classes, Classes.Wizard];
  }
}
