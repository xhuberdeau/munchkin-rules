import { BodyParts, CardCategories, IEquipmentCard, IPlayer, ObjectSizes } from '../../../game-classes/game-types.model';
import { AbstractTreasureEffectCard } from '../abstract-treasure-effect.card';

export abstract class AbstractEquipmentCard extends AbstractTreasureEffectCard implements IEquipmentCard {
  category: CardCategories.Equipment = CardCategories.Equipment;
  bodyPart: BodyParts;
  objectSize: ObjectSizes;
  powerModifier: number;

  constructor(cardConfig: Partial<AbstractEquipmentCard>) {
    super(cardConfig);
    this.effectDescription = `(+${this.powerModifier} attaque au joueur)`;
  }

  applyEffect(player: IPlayer): IPlayer {
    return player.alterPower(this.powerModifier);
  }
}
