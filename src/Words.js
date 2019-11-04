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
export const plural_nouns = datamuse.request(`words?md=ps&sp=${alphabet[getRando(alphabet.length)]}*`)
  .then((json) => {
    // nouns only
    let nouns = json.filter( word => {
       return word && word.tags && word.tags[0] === 'n';
    })
    nouns = nouns.filter( word => {
      return word && word.numSyllables && word.numSyllables == 2;
    })
    nouns = nouns.filter( item =>{
      let word = item.word;
      switch(word[word.length-1]) {
        case 'x':
        case 'z':
        case 's':
        case 'sh':
        case 'ch':
        case 'e':
        case 'on':
          return false;
      }
      return true;
    })
    nouns = nouns.map( item => {
      let word = item.word.split('');
      if(word[word.length-1] == 'y') {
        switch(word[(word.length-2)]) {
          case 'a':
          case 'e':
          case 'i':
          case 'o':
          case 'u':
            word = word.join('') + 's';
            break;
          default:
            word.pop();
            word = word.join('') + 'ies';
        } 
      } else {
        word = word.join('') + 's';
      }
      return word;
    });
    // console.log(nouns)
  });

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