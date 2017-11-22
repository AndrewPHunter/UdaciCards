import React from 'react';
import PropTypes from 'prop-types';
import {withNavigation, NavigationActions} from 'react-navigation';
import glamorous from 'glamorous-native';
import RoundedButton from '../Button/RoundedButton';
import {
  blue,
  lightBlue,
  green,
  darkGreen,
  white
} from '../../utils/colors';

const{
  View,
  Text
} = glamorous;


const resetQuiz = (deck)=>
  NavigationActions.reset({
    index: 2,
    actions:[
      NavigationActions.navigate({routeName: 'Home'}),
      NavigationActions.navigate({routeName: 'Deck', params:{id: deck.id}}),
      NavigationActions.navigate({routeName: 'QuizView', params:{deck}})
    ]
  });

const resetDeckView = ({id, title})=>
  NavigationActions.reset({
    index: 1,
    actions:[
      NavigationActions.navigate({routeName: 'Home'}),
      NavigationActions.navigate({routeName: 'Deck', params:{id, title}})
    ]
  });


const QuizResultsView = ({navigation})=>(
  <View flex={1}>
    <View flex={1}
          alignItems='center'
          justifyContent='center'
    >
      <Text fontSize={40} marginBottom={10}>{navigation.state.params.deck.title} Results</Text>
      <Text fontSize={30}>{navigation.state.params.percent}%</Text>
    </View>
    <View flex={1}
          alignItems='center'
          justifyContent='flex-end'
          paddingBottom='20%'
    >
      <RoundedButton width='80%'
                     textAlign='center'
                     backgroundColor={darkGreen}
                     flashColor={green}
                     textColor={white}
                     text='Reset Quiz'
                     onAction={() => navigation.dispatch(resetQuiz(navigation.state.params.deck))}/>
      <RoundedButton width='80%'
                     textAlign='center'
                     backgroundColor={blue}
                     flashColor={lightBlue}
                     textColor={white}
                     text='Back To Deck'
                     onAction={() => navigation.dispatch(resetDeckView(navigation.state.params.deck))}/>
    </View>
  </View>
);

QuizResultsView.propTypes = {
  navigation: PropTypes.object.isRequired
};

export default withNavigation(QuizResultsView);
