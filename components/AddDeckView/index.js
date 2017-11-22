import React, {Component} from 'react';
import {KeyboardAvoidingView, Keyboard, Alert} from 'react-native';
import {NavigationActions} from 'react-navigation';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import glamorous from 'glamorous-native';
import RoundedButton from '../Button/RoundedButton';
import TextInput from '../TextInput';

import {
  blue,
  white,
  lightBlue
} from '../../utils/colors';

import {addDeck} from '../../actions/deck.actions';
import {createDeck} from '../../utils/helpers';

const {
  View,
  Text
} = glamorous;


export class AddDeckView extends Component{

  static propTypes = {
    addDeck: PropTypes.func.isRequired,
    goToDeck: PropTypes.func.isRequired
  };

  state =  {
    title: null
  };

  navigationReset = ({id, title})=>
    NavigationActions.reset({
      index: 1,
      actions:[
        NavigationActions.navigate({routeName: 'Home'}),
        NavigationActions.navigate({routeName: 'Deck', params:{id, title}})
      ]
    });

  onSubmit = ()=>{
    const {addDeck, goToDeck} = this.props;
    const {title} = this.state;

    if(title === null || title.length < 3){
      Alert.alert('Please enter a deck title of at least 3 characters to proceed');
      return;
    }

    const deck = createDeck(title);
    addDeck(deck);
    this.setState({title: null});
    Keyboard.dismiss();
    goToDeck(this.navigationReset(deck));

  };

  render(){

    const {title} = this.state;

    return(
      <KeyboardAvoidingView style={{flex:1}}
                            behavior='padding'
      >
        <View flex={1}
              alignItems='center'
              justifyContent='center'
        >
          <Text fontSize={30}
                textAlign='center'
          >
            What is the title of your new deck?
          </Text>
          <TextInput value={title}
                     placeholder={'Deck Title'}
                     onChange={(title)=>this.setState({title})}
          />
        </View>
        <View flex={1}
              alignItems='center'
              justifyContent='flex-end'
              paddingBottom='20%'
        >
          <RoundedButton width='80%'
                         textAlign='center'
                         backgroundColor={blue}
                         flashColor={lightBlue}
                         textColor={white}
                         text='Submit'
                         onAction={this.onSubmit}
          />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

mapDispatchToProps = (dispatch, {navigation})=>({
  addDeck: (deck)=>dispatch(addDeck(deck)),
  goToDeck: (resetAction)=> navigation.dispatch(resetAction)
});

export default connect(null, mapDispatchToProps)(AddDeckView);
