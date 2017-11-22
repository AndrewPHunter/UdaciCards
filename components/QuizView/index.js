import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import glamorous from 'glamorous-native';
import Header from './Header';
import QuestionView from './QuestionView';
import Commands from './Commands';
import localStore from '../../utils/api.local';

const {View} = glamorous;


class Quiz extends Component{

  static propTypes = {
    title: PropTypes.string.isRequired,
    cards: PropTypes.array.isRequired,
    showResults: PropTypes.func.isRequired,
    resetNotification: PropTypes.func.isRequired
  };

  static navigationOptions = ({navigation})=>({
    title: `${navigation.state.params.title} Quiz`,
    headerTitleStyle:{
      alignSelf: 'center'
    }
  });

  state = {
    currentQuestion: 1,
    numberCorrect: 0
  };

  checkForEnd = ()=>{

    const {currentQuestion, numberCorrect} = this.state;
    const totalCards = this.props.cards.length;
    const title = this.props.title;


    if(currentQuestion > totalCards){

      const score = Math.round((numberCorrect / totalCards) * 100);

      this.props.resetNotification();
      this.props.showResults(title, score);
    }
  };

  onCorrect = ()=> {

    this.setState((prevState) => ({
      currentQuestion: prevState.currentQuestion + 1,
      numberCorrect: prevState.numberCorrect + 1
    }), this.checkForEnd);

  };

  onIncorrect = ()=>{

    this.setState((prevState) => ({
      currentQuestion: prevState.currentQuestion + 1
    }), this.checkForEnd);

  };

  shouldComponentUpdate = (nextProps, nextState)=>{
    const {cards} = this.props;
    const {currentQuestion} = nextState;

    return currentQuestion <= cards.length;

  };

  render(){
    const {currentQuestion} = this.state;
    const {cards} = this.props;
    const currentCard = cards[currentQuestion-1];

    return(
      <View flex={1}
            justifyContent='space-between'
            margin={20}
      >
        <Header current={currentQuestion} total={cards.length}/>
        <QuestionView question={currentCard.question} answer={currentCard.answer}/>
        <Commands onCorrect={this.onCorrect} onWrong={this.onIncorrect}/>
      </View>
    );
  }

}

const mapStateToProps = (state, {navigation})=>({
  cards: state.cards,
  title: navigation.state.params.title
});

const mapDispatchToProps = (dispatch, {navigation})=>({
  showResults: (title, percent)=>navigation.navigate('QuizResultsView', {title, percent}),
  resetNotification: ()=>localStore.clearNotifications().then(localStore.setNotification)
});

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);
