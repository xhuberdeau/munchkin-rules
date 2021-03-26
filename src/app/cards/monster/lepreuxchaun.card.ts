import { AbstractMonsterCard } from './abstract-monster.card';

export class LepreuxchaunCard extends AbstractMonsterCard {
  constructor() {
    super({
      title: 'Lepreuxchaun',
      treasureCount: 2,
      level: 4
    });
  }
}
