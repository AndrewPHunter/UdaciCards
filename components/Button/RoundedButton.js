import React from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous-native';
import Button from './Button';

const {View} = glamorous;

const RoundedButton = ({backgroundColor, width, ...props })=>(
  <View margin={10}
        width={width}
        backgroundColor={backgroundColor}
        borderRadius={4}
        borderColor={backgroundColor}
        borderWidth={1}
  >
    <Button {...props}/>
  </View>
);

RoundedButton.propTypes = {
  width: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  flashColor: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onAction: PropTypes.func.isRequired
};

export default RoundedButton;
