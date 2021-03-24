import { AbstractPlayerLevelAlteratorCard } from './abstract-player-level-alterator.card';

class PiecesCard extends AbstractPlayerLevelAlteratorCard {
  constructor() {
    super({
      title: '1000 pièces d\'or',
      effectDescription: '+1 niveau',
      levelModifier: 1,
    });
  }
}
