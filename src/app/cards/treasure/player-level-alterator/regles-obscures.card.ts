import { AbstractPlayerLevelAlteratorCard } from './abstract-player-level-alterator.card';

export class ReglesObscuresCard extends AbstractPlayerLevelAlteratorCard {
  constructor() {
    super({
      title: 'Invocation de règles obscures',
      effectDescription: '+1 niveau',
      levelModifier: 1,
    });
  }
}
