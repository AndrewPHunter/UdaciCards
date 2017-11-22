import {createStore, compose, applyMiddleware} from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

function configureStoreDev(initialState){
  const middlewares = [
    reduxImmutableStateInvariant(),
    thunk
  ];

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  return createStore(rootReducer, initialState, composeEnhancers(
    applyMiddleware(...middlewares)
  ));

}

function configureStoreProd(initialState){
  const middlewares = [
    thunk
  ];

  return createStore(rootReducer, initialState, compose(
    applyMiddleware(...middlewares)
  ));

}

const configureStore = __DEV__ ? configureStoreDev: configureStoreProd;

export default configureStore;
