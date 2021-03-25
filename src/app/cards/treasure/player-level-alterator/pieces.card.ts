import { AbstractPlayerLevelAlteratorCard } from './abstract-player-level-alterator.card';

export class PiecesCard extends AbstractPlayerLevelAlteratorCard {
  constructor() {
    super({
      title: '1000 pièces d\'or',
      description: '+1 niveau',
      levelModifier: 1,
    });
  }
}
