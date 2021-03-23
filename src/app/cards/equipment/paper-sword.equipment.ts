import { Card, CardTypes } from '../../game-types.model';

export class PaperSwordEquipment implements Card {
  title = 'Épée en papier';
  description = 'Une épée écologique multi-usage : dessiner, faire des avions en papier, se battre contre des enfants, à vous de voir !';
  type = CardTypes.Equipment;
}
