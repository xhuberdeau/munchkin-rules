import { AbstractMonsterLevelAlteratorCard } from './abstract-monster-level-alterator.card';

export class IntelligentCard extends AbstractMonsterLevelAlteratorCard  {
    constructor() {
      super({
        title: 'Intelligent',
        levelModifier: 5,
        description: 'Le monstre ciblé gagne 5 niveaux',
      });
    }
}
