import { BodyParts, ObjectSizes } from '../../../game-classes/game-types.model';
import { AbstractEquipmentCard } from './abstract-equipment.card';

export class ArmureGluante extends AbstractEquipmentCard {
  constructor() {
    super({
      title: 'Armure gluante',
      effectDescription: '+1 attaque',
      bodyPart: BodyParts.Armor,
      objectSize: ObjectSizes.Small,
      powerModifier: 1,
    });
  }
}
