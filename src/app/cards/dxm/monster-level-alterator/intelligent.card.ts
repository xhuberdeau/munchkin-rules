import { AbstractMonsterLevelAlteratorCard } from './abstract-monster-level-alterator.card';

class IntelligentCard extends AbstractMonsterLevelAlteratorCard  {
    constructor() {
      super({
        title: 'Intelligent',
        levelModifier: 5,
      });
    }
}
