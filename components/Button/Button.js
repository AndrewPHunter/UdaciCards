import React from 'react';
import PropTypes from 'prop-types';
import {TouchableNativeFeedback, Platform} from 'react-native';
import glamorous from 'glamorous-native';

const {
  View,
  Text,
  TouchableHighlight
} = glamorous;

const Button = ({flashColor, textColor, text, onAction, ...textProps})=>{
  if(Platform.OS !== 'ios'){
    return(
      <TouchableNativeFeedback onPress={onAction}
                               background={TouchableNativeFeedback.Ripple(flashColor)}
      >
        <View
          padding={5}
          justifyContent='center'
        >
          <Text fontSize={20} color={textColor} {...textProps}>{text}</Text>
        </View>
      </TouchableNativeFeedback>
    );
  }

  return (
    <TouchableHighlight padding={5}
                        onPress={onAction}
                        underlayColor={flashColor}
    >
      <View
        padding={5}
        justifyContent='center'
      >
        <Text fontSize={20} color={textColor} {...textProps}>{text}</Text>
      </View>
    </TouchableHighlight>
  );
};

Button.propTypes = {
  flashColor: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onAction: PropTypes.func.isRequired
};

export default Button;
