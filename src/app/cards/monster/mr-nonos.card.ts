import { AbstractMonsterCard } from './abstract-monster.card';

export class MrNonosCard extends AbstractMonsterCard {
  constructor() {
    super({
      title: 'Mr. Nonos',
      treasureCount: 1,
      level: 2
    });
  }
}
