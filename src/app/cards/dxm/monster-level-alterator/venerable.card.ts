import { AbstractMonsterLevelAlteratorCard } from './abstract-monster-level-alterator.card';

export class VenerableCard extends AbstractMonsterLevelAlteratorCard  {
    constructor() {
      super({
        title: 'Vénérable',
        levelModifier: 10,
        description: 'Le monstre ciblé gagne 10 niveaux',
      });
    }
}
