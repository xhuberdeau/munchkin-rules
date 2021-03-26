import { AbstractMonsterCard } from './abstract-monster.card';

export class MucusBaveuxCard extends AbstractMonsterCard {
  constructor() {
    super({
      title: 'Mucus Baveux',
      treasureCount: 1,
      level: 10
    });
  }
}
