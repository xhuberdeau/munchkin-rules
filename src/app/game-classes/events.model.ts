export enum EventTypes {
  JoinGame = 'joinGame',
  GameStart = 'gameStart',
  EquipCard = 'dropCardInInventory',
  ChooseRoom = 'chooseRoom',
  EnterCombat = 'enterCombat',
  LeaveCombat = 'leaveCombat',
  UseCombatCardOnMonster = 'useCombatCardOnMonster',
  UseCombatCardOnPlayer = 'useCombatCardOnPlayer',
  UsePlayerLevelBooster = 'usePlayerLevelBooster',
  PlaceCardOnMapTile = 'placeCardOnMapTile',
  ThrowCombatDice = 'throwCombatDice',
  WinCombat = 'winCombat',
  LoseCombat = 'loseCombat',
}

export interface IEvent {
  type: EventTypes;
  [key: string]: any;
}
