export enum EventTypes {
  JoinGame = 'joinGame',
  GameStart = 'gameStart',
  EnterDungeonRoom = 'enterDungeonRoom',
  EquipCard = 'dropCardInInventory',
  ChooseRoom = 'chooseRoom',
  EnterCombat = 'enterCombat',
  LeaveCombat = 'leaveCombat',
  UseCombatCard = 'useCombatCard',
  PlaceCardOnMapTile = 'placeCardOnMapTile',
}

export interface IEvent {
  type: EventTypes;
  [key: string]: any;
}
