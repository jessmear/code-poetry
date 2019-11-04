import React, { useState, useEffect } from 'react';
import { words } from './Words.js';
import { styles } from './Styles.js';
import { getRando } from './Utils.js';

function CodePoetry() {
  const intialState = {
    poem: '',
    style: {},
    tweet: 'https://jessmear.github.io/code-poetry/',
    showInfo: 'modal-hide'
  };
  const [poem, updatePoem] = useState(intialState);

  useEffect(() => {
    build();
  }, []);

  

  // BUILDING THE POEM
  const build = () => {
    const plural_noun1 = words.plural_nouns[getRando(words.plural_nouns.length)];
    const adjective1 = words.adjectives[getRando(words.adjectives.length)];
    const plural_noun2 = words.plural_nouns[getRando(words.plural_nouns.length)];
    const noun = words.nouns[getRando(words.nouns.length)];
    const adjective3 = words.adjectives[getRando(words.adjectives.length)];
    const cojunction = words.conjunctions[getRando(words.conjunctions.length)];

    const borderDetails = `${styles.borderColors[getRando(styles.borderColors.length)]} 3px dashed`;
    const style = { 
      'color': styles.textColors[getRando(styles.textColors.length)],
      'border': borderDetails,
      'fontFamily': styles.fontFamilies[getRando(styles.fontFamilies.length)]
    };

    const ryhmeChoices = ['oo', 'ee', 'ii', 'ay'];

    const rhymeSound = ryhmeChoices[getRando(ryhmeChoices.length)];

    const adjective_rhyme = words.rhyming_adjectives[rhymeSound][getRando(words.rhyming_adjectives[rhymeSound].length)];

    function getPhrase() {
      const num = getRando(words.end_phrases[rhymeSound].length);
      const phraseChoice = words.end_phrases[rhymeSound][num];
      return phraseChoice;
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
      tweet: `${line1} / ${line2} / ${line3} / ${line4} [https://jessmear.github.io/code-poetry/]`,
      showInfo: 'modal-hide'
    })
  }

  const toggleModal = () => {
    const showInfo = (poem.showInfo == 'modal-show') ? 'modal-hide' : 'modal-show';
    updatePoem({
      ...poem,
      showInfo
    })
  }

  const getDate = () => {
    return new Date().getYear()-100+2000;
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
        <button onClick={build}>poem again</button>
        <button id="myBtn" onClick={toggleModal}>?</button>
      </div>

      <div className={`modal ${poem.showInfo}`}>
        <div className="modal-content">
          <span onClick={toggleModal} className="close">&times;</span>
          <p>Created by <a href="http://www.jessmear.com" target="_blank">Jess Mear</a>, copyright 2019 - {getDate()}.</p>
          <p>GitHub repo: <a href="https://github.com/jessmear/code-poetry" target="_blank">code-poetry</a></p>
          <p>This project is using <a href="https://www.datamuse.com/api/" target="_blank">Datamuse API</a> and <a href="https://github.com/ansteh/datamuse" target="_blank">Datamuse NPM module</a>.</p>
        </div>
      </div>

    </div>
  );
}

export default CodePoetry;
