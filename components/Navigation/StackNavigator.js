import React from 'react';
import {StackNavigator} from 'react-navigation';
import Tabs from './TabNavigator';
import DeckView from '../DeckView';
import AddCardView from '../AddCardView';
import QuizView from '../QuizView';
import QuizResultsView from '../QuizResultsView';

import {white, blue} from '../../utils/colors';

const Main = StackNavigator({
  Home:{
    screen: Tabs,
    navigationOptions:{
      title:'UdaciCards'
    }
  },
  Deck:{
    screen:DeckView,
    navigationOptions:{
      headerTintColor: white,
      headerStyle:{
        backgroundColor: blue
      }
    }
  },
  AddCard:{
    screen: AddCardView,
    navigationOptions:{
      title:'Add Card',
      headerTintColor: white,
      headerStyle:{
        backgroundColor: blue
      },
      headerTitleStyle:{
        alignSelf:'center'
      }
    }
  },
  QuizView:{
    screen:QuizView,
    navigationOptions:{
      headerTintColor: white,
      headerStyle:{
        backgroundColor: blue
      }
    }
  },
  QuizResultsView:{
    screen: QuizResultsView,
    navigationOptions:{
    title:'Quiz Results',
      headerTintColor: white,
      headerStyle:{
        backgroundColor: blue
      },
      headerTitleStyle:{
        alignSelf:'center'
      }
    }
  }
});

export default Main;
