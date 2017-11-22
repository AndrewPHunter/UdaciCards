import {combineReducers} from 'redux';
import decks from './deck.reducer';
import cards from './cards.reducer'

export default combineReducers({
  decks,
  cards
});
