import React from 'react';
import PropTypes from 'prop-types';
import {withNavigation, NavigationActions} from 'react-navigation';
import glamorous from 'glamorous-native';
import RoundedButton from '../Button/RoundedButton';
import {
  green,
  darkGreen,
  white
} from '../../utils/colors';

const{
  View,
  Text
} = glamorous;


const popToRoot = NavigationActions.reset({
  index: 0,
  actions:[
    NavigationActions.navigate({routeName: 'Home'})
  ]
});

const QuizResultsView = ({navigation})=>(
  <View flex={1}>
    <View flex={1}
          alignItems='center'
          justifyContent='center'
    >
      <Text fontSize={40} marginBottom={10}>{navigation.state.params.title} Results</Text>
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
                     text='Home'
                     onAction={() => navigation.dispatch(popToRoot)}/>
    </View>
  </View>
);

QuizResultsView.propTypes = {
  navigation: PropTypes.object.isRequired
};

export default withNavigation(QuizResultsView);
