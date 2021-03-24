import { AbstractMonsterCard } from './abstract-monster.card';

export class OrquesCard extends AbstractMonsterCard {
  constructor() {
    super({
      title: '3872 Orques',
      treasureCount: 3,
      level: 10
    });
  }
}
