export const getRandomInList = <T>(list: T[]): T => list[Math.floor(Math.random() * list.length)];
