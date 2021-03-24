import { AbstractPlayerLevelAlteratorCard } from './abstract-player-level-alterator.card';

class PotionMachismeCard extends AbstractPlayerLevelAlteratorCard {
  constructor() {
    super({
      title: 'Potion de machisme triomphant',
      effectDescription: '+1 niveau',
      levelModifier: 1
    });
  }
}
