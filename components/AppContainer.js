import React, {Component} from 'react';
import {View} from 'react-native';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {AppLoading} from 'expo';

import MainNavigator from './Navigation/StackNavigator';
import StatusBar from './StatusBar';
import {blue} from '../utils/colors';

import {loadDecks} from '../actions/deck.actions';
import localStore from '../utils/api.local';

class AppContainer extends Component{

  static propTypes = {
    loadDecks: PropTypes.func.isRequired
  };

  state = {
    isReady: false
  };

  componentDidMount = ()=>{
    localStore.setNotification();
  };

  render(){
    const {loadDecks} = this.props;
    const {isReady} = this.state;

    if(!isReady) {
      return (
        <AppLoading
          startAsync={() => loadDecks()}
          onFinish={() => this.setState({isReady:true})}
          onError={() => console.warn}
        />
      );
    }

    return (
      <View style={{flex: 1}}>
        <StatusBar backgroundColor={blue}/>
        <MainNavigator/>
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch)=>({
  loadDecks: ()=>dispatch(loadDecks())
});

export default connect(null, mapDispatchToProps)(AppContainer);
