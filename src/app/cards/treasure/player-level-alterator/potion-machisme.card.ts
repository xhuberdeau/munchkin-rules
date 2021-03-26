import { AbstractPlayerLevelAlteratorCard } from './abstract-player-level-alterator.card';

export class PotionMachismeCard extends AbstractPlayerLevelAlteratorCard {
  constructor() {
    super({
      title: 'Potion de machisme triomphant',
      description: '+1 niveau',
      levelModifier: 1,
    });
  }
}
