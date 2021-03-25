import { BodyParts, ObjectSizes } from '../../../game-classes/game-types.model';
import { AbstractEquipmentCard } from './abstract-equipment.card';

export class ArmureTrapueCard extends AbstractEquipmentCard {
  constructor() {
    super({
      title: 'Armure Trapue',
      effectDescription: '+3 attaque',
      bodyPart: BodyParts.Armor,
      objectSize: ObjectSizes.Small,
      powerModifier: 3
    });
  }
}
