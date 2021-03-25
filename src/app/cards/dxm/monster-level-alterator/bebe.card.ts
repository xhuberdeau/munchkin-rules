import { AbstractMonsterLevelAlteratorCard } from './abstract-monster-level-alterator.card';

export class BebeCard extends AbstractMonsterLevelAlteratorCard  {
    constructor() {
      super({
        title: 'Bébé',
        levelModifier: -5,
      });
    }
}
