import React from 'react';
import PropTypes from 'prop-types';
import {View, StatusBar} from 'react-native';
import {Constants} from 'expo';


const CardsStatusBar = ({backgroundColor, ...props})=>(
  <View style={{backgroundColor, height: Constants.statusBarHeight}}>
    <StatusBar translucent backgroundColor={backgroundColor} {...props}/>
  </View>
);

CardsStatusBar.propTypes = {
  backgroundColor: PropTypes.string.isRequired
};

export default CardsStatusBar;
