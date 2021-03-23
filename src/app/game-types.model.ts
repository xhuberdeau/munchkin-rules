export enum CardTypes {
  Equipment = 'equipment',
}

export interface Card {
  type: CardTypes;
  title: string;
  description: string;
}

export type PlayerSex = 'Homme' | 'Femme';

export type Inventory = Card[];
export type EquipedCards = Card[];

export interface Hero {
  name: string;
  health: number;
  inventory: Inventory;
  equipedCards: EquipedCards;
  sex: PlayerSex;
}

export interface Player extends Hero {
  turn: number;
}

export interface HeroCard extends Card {
  apply: (hero: Hero) => Hero;
}
