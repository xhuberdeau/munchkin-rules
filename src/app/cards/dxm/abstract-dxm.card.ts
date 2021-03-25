import { CardTypes, IDXMCard } from '../../game-classes/game-types.model';
import { AbstractCard } from '../abstract-card.class';
import { AbstractEffectCard } from '../abstract-effect.card';
import { PriestCard } from './classes/priest.card';
import { ThiefCard } from './classes/thief.card';
import { WarriorCard } from './classes/warrior.card';
import { WizardCard } from './classes/wizard.card';
import { LoseArmorCard } from './curses/lose-armor.card';
import { LoseBigEquipmentCard } from './curses/lose-big-equipment.card';
import { LoseClassesCard } from './curses/lose-classes.card';
import { LoseLevelCard } from './curses/lose-level.card';
import { LoseRacesCard } from './curses/lose-races.card';
import { LoseShoesCard } from './curses/lose-shoes.card';
import { LoseSmallEquipmentCard } from './curses/lose-small-equipment.card';
import { BebeCard } from './monster-level-alterator/bebe.card';
import { IntelligentCard } from './monster-level-alterator/intelligent.card';
import { VenerableCard } from './monster-level-alterator/venerable.card';
import { DwarfCard } from './races/dwarf.card';
import { ElfCard } from './races/elf.card';
import { HalfelinCard } from './races/halfelin.card';

export abstract class AbstractDxmCard extends AbstractEffectCard implements IDXMCard {
  type: CardTypes.DXM  = CardTypes.DXM;
  constructor(cardConfig: Partial<AbstractDxmCard>) {
    super(cardConfig);
  }
}
