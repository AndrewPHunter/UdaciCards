import React from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous-native';
import {black} from '../../utils/colors';

const {
  View,
  Text
} = glamorous;

const header = ({current, total})=>(
  <View flex={1}
        alignItems='flex-start'
  >
    <Text color={black} fontSize={20}>{current} / {total}</Text>
  </View>
);

header.propTypes = {
  current: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired
};

export default header;
