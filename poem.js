/*
plural_noun1 are adjective1
plural_noun2 are adjective_rhyme
noun is adjective3
cojunction so ' are you / is she / is he / are we / am I / is it / are they '
*/


const plural_nouns = ['roses', 'violets', 'airplanes', 'kittens', 'fishes', 'candies', 'programs', 'slingshots', 'lightbulbs', 'rivers', 'mermaids', 'rainbows', 'daisies', 'lap pools', 'cell phones', 'board games'];
const nouns = ['sugar', 'the car', 'airplane', 'the cat', 'the fish', 'candy', 'the code', 'a sword', 'bright light', 'the squid', 'a whale', 'the cloud', 'flour', 'the pool', 'the phone', 'the game'];
const conjunctions = ['and', 'but', 'or', 'so,', 'yet'];
const end_phrases = [ {oo: ['are you']}, {ee: ['is she', 'is he', 'are we']}, {ii: ['am I']}, {it: ['is it']}, {ay: ['are they']} ];
const adjectives = ['big', 'real', 'small', 'tall', 'long', 'drunk', 'ill', 'right', 'like', 'cross', 'mad', 'lax', 'mean', 'coy', 'prime', 'sass', 'bored', 'fair', 'blonde', 'apt', 'low', 'high', 'wise', 'wry', 'huge', 'quick', 'clean', 'drab', 'plain', 'red', 'blue', 'green', 'black', 'dead', 'odd', 'rich', 'shy', 'sly', 'vast', 'brave', 'calm', 'kind', 'rough', 'rogue', 'wide', 'faint', 'loud', 'late', 'swift', 'light', 'weak', 'wet', 'full', 'cool', 'dark', 'dry', 'apt', 'few', 'sweet'];
const adjectives_oo = ['blue', 'new', 'few', 'two', 'true']; // adjectives that rhyme with blue
const adjectives_ee = ['free', 'three', 'key', 'wee'];
const adjectives_ii = ['fly', 'high'];
const adjectives_it = ['fit', 'lit'];
const adjectives_ay = ['grey', 'okay', 'gay'];

const plural_noun1 = plural_nouns[getRando(plural_nouns.length)];
const adjective1 = adjectives[getRando(adjectives.length)];
const plural_noun2 = plural_nouns[getRando(plural_nouns.length)];
const adjective_rhyme = adjectives_oo[getRando(adjectives_oo.length)];
const noun = nouns[getRando(nouns.length)];
const adjective3 = adjectives[getRando(adjectives.length)];
const cojunction = conjunctions[getRando(conjunctions.length)];

function getRando(limit) {
  return Math.round(Math.random()*limit);
}

function getPhrase() {
//   const num = getRando(end_phrase.length);
//   const phraseChoice = end_phrases[num];
  return 'are you';
}

const poemLoc = document.getElementById('poem');

poemLoc.innerHTML = (<ul>
<li>`-- ${plural_noun1} --`</li>
<li>`${plural_noun1} are ${adjective1}`</li>
<li>`${plural_noun2} are ${adjective_rhyme}`</li>
<li>`${noun} is ${adjective3}`</li>
<li>`${cojunction} so ${getPhrase()}`</li>
</ul>);

console.log(`-- ${plural_noun1} --`);
console.log(`${plural_noun1} are ${adjective1}`);
console.log(`${plural_noun2} are ${adjective_rhyme}`);
console.log(`${noun} is ${adjective3}`);
console.log(`${cojunction} so ${getPhrase()}`);
console.log('. . . . . . . . . . . .');