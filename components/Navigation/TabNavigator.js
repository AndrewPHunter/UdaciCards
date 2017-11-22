import React from 'react';
import {Platform} from 'react-native';
import {TabNavigator} from 'react-navigation';
import {MaterialCommunityIcons, MaterialIcons} from '@expo/vector-icons';
import DeckListView from '../DeckListView';
import AddDeckView from '../AddDeckView';
import {white, blue} from '../../utils/colors';

const Tabs = TabNavigator({
  TableView:{
    screen: DeckListView,
    navigationOptions:{
      tabBarLabel: 'Decks',
      tabBarIcon: ({tintColor}) => <MaterialCommunityIcons name='cards' size={20} color={tintColor}/>
    }
  },
  AddDeckView:{
    screen: AddDeckView,
    navigationOptions:{
      tabBarLabel: 'Add Deck',
      tabBarIcon: ({tintColor}) => <MaterialIcons name='library-add' size={20} color={tintColor}/>
    }
  }
}, {
  animationEnabled: true,
  navigationOptions:{
    header: null
  },
  tabBarOptions:{
    activeTintColor: Platform.OS === 'ios' ? blue : white,
    style:{
      height: 56,
      backgroundColor: Platform.OS === 'ios' ? white : blue,
      shadowColor: 'rgba(0, 0, 0, 0.24)',
      shadowOffset: {
        width: 0,
        height: 3
      },
      shadowRadius: 6,
      shadowOpacity: 1
    }
  }
});

export default Tabs;
