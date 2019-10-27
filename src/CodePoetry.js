import React, {useState, useEffect} from 'react';

function CodePoetry() {
  // STATE
  const intialState = {
    poem: '',
    style: {},
    tweet: 'https://jessmear.github.io/code-poetry/'
  };
  const [poem, updatePoem] = useState(intialState);

  useEffect(() => {
    build();
  }, []);

  // GRAMMAR FRAMEWORK
  /*
  plural_noun1 are adjective1
  plural_noun2 are adjective_rhyme
  noun is adjective3
  cojunction so ' are you / is she / is he / are we / am I / is it / are they '
  */

  // WORD LISTS
  //https://api.datamuse.com/words?rel_jjb=ocean&topics=temperature&md=p
  const plural_nouns = ['roses', 'violets', 'airplanes', 'kittens', 'fishes', 'candies', 'programs', 'slingshots', 'lightbulbs', 'rivers', 'mermaids', 'rainbows', 'daisies', 'lap pools', 'cell phones', 'board games'];
  const nouns = ['sugar', 'the car', 'airplane', 'the cat', 'the fish', 'candy', 'the code', 'a sword', 'bright light', 'the squid', 'a whale', 'the cloud', 'flour', 'the pool', 'the phone', 'the game'];
  const conjunctions = ['and', 'but', 'yet'];
  const adjectives = ['big', 'real', 'small', 'tall', 'long', 'drunk', 'ill', 'right', 'cross', 'mad', 'lax', 'mean', 'coy', 'prime', 'bored', 'fair', 'blonde', 'apt', 'low', 'high', 'wise', 'wry', 'huge', 'quick', 'clean', 'drab', 'plain', 'red', 'blue', 'green', 'black', 'dead', 'odd', 'rich', 'shy', 'sly', 'vast', 'brave', 'calm', 'kind', 'rough', 'rogue', 'wide', 'faint', 'loud', 'late', 'swift', 'light', 'weak', 'wet', 'full', 'cool', 'dark', 'dry', 'apt', 'few', 'sweet'];
  const adjectivesThatRhyme = {
    'oo': ['blue', 'new', 'few', 'two', 'true'],
    'ee': ['free', 'three', 'key', 'wee'],
    'ii': ['fly', 'high'],
    'it': ['fit', 'lit'],
    'ay': ['grey', 'okay', 'gay']
}

  // STYLE LISTS
  const fontFamilies = ["'Fredericka the Great', cursive", "'Lobster Two', cursive", "'Nova Flat', cursive", "'Righteous', cursive"];
  const textColors = ['lemonchiffon', 'peachpuff', 'lavender', 'mediumaquamarine', 'paleturquoise', 'powderblue', 'deepskyblue', 'honeydew', 'aliceblue', 'gainsboro'];
  const borderColors = ['gold', 'yellow', 'mediumpurple', 'mediumorchid', 'slateblue', 'limegreen', 'darkturquoise', 'steelblue', 'chocolate', 'lightslategray']; 

  // BUILDING THE POEM
  const build = () => {
    const plural_noun1 = plural_nouns[getRando(plural_nouns.length)];
    const adjective1 = adjectives[getRando(adjectives.length)];
    const plural_noun2 = plural_nouns[getRando(plural_nouns.length)];
    const noun = nouns[getRando(nouns.length)];
    const adjective3 = adjectives[getRando(adjectives.length)];
    const cojunction = conjunctions[getRando(conjunctions.length)];

    const font = 'font' + (getRando(1,4));
    const borderDetails = `${borderColors[getRando(borderColors.length)]} 3px dashed`;
    const style = { 
      'color': textColors[getRando(textColors.length)],
      'border': borderDetails,
      'fontFamily': fontFamilies[getRando(fontFamilies.length)]
    };

    function getRando(limit, start = 0) {
      const num = Math.floor(Math.random()*(limit-start))+start;
      return num;
    }

    const ryhmeChoices = ['oo', 'ee', 'ii', 'it', 'ay'];

    const rhymeSound = ryhmeChoices[getRando(ryhmeChoices.length)];

    const adjective_rhyme = adjectivesThatRhyme[rhymeSound][getRando(adjectivesThatRhyme[rhymeSound].length)];

    const end_phrases = {
      oo: ['are you'], 
      ee: ['is she', 'is he', 'are we'], 
      ii: ['am I'], 
      it: ['is it'], 
      ay: ['are they']
    };

    function getPhrase() {
      console.log(end_phrases[rhymeSound])
      const num = getRando(end_phrases[rhymeSound].length);
      const phraseChoice = end_phrases[rhymeSound][num];
      return phraseChoice;
      // return 'end phrase';
    }

    const line1 = `${plural_noun1} are ${adjective1}`;
    const line2 = `${plural_noun2} are ${adjective_rhyme}`;
    const line3 = `${noun} is ${adjective3}`;
    const line4 = `${cojunction} so ${getPhrase()}`;

    const poem = (<ul>
              <li>-- {plural_noun1} --</li>
              <li>{line1}</li>
              <li>{line2}</li>
              <li>{line3}</li>
              <li>{line4}</li>
            </ul>);
  
    updatePoem({
      poem,
      style,
      tweet: `${line1} / ${line2} / ${line3} / ${line4} [https://jessmear.github.io/code-poetry/]`
    })
  }

  

  return (
    <div className="poem-container">
      <div className="poem" style={poem.style}>{poem.poem}</div>
      <div className="nav">
        <a href={`http://twitter.com/intent/tweet?text=${poem.tweet}`}
              target="_blank" 
              id="tweet-quote">
                tweet
          </a>
        {/* <button>save</button> */}
        <button onClick={build}>poem again</button>
      </div>
    </div>
  );
}

export default CodePoetry;
