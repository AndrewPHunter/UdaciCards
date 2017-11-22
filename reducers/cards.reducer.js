import {
  LOAD_CARDS,
  ADD_CARD
} from '../actions/card.actions';

const load = (state, {cards})=>Object.keys(cards).map(key=>cards[key]);

const add = (state, {card})=>([
  ...state,
  card
]);

const reducer = {
  [LOAD_CARDS]: load,
  [ADD_CARD]: add
};

export default (state=[], {type, ...action})=>
  reducer[type] ? reducer[type](state, action) : state;
