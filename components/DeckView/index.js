import React, {Component} from 'react';
import {Alert} from 'react-native';
import {AppLoading} from 'expo';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import glamorous from 'glamorous-native';
import RoundedButton from '../Button/RoundedButton';
import {loadCards} from '../../actions/card.actions';

import {
  black,
  grey,
  blue,
  lightBlue,
  green,
  darkGreen,
  white
} from '../../utils/colors';

const {
  View,
  Text
} = glamorous;


class DeckView extends Component{

  static propTypes = {
    deck: PropTypes.object.isRequired,
    loadCards: PropTypes.func.isRequired,
    addCard: PropTypes.func.isRequired,
    startQuiz: PropTypes.func.isRequired
  };

  static navigationOptions = ({navigation})=>({
    title: navigation.state.params.title,
    headerTitleStyle:{
      alignSelf: 'center'
    }
  });

  state = {
    ready: false
  };

  componentDidMount = ()=>{
    const {deck, loadCards} = this.props;

    loadCards(deck.id)
      .then(()=>this.setState({ready: true}))
  };

  startQuiz = ()=>{
    const {deck} = this.props;

    if(deck.count > 0){
      this.props.startQuiz(deck.title);
      return;
    }

    Alert.alert('Please add cards to your deck so you can start the quiz.');
  };

  render(){
    const {ready} = this.state;
    const {deck, addCard} = this.props;

    if(!ready){
      return(
        <AppLoading/>
      )
    }

    return(
      <View flex={1}>
        <View flex={1}
              alignItems='center'
              justifyContent='center'>
          <Text fontSize={50} color={black}>{deck.title}</Text>
          <Text fontSize={25} color={grey}>{deck.count} cards</Text>
        </View>
        <View flex={1}
              alignItems='center'
              justifyContent='flex-end'
              paddingBottom={50}
        >
          <RoundedButton backgroundColor={lightBlue}
                         flashColor={blue}
                         textColor={white}
                         text='Add Card'
                         textAlign='center'
                         width='80%'
                         onAction={addCard.bind(null, deck.id)}
          />
          <RoundedButton backgroundColor={darkGreen}
                         flashColor={green}
                         textColor={white}
                         text='Start Quiz'
                         textAlign='center'
                         width='80%'
                         onAction={this.startQuiz}
          />
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state, {navigation})=>{
  const id = navigation.state.params.id;
  return {
    deck: state.decks.find(item=>item.id === id)
  };
};

const mapDispatchToProps = (dispatch, {navigation})=>{

  return {
    loadCards: (id)=>dispatch(loadCards(id)),
    addCard: (id)=>navigation.navigate('AddCard', {id}),
    startQuiz: (title)=>navigation.navigate('QuizView', {title})
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(DeckView);
