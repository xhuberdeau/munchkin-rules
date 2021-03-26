import { AbstractMonsterCard } from './abstract-monster.card';

export class BinoclardHurleurCard extends AbstractMonsterCard {
  constructor() {
    super({
      title: 'Binoclard Hurleur',
      treasureCount: 2,
      level: 6
    });
  }
}
