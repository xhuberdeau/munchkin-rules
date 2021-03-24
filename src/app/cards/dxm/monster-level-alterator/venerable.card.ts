import { AbstractMonsterLevelAlteratorCard } from './abstract-monster-level-alterator.card';

class VenerableCard extends AbstractMonsterLevelAlteratorCard  {
    constructor() {
      super({
        title: 'Vénérable',
        levelModifier: 10,
      });
    }
}
