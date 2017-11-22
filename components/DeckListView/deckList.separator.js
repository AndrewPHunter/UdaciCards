import React from 'react';
import glamorous from 'glamorous-native';
import {greyLight} from '../../utils/colors';

const separator = ()=>(
  <glamorous.View height={1}
                  width='100%'
                  backgroundColor={greyLight}
  />
);

export default separator;
