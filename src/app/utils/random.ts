export const getRandomInList = <T>(list: T[]): T => list[Math.floor(Math.random() * list.length)];
export const throwDice = (): number => Math.floor(Math.random() * 6) + 1;
