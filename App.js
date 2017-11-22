import React from 'react';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import AppContainer from './components/AppContainer';


class App extends React.Component {

  render() {
    return (
      <Provider store={configureStore()}>
        <AppContainer/>
      </Provider>
    );
  }
}


export default App;
