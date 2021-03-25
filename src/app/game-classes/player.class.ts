import {
  BodyParts,
  Classes,
  EquipedCards,
  ICard, IEffectCard, IEquipableCard,
  IEquipmentCard,
  Inventory,
  IPlayer, isEquipableCard, isEquipmentCard,
  ObjectSizes,
  PlayerSex,
  Races
} from './game-types.model';
import { getRandomInList } from '../utils/random';
import { v4 as uuidv4 } from 'uuid';

export class Player implements IPlayer {
  equipedCards: EquipedCards = [];
  health = 3;
  inventory: Inventory = [];
  name: string;
  sex: PlayerSex;
  order: number;
  races: Races[] = [];
  classes: Classes[] = [];
  level = 1;
  power = 1;
  combatPower = 1;
  id: string;

  constructor(playerConfig: Partial<IPlayer>) {
    Object.assign(this, playerConfig);
    this.id = uuidv4();
  }

  getEquipableCards(): IEquipableCard[] {
    return this.inventory.filter((isEquipableCard));
  }

  equipCard(card: IEquipableCard): IPlayer {
    return new Player({
      ...this.useCard(card),
      equipedCards: [...this.equipedCards, card],
      inventory: this.inventory.filter((c) => c.id !== card.id)}
    );
  }

  addCardToInventory(card: ICard): IPlayer {
    return new Player({...this, inventory: [...this.inventory, card]});
  }

  alterPower(powerModifier: number): IPlayer {
    const nextPower = this.power + powerModifier;
    return new Player({...this, power: nextPower >= 1 ? nextPower : 1});
  }

  alterCombatPower(powerModifier: number): IPlayer {
    const nextPower = this.combatPower + powerModifier;
    return new Player({...this, combatPower: nextPower >= 1 ? nextPower : 1});
  }

  loseArmor(): IPlayer {
    this.getEquipments()
      .filter((c: IEquipmentCard) => c.bodyPart === BodyParts.Armor)
      .forEach((armor) => {
        this.syncPlayerStatsFollowingEquipmentLoss(armor);
      })
    ;

    return new Player({...this, equipedCards: this.getEquipments()
        .filter((c: IEquipmentCard) => c.bodyPart !== BodyParts.Armor)
    });
  }

  loseShoes(): IPlayer {
   this.getEquipments()
      .filter((c: IEquipmentCard) => c.bodyPart === BodyParts.Shoes)
      .forEach((shoes) => {
        this.syncPlayerStatsFollowingEquipmentLoss(shoes);
      })
   ;

   return new Player({...this, equipedCards: this.getEquipments()
        .filter((c: IEquipmentCard) => c.bodyPart !== BodyParts.Shoes)
    });
  }

  loseLevel(levelCount: number = 1): IPlayer {
    const rawNextLevel = this.level - levelCount;
    const nextLevel = rawNextLevel >= 1 ? rawNextLevel : 1;
    const levelDiff = this.level - nextLevel;

    return new Player({...this,
      level: nextLevel,
      power: this.power - levelDiff,
      combatPower: this.combatPower - levelDiff
    });
  }

  earnLevel(levelCount: number = 1): IPlayer {
    return new Player({
      ...this,
      level: this.level + levelCount,
      power: this.power + levelCount,
      combatPower: this.combatPower + levelCount
    });
  }

  loseSmallObject(): IPlayer {
    const smallObjects = this.getEquipments().filter((c) => c.objectSize === ObjectSizes.Small);
    if (smallObjects.length === 0) {
      return this;
    }
    const smallObject = getRandomInList<IEquipmentCard>(smallObjects);
    return new Player({...this, equipedCards: this.equipedCards.filter((c) => c !== smallObject) });
  }

  loseBigObject(): IPlayer {
    const bigObjects = this.getEquipments().filter((c) => c.objectSize === ObjectSizes.Big);
    if (bigObjects.length === 0) {
      return this;
    }
    const bigObject = getRandomInList<IEquipmentCard>(bigObjects);
    return new Player({...this, equipedCards: this.equipedCards.filter((c) => c !== bigObject) });
  }

  loseAllClasses(): IPlayer {
    return new Player({...this, classes: []});
  }

  loseAllRaces(): IPlayer {
    return new Player({...this, races: []});
  }

  private syncPlayerStatsFollowingEquipmentLoss(equipment: IEquipmentCard): void {
    this.power -= equipment.powerModifier;
    this.combatPower -= equipment.powerModifier;
  }

  private useCard(card: IEffectCard): IPlayer {
     return card.applyEffect(this);
  }

  private getEquipments(): IEquipmentCard[] {
    return this.equipedCards.filter((isEquipmentCard));
  }

  removeCard(card: ICard): IPlayer {
    return new Player({...this, inventory: this.inventory.filter((c) => c.id !== card.id)});
  }
}
