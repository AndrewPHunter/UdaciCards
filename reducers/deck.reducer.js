import {
  LOAD_DECKS,
  ADD_DECK,
  REMOVE_DECK
} from '../actions/deck.actions';

import {ADD_CARD} from '../actions/card.actions';

const load = (state, {decks})=>Object.keys(decks).map(key=>decks[key]);

const add = (state, {deck})=>([
  ...state,
  deck
]);

const addCard = (state, {card})=>{
  const changedDeck = state.find(item=>item.id === card.deckId);
  return [
    ...state.filter(item=>item.id !== card.deckId),
    {
      ...changedDeck,
      count: changedDeck.count + 1
    }
  ];

};

const remove = (state, {deck})=>state.filter(item=>item.id !== deck.id);

const reducer = {
  [LOAD_DECKS]:load,
  [ADD_DECK]: add,
  [REMOVE_DECK]: remove,
  [ADD_CARD]: addCard
};

export default (state=[], {type, ...action})=>
  reducer[type] ? reducer[type](state, action) : state;
