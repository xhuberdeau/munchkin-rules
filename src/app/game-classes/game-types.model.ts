export enum CardTypes {
  Treasure = 'treasure',
  Monster = 'monster',
  DXM = 'dxm',
}

export enum CardCategories {
  Class = 'class',
  Race = 'race',
  Equipment = 'equipment',
  Curse = 'curse',
  MonsterLevelAlterator = 'monsterLevelAlterator',
  PlayerLevelAlterator = 'playerLevelAlterator',

  // todo: game modifier trésor bleu
  // todo: equipement trésor violet
}

export enum ObjectSizes {
  Big = 'big',
  Small = 'small',
}

export enum Races {
  Dwarf = 'dwarf',
  Halfelin = 'halfelin',
  Elf = 'elf',
}

export enum Classes {
  Priest = 'priest',
  Thief = 'thief',
  Warrior = 'warrior',
  Wizard = 'wizard',
}

export enum BodyParts {
  Head = 'head',
  Armor = 'armor',
  Shoes = 'Shoes',
  OneHand = 'oneHand',
  TwoHands = 'twoHands',
}

export interface ICard {
  id: string;
  type: CardTypes;
  category: CardCategories;
  title: string;
  description?: string;
  isEquipable: boolean;
}

export interface INonEquipableCard extends ICard {
  isEquipable: false;
}

export interface IEquipableCard extends IEffectCard {
  isEquipable: true;
}

// card types interfaces

export interface ITreasureCard extends ICard {
  type: CardTypes.Treasure;
}

export interface IMonsterCard extends INonEquipableCard, ICard {
  isEquipable: false;
  type: CardTypes.Monster;
  level: number;
  treasureCount: number;
  ignorePlayerUnderLevel?: number;
  alterLevel: (levelModifier: number) => IMonsterCard;
}

export interface IDXMCard extends IEffectCard {
  type: CardTypes.DXM;
}

export interface IEffectCard extends ICard {
  applyEffect: (...args: any[]) => any;
  effectDescription: string;
}

// categories card

export interface ICurseCard extends INonEquipableCard, IDXMCard {
  isEquipable: false;
  type: CardTypes.DXM;
  category: CardCategories.Curse;
}

export interface IMonsterLevelAlterator extends INonEquipableCard, IDXMCard {
  isEquipable: false;
  type: CardTypes.DXM;
  levelModifier: number;
  category: CardCategories.MonsterLevelAlterator;
}

export interface IPlayerLevelAlterator extends INonEquipableCard, ITreasureCard, IEffectCard {
  isEquipable: false;
  type: CardTypes.Treasure;
  category: CardCategories.PlayerLevelAlterator;
  levelModifier: number;
}

export interface IRaceCard extends IDXMCard, IEquipableCard {
  type: CardTypes.DXM;
  category: CardCategories.Race;
  isEquipable: true;
}

export interface IClassCard extends IDXMCard, IEquipableCard {
  type: CardTypes.DXM;
  category: CardCategories.Class;
  isEquipable: true;
}

export interface IEquipmentCard extends ITreasureCard, IEffectCard, IEquipableCard {
  powerModifier: number;
  type: CardTypes.Treasure;
  category: CardCategories.Equipment;
  bodyPart: BodyParts;
  objectSize: ObjectSizes;
  isEquipable: true;
}

export type PlayerSex = 'Homme' | 'Femme';

export type Inventory = ICard[];
export type EquipedCards = IEffectCard[];

export interface IPlayer {
  races: Races[];
  classes: Classes[];
  power: number;
  combatPower: number;
  name: string;
  level: number;
  health: number;
  inventory: Inventory;
  equipedCards: EquipedCards;
  sex: PlayerSex;
  order: number;
  getEquipableCards: () => ICard[];
  equipCard: (card: ICard) => IPlayer;
  addCardToInventory: (card: ICard) => IPlayer;
  loseArmor: () => IPlayer;
  loseShoes: () => IPlayer;
  loseLevel: (levelCount?: number) => IPlayer;
  earnLevel: (levelCount?: number) => IPlayer;
  loseSmallObject: () => IPlayer;
  loseBigObject: () => IPlayer;
  loseAllClasses: () => IPlayer;
  loseAllRaces: () => IPlayer;
  alterPower: (powerModifier: number) => IPlayer;
}

export const isEquipableCard = (card: ICard): card is IEquipableCard => card.isEquipable;
export const isEquipmentCard = (card: ICard): card is IEquipmentCard => card.category === CardCategories.Equipment;
export const isEffectCard = (card: ICard): card is IEffectCard => (card as IEffectCard).applyEffect !== undefined;
export const isMonsterCard = (card: ICard): card is IMonsterCard => card.type === CardTypes.Monster;
