import { AbstractMonsterLevelAlteratorCard } from './abstract-monster-level-alterator.card';

export class BebeCard extends AbstractMonsterLevelAlteratorCard  {
    constructor() {
      super({
        title: 'Bébé',
        levelModifier: -5,
        description: 'Le monstre ciblé perd 5 niveaux',
      });
    }
}
