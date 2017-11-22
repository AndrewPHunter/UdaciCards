import {generateId} from './helpers';
import {
  DECK_STORAGE_KEY,
  CARD_STORAGE_KEY
} from './api.constants';

const reactID = generateId();
const javascriptID = generateId();

const questionIds = new Array(5).fill().map(()=>generateId());

export default {
  [DECK_STORAGE_KEY]:{
    [reactID]:{
      id: reactID,
      title: 'React',
      count: 2
    },
    [javascriptID]:{
      id: javascriptID,
      title: 'Javascript',
      count: 3
    }
  },
  [`${CARD_STORAGE_KEY}:${reactID}`]:{
    [questionIds[0]]:{
      id: questionIds[0],
      deckId: reactID,
      question: 'Does React make you a better programmer?',
      answer: 'Yes'
    },
    [questionIds[1]]:{
      id: questionIds[1],
      deckId: reactID,
      question: 'Is React just Javascript?',
      answer:'Yes'
    }
  },
  [`${CARD_STORAGE_KEY}:${javascriptID}`]:{
    [questionIds[2]]:{
      id: questionIds[2],
      deckId: javascriptID,
      question: 'Javascript is the same as Java.',
      answer: 'False'
    },
    [questionIds[3]]:{
      id: questionIds[3],
      deckId: javascriptID,
      question: 'How does a for loop start?',
      answer: 'for(i=0; i<=5; i++)'
    },
    [questionIds[4]]:{
      id: questionIds[4],
      deckId: javascriptID,
      question: 'How do you round 7.25 to the nearest integer?',
      answer: 'Math.round(7.25)'
    }
  }
};
