import { AbstractMonsterCard } from './abstract-monster.card';

export class PitbullCard extends AbstractMonsterCard {
  constructor() {
    super({
      title: 'Pit Bull',
      treasureCount: 1,
      level: 2
    });
  }
}
