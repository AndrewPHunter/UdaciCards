# UdaciCards
[React Nanodegree Project](https://www.udacity.com/course/react-nanodegree--nd019)

This project is scaffolded from [create-react-native-app](https://github.com/react-community/create-react-native-app) and built to the specs provided by the Udacity project guide.

### Directory Structure
<p>
The project makes the decision to group Views and their supporting components into their own directory and to follow the container pattern for complex components. The root component for each view is contained in the index.js file for each directory to allow for cleaner importing patterns as demonstrated below
</p>

```js
import DeckView from '../DeckView';
import AddCardView from '../AddCardView';
import QuizView from '../QuizView';
import QuizResultsView from '../QuizResultsView';
```

### Technology Used
* [create-react-native-app](https://github.com/react-community/create-react-native-app)
* [redux](http://redux.js.org/)
* [redux-thunk](https://github.com/gaearon/redux-thunk)
* [react-redux](https://github.com/reactjs/react-redux/blob/master/docs/api.md)
* [react-navigation](https://reactnavigation.org/)
* [glamorous-native](https://github.com/robinpowered/glamorous-native)
* [expo](https://expo.io/)


### Getting Started

<p>
There are known issues with regard to using create-react-native-app and npm hence it is strongly suggested to use [yarn](https://yarnpkg.com/en/) for setting up the project.

* clone the repo
* setup projects and dependencies
```sh
yarn install
```
* start the backend and development server
```sh
yarn start
```


### Design Decisions
<p>
Overall the layout and design of the app is typical for react, redux apps. The major difference that may be noted is the concise
effort to maintain reducers that are more deterministic and easily testable by removing switch and if statements and relying specifically
on language features to maximize testability and determinism.
</p>
<p>
I am unsure if this deterministic reducer style is worth maintaining but felt it was interesting to try out for this project. An
example is found below:
</p>

```js
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

```

### Contributing

This repository is used for a nanodegree program that I am participating in so I will not be accepting pull requests.
