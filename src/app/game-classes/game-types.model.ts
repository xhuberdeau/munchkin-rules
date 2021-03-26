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
  PlayerPowerAlterator = 'playerPowerAlterator',

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
}

const traps: CardCategories[] = [
  CardCategories.MonsterLevelAlterator,
  CardCategories.Curse,
  CardCategories.PlayerLevelAlterator,
  CardCategories.PlayerPowerAlterator];

export interface ITrapCard extends ICard {
  category: CardCategories.PlayerPowerAlterator
    | CardCategories.PlayerLevelAlterator
    | CardCategories.Curse
    | CardCategories.MonsterLevelAlterator
  ;
}

export interface ICombatCardTargettedToMonster extends IEffectCard {
  category: CardCategories.MonsterLevelAlterator;
}


const playerTraps: CardCategories[] = [
  CardCategories.Curse,
  CardCategories.PlayerLevelAlterator,
  CardCategories.PlayerPowerAlterator];

export interface ICombatCardTargettedToPlayer extends IEffectCard {
  category: CardCategories.PlayerLevelAlterator
  | CardCategories.PlayerPowerAlterator
  | CardCategories.Curse;
}

const equipableCards: CardCategories[] = [
  CardCategories.Race,
  CardCategories.Class,
  CardCategories.Equipment
];

export interface IEquipableCard extends ICard {
  category: CardCategories.Race
    | CardCategories.Class
    | CardCategories.Equipment;
}


// card types interfaces

export interface ITreasureCard extends ICard {
  type: CardTypes.Treasure;
}

export interface IMonsterCard extends ICard {
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

export interface ICurseCard extends IDXMCard {
  type: CardTypes.DXM;
  category: CardCategories.Curse;
}

export interface IMonsterLevelAlterator extends IDXMCard {
  type: CardTypes.DXM;
  levelModifier: number;
  category: CardCategories.MonsterLevelAlterator;
}

export interface IPlayerLevelAlterator extends ITreasureCard, IEffectCard {
  type: CardTypes.Treasure;
  category: CardCategories.PlayerLevelAlterator;
  levelModifier: number;
}

export interface IPlayerPowerAlterator extends ITreasureCard, IEffectCard {
  type: CardTypes.Treasure;
  category: CardCategories.PlayerPowerAlterator;
  powerModifier: number;
}

export interface IRaceCard extends IDXMCard {
  type: CardTypes.DXM;
  category: CardCategories.Race;
}

export interface IClassCard extends IDXMCard {
  type: CardTypes.DXM;
  category: CardCategories.Class;
}

export interface IEquipmentCard extends ITreasureCard, IEffectCard {
  powerModifier: number;
  type: CardTypes.Treasure;
  category: CardCategories.Equipment;
  bodyPart: BodyParts;
  objectSize: ObjectSizes;
}

export type PlayerSex = 'Homme' | 'Femme';

export type Inventory = ICard[];
export type EquipedCards = IEquipableCard[];

export interface IPlayer {
  id: string;
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
  alterCombatPower: (powerModifier: number) => IPlayer;
  removeCard: (card: ICard) => IPlayer;
}

export const isEquipableCard = (card: ICard): card is IEquipableCard => equipableCards.includes(card.category);
export const isEquipmentCard = (card: ICard): card is IEquipmentCard => card.category === CardCategories.Equipment;

export const isCombatCardTargettedToMonster = (card: ICard): card is ICombatCardTargettedToMonster => card.category === CardCategories.MonsterLevelAlterator;
export const isCombatCardTargettedToPlayer = (card: ICard): card is ICombatCardTargettedToPlayer => playerTraps.includes(card.category);

export const isTrapCard = (card: ICard): card is ITrapCard => traps.includes(card.category);
export const isEffectCard = (card: ICard): card is IEffectCard => (card as IEffectCard).effectDescription !== undefined;
export const isMonsterCard = (card: ICard): card is IMonsterCard => card.type === CardTypes.Monster;
