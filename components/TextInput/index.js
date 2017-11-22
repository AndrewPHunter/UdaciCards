import React from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous-native';
import {
  greyLight,
  grey
} from '../../utils/colors';

const {TextInput} = glamorous;

const Input = ({value, onChange, placeholder, ...textProps})=>(
  <TextInput marginTop={20}
             padding={5}
             height={40}
             borderColor={greyLight}
             borderWidth={1}
             borderRadius={4}
             autoCapitalize='words'
             placeholder={placeholder}
             onChangeText={onChange}
             value={value}
             width='80%'
             color={grey}
             {...textProps}
  />
);

Input.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Input;
