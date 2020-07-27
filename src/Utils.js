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

export const nounVerbAdj = ["back",
"best",
"better",
"bitter",
"broadside",
"clean",
"clear",
"close",
"cod",
"collect",
"counter",
"crisscross",
"damn",
"double",
"down",
"even",
"express",
"fair",
"fast",
"fine",
"firm",
"flush",
"forward",
"free",
"full",
"home",
"jolly",
"last",
"light",
"low",
"o.k.",
"okay",
"out",
"pat",
"plain",
"plumb",
"plump",
"pop",
"prompt",
"quiet",
"right",
"rough",
"round",
"second",
"short",
"solo",
"square",
"steady",
"still",
"tiptoe",
"true",
"upstage",
"well",
"wholesale",
"worst",
"wrong",
"zigzag"]