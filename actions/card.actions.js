import localStore from '../utils/api.local';

export const LOAD_CARDS = 'LOAD_CARDS';
export const ADD_CARD = 'ADD_CARD';

const loadCardsSuccess = (cards)=>({
  type: LOAD_CARDS,
  cards
});

export const loadCards = (id)=>(dispatch)=>
  localStore.loadCards(id)
    .then(cards=>dispatch(loadCardsSuccess(cards)));


const addCardSuccess = (card)=>({
  type: ADD_CARD,
  card
});

export const addCard = (deck, card)=>dispatch=>
  localStore.addCard(deck, card)
    .then(dispatch(addCardSuccess(card)));
