import localStore from '../utils/api.local';

export const LOAD_DECKS = 'LOAD_DECKS';
export const ADD_DECK = 'ADD_DECK';
export const REMOVE_DECK = 'REMOVE_DECK';

const loadDecksSuccess = (decks)=>({
  type: LOAD_DECKS,
  decks
});

export const loadDecks = ()=>(dispatch)=>
  localStore.loadDecks()
    .then(decks=>dispatch(loadDecksSuccess(decks)));


const addDeckSuccess = (deck)=>({
  type: ADD_DECK,
  deck
});

export const addDeck = (deck)=>(dispatch)=>
  localStore.addDeck(deck)
    .then(dispatch(addDeckSuccess(deck)));

const removeDeckSuccess = (deck)=>({
  type: REMOVE_DECK,
  deck
});

export const removeDeck = (deck)=>(dispatch)=>
  localStore.removeDeck(deck)
    .then(dispatch(removeDeckSuccess(deck)));
