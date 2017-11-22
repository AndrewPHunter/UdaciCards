import React from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous-native';
import RoundedButton from '../Button/RoundedButton';
import {
  red,
  darkRed,
  green,
  darkGreen,
  white
} from '../../utils/colors';

const{
  View
} = glamorous;

const Commands = ({onCorrect, onWrong})=>(
  <View flex={1}
        alignItems='center'
        justifyContent='flex-end'
  >
    <RoundedButton backgroundColor={darkGreen}
                   flashColor={green}
                   textColor={white}
                   text='Correct'
                   textAlign='center'
                   width='80%'
                   onAction={onCorrect}/>
    <RoundedButton backgroundColor={darkRed}
                   flashColor={red}
                   textColor={white}
                   text='Incorrect'
                   textAlign='center'
                   width='80%'
                   onAction={onWrong}/>
  </View>
);

Commands.propTypes = {
  onCorrect: PropTypes.func.isRequired,
  onWrong: PropTypes.func.isRequired
};

export default Commands;
