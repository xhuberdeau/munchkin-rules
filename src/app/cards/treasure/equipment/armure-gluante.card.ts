import { BodyParts, ObjectSizes } from '../../../game-classes/game-types.model';
import { AbstractEquipmentCard } from './abstract-equipment.card';

export class ArmureGluanteCard extends AbstractEquipmentCard {
  constructor() {
    super({
      title: 'Armure gluante',
      bodyPart: BodyParts.Armor,
      objectSize: ObjectSizes.Small,
      powerModifier: 1,
    });
  }
}
