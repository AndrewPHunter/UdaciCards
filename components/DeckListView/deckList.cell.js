import React from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous-native';
import Swipeable from 'react-native-swipeable';
import {Entypo} from '@expo/vector-icons';
import Button from '../Button/Button';

import {
  grey,
  red,
  darkRed,
  white
} from '../../utils/colors';

const {
  View,
  Text,
  TouchableOpacity
} = glamorous;


const cell = ({deck, onSelect, onDelete})=>{

  return(
    <Swipeable rightButtons={[
      <View flex={1}
            justifyContent='center'
            backgroundColor={red}
      >
        <Button flashColor={darkRed}
                textColor={white}
                text='Delete'
                onAction={onDelete}
        />
      </View>
    ]}
    >
      <TouchableOpacity onPress={onSelect}>
        <View flex={1}
              flexDirection='row'
        >
          <View padding={10}
                flex={9}
                alignItems='center'
                justifyContent='center'
          >
            <Text fontSize={30}>
              {deck.title}
            </Text>
            <Text fontSize={20}
                  color={grey}
            >
              {deck.count} cards
            </Text>
          </View>
          <View flex={1}
                justifyContent='center'
                alignItems='center'
          >
            <Entypo name='chevron-right' size={30}/>
          </View>
        </View>
      </TouchableOpacity>
    </Swipeable>
  );
};

cell.propTypes = {
  deck: PropTypes.object.isRequired,
  onSelect: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
};

export default cell;
