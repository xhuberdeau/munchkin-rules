import { AbstractMonsterLevelAlteratorCard } from './abstract-monster-level-alterator.card';

class BebeCard extends AbstractMonsterLevelAlteratorCard  {
    constructor() {
      super({
        title: 'Bébé',
        levelModifier: -5,
      });
    }
}
