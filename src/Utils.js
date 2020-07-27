export function getRandomNumber(limit, start = 0) {
  const num = Math.floor(Math.random()*(limit-start))+start;
  return num;
}

export const getDate = () => {
  return new Date().getYear()-100+2000;
}

export const getRandomLetter = blockList => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
  return alphabet[getRandomNumber(alphabet.length)]
}