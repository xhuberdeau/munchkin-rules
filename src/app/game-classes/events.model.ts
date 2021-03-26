export enum EventTypes {
  JoinGame = 'joinGame',
  GameStart = 'gameStart',
  EquipCard = 'dropCardInInventory',
  ChooseRoom = 'chooseRoom',
  EnterCombat = 'enterCombat',
  LeaveCombat = 'leaveCombat',
  UseCombatCardOnMonster = 'useCombatCardOnMonster',
  UseCombatCardOnPlayer = 'useCombatCardOnPlayer',
  PlaceCardOnMapTile = 'placeCardOnMapTile',
  ThrowCombatDice = 'throwCombatDice',
  WinCombat = 'winCombat',
}

export interface IEvent {
  type: EventTypes;
  [key: string]: any;
}
