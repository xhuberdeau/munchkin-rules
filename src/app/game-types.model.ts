export interface Card {
  type: 'equipment';
  title: string;
  description: string;
}

export type PlayerSex = 'Homme' | 'Femme';

export type Inventory = Card[];

export interface Hero {
  name: string;
  health: number;
  inventory: Inventory;
  sex: PlayerSex;
}

export interface Player extends Hero {
  turn: number;
}

export interface HeroCard extends Card {
  apply: (hero: Hero) => Hero;
}
