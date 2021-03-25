export enum EventTypes {
  JoinGame = 'joinGame',
  GameStart = 'gameStart',
  EnterDungeonRoom = 'enterDungeonRoom',
  DropCardInInventory = 'dropCardInInventory',
  ChooseRoom = 'chooseRoom',
  EnterCombat = 'enterCombat',
  LeaveCombat = 'leaveCombat',
  UseCombatCard = 'useCombatCard',
}

export interface IEvent {
  type: EventTypes;
  [key: string]: any;
}
