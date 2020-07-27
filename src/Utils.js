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

export const shuffleArray = array => {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
}

export const nounVerbAdj1 = ["back",
"best",
"clean",
"clear",
"close",
"cod",
"damn",
"down",
"fair",
"fast",
"fine",
"firm",
"flush",
"free",
"full",
"home",
"last",
"light",
"low",
"out",
"pat",
"plain",
"plumb",
"plump",
"pop",
"right",
"rough",
"round",
"short",
"square",
"still",
"true",
"well",
"worst",
"wrong"]

export const nounVerbAdj2 = ["back",
"better",
"bitter",
"broadside",
"collect",
"counter",
"crisscross",
"double",
"even",
"express",
"forward",
"jolly",
"quiet",
"second",
"solo",
"steady",
"tiptoe",
"upstage",
"wholesale",
"zigzag"]