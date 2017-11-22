import React, {Component} from 'react';
import {KeyboardAvoidingView, Keyboard, Alert} from 'react-native';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import glamorous from 'glamorous-native';
import RoundedButton from '../Button/RoundedButton';
import TextInput from '../TextInput';

import {addCard} from '../../actions/card.actions';
import {createCard} from '../../utils/helpers';

import {
  blue,
  lightBlue,
  white
} from '../../utils/colors';


const {
  View
} = glamorous;


class AddCardView extends Component{

  static propTypes = {
    deck: PropTypes.object.isRequired,
    goBack: PropTypes.func.isRequired,
    addCard: PropTypes.func.isRequired
  };

  state = {
    question: null,
    answer: null
  };

  checkSubmission = (text)=> text !== null && text.length > 3;

  onSubmit = ()=> {
    const {question, answer} = this.state;
    const {deck, addCard, goBack} = this.props;

    if(!this.checkSubmission(question) || !this.checkSubmission(answer)){
      Alert.alert('Both the question and answer must be greater than 3 characters');
      return;
    }

    const card = createCard(deck.id, question, answer);

    addCard(deck, card);
    this.setState({question: null, answer: null});
    Keyboard.dismiss();
    goBack();
  };

  render(){

    const {question, answer} = this.state;
    return(
      <KeyboardAvoidingView style={{flex: 1}}
                            behavior='padding'
      >
        <View flex={1}
              alignItems='center'
              justifyContent='center'
        >
          <TextInput value={question}
                     placeholder={'Question'}
                     onChange={(question)=>this.setState({question})}
          />
          <TextInput value={answer}
                     placeholder={'Answer'}
                     onChange={(answer)=>this.setState({answer})}
          />
        </View>
        <View flex={1}
              alignItems='center'
              justifyContent='flex-end'
              paddingBottom='20%'
        >
          <RoundedButton backgroundColor={lightBlue}
                         width='50%'
                         flashColor={blue}
                         textColor={white}
                         text='Submit'
                         textAlign='center'
                         onAction={this.onSubmit}
          />
        </View>
      </KeyboardAvoidingView>
    )
  }
}

const mapStateToProps = (state, {navigation})=>({
  deck: state.decks.find(item=>item.id === navigation.state.params.id)
});

const mapDispatchToProps = (dispatch, {navigation})=>{
  return{
    goBack: ()=>navigation.goBack(),
    addCard: (deck, card)=>dispatch(addCard(deck, card))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddCardView);
