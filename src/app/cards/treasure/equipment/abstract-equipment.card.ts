import { BodyParts, CardCategories, CardTypes, IEquipmentCard, IPlayer, ObjectSizes } from '../../../game-classes/game-types.model';
import { AbstractEffectCard } from '../../abstract-effect.card';
import { AbstractTreasureEffectCard } from '../abstract-treasure-effect.card';
import { AbstractTreasureCard } from '../abstract-treasure.card';

export abstract class AbstractEquipmentCard extends AbstractTreasureEffectCard implements IEquipmentCard {
  category: CardCategories.Equipment = CardCategories.Equipment;
  bodyPart: BodyParts;
  objectSize: ObjectSizes;
  isEquipable: true = true;
  powerModifier: number;

  constructor(cardConfig: Partial<AbstractEquipmentCard>) {
    super(cardConfig);
  }

  applyEffect(player: IPlayer): IPlayer {
    return player.alterPower(this.powerModifier);
  }
}
