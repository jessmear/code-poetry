import React, { useState, useEffect } from 'react';
import { styles } from './Styles.js';
import { getRandomNumber, getDate, getRandomLetter } from './Utils.js';

const datamuse = require('datamuse');

function CodePoetry() {
  const intialState = {
    poem: '',
    style: {},
    tweet: 'https://jessmear.github.io/code-poetry/',
    showInfo: 'modal-hide'
  };
  const [poem, updatePoem] = useState(intialState);
  const [adjective1, setAdjective1] = useState('short');
  const [adjective2, setAdjective2] = useState('still');
  const [noun1, setNoun1] = useState('blade');
  const [noun2, setNoun2] = useState('grass');
  const [noun3, setNoun3] = useState('breezes');
  const [verb1, setVerb1] = useState('bends');
  const [verb2, setVerb2] = useState('sways');

  useEffect(() => {
    build();
  }, []);

  const pickWord = (data, syllableCount, partOfSpeech) => {
    for(const word in data) {
      console.log(word)
    }
  }

  const setWord = (setThisState, syllableCount = 1, partOfSpeech = "n") => {
    datamuse.request(`words?md=ps&sp=${getRandomLetter()}*`)
      .then((data) => {
        let wordChoice = data.find(word => {
          if(word.numSyllables == syllableCount) {
            if(word.tags && word.tags[0] == partOfSpeech) {
              return true
            }
          }
        })
        wordChoice = wordChoice ? wordChoice.word : 'fly'
        setThisState(wordChoice)
        console.log(wordChoice)
      });
  }

  

  // BUILDING THE POEM
  const build = () => {

    setWord(setAdjective1, 1, "adj")
    setWord(setAdjective2, 1, "adj")
    setWord(setNoun1, 1)
    setWord(setNoun2, 1)
    setWord(setNoun3, 2)
    setWord(setVerb1, 1, "v")
    setWord(setVerb2, 1, "v")

    const borderDetails = `${styles.borderColors[getRandomNumber(styles.borderColors.length)]} 3px dashed`;
    const style = { 
      'color': styles.textColors[getRandomNumber(styles.textColors.length)],
      'border': borderDetails,
      'fontFamily': styles.fontFamilies[getRandomNumber(styles.fontFamilies.length)]
    };



    const line1 = `a ${adjective1} ${noun1} of ${noun2}`;
    const line2 = `${verb1} and ${verb2} in the ${noun3}`;
    const line3 = `and now it is ${adjective2}`;

    const poem = (<ul>
              <li>{line1}</li>
              <li>{line2}</li>
              <li>{line3}</li>
            </ul>);
  
    updatePoem({
      poem,
      style,
      tweet: `${line1} / ${line2} / ${line3} [https://jessmear.github.io/code-poetry/]`,
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
