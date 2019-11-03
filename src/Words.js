import { getRando } from './Utils.js';


// API
const datamuse = require('datamuse');
// datamuse.request('words?ml=ringing in the ears')
//   .then((json) => {
//     console.log(json);
//     //do it!
//   });

// CREATE SEED
const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
const seed = datamuse.request(`words?md=ps&sp=${alphabet[getRando(alphabet.length)]}*`)
  .then((json) => {
    const nouns = json.filter( word => {
      return word.tags[0] == 'n' && word.numSyllables == 2;
    })
    const myWord = nouns[getRando(json.length)];
    console.log(myWord)
    console.log(myWord.split(''))
    let pluralized = myWord.split('');
    switch(pluralized[(pluralized.length-1)]) {
      case 'x':
      case 's':
      case 'sh':
      case 'ch':
        pluralized = myWord + 'es'
        break;
      case 'y':
        if(
            pluralized[(pluralized.length-2)] == 'a' ||
            pluralized[(pluralized.length-2)] == 'e' ||
            pluralized[(pluralized.length-2)] == 'i' ||
            pluralized[(pluralized.length-2)] == 'o' ||
            pluralized[(pluralized.length-2)] == 'u'
          ) {
            pluralized = myWord + 's'
          } else {
            pluralized = pluralized.pop().join('') + 'ies';
          }
        break;
      default: 
       pluralized = myWord + 's'
    }
    console.log(myWord, pluralized)

    // everything else +s
    // s, sh, ch, x +es
    // (vowel)y +s
    // (consant)y -y+ies
    

    // const wordChoice = json[getRando(json.length)];
    // console.log(wordChoice.word)
    // console.log(wordChoice.tags)
    // console.log(wordChoice.numSyllables)
    // return wordChoice;
  });

// console.log(seed)
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