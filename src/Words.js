import { getRandomNumber, getRandomLetter } from './Utils.js';


// API
const datamuse = require('datamuse');

const setWord = () => {
  datamuse.request(`words?max=1&md=ps&sp=${getRandomLetter()}*`)
    .then((json) => {
      const wordChoice = json[getRandomNumber(json.length)];
      console.log(wordChoice.word)
      console.log(wordChoice.tags)
      return wordChoice;
    });
}

console.log(seed)
// const seedDetails = datamuse.request(`words?sp=${alphabet[getRando(alphabet.length)]}*`)
// .then((json) => {
//   const wordChoice = json[getRando(json.length)]['word'];
//   return wordChoice;
// });

// WORD LISTS
export const words = {
  plural_nouns: ['roses', 'violets', 'airplanes', 'kittens', 'fishes', 'candies', 'programs', 'slingshots', 'lightbulbs', 'rivers', 'mermaids', 'rainbows', 'daisies', 'lap pools', 'cell phones', 'board games'],

  nouns: ['sugar', 'the car', 'airplane', 'the cat', 'the fish', 'candy', 'the code', 'a sword', 'bright light', 'the squid', 'a whale', 'the cloud', 'flour', 'the pool', 'the phone', 'the game'],

  conjunctions: ['and', 'but', 'yet'],

  adjectives: ['big', 'real', 'small', 'tall', 'long', 'drunk', 'ill', 'right', 'cross', 'mad', 'lax', 'mean', 'coy', 'prime', 'bored', 'fair', 'blonde', 'apt', 'low', 'high', 'wise', 'wry', 'huge', 'quick', 'clean', 'drab', 'plain', 'red', 'blue', 'green', 'black', 'dead', 'odd', 'rich', 'shy', 'sly', 'vast', 'brave', 'calm', 'kind', 'rough', 'rogue', 'wide', 'faint', 'loud', 'late', 'swift', 'light', 'weak', 'wet', 'full', 'cool', 'dark', 'dry', 'apt', 'few', 'sweet'],

  rhyming_adjectives: {
    'oo': ['blue', 'new', 'few', 'two', 'true'],
    'ee': ['free', 'three', 'key', 'wee'],
    'ii': ['fly', 'high'],
    'it': ['fit', 'lit'],
    'ay': ['grey', 'okay', 'gay']
  },

  end_phrases: {
    oo: ['are you'], 
    ee: ['is she', 'is he', 'are we'],
    ii: ['am I'], 
    it: ['is it'], 
    ay: ['are they']
  }
}