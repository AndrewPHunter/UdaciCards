import React, {Component} from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous-native';
import {
  red,
  black,
  green
} from '../../utils/colors';

const {
  View,
  Text,
  TouchableOpacity
} = glamorous;

class QuestionView extends Component{

  static propTypes = {
    question: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired
  };

  state = {
    showAnswer: false
  };

  renderText = ()=>{
    const {showAnswer} = this.state;
    const {question,answer} = this.props;

    const text = showAnswer ? answer : question;

    return(
      <View margin={10}>
        <Text fontSize={30} color={black} textAlign='center'>{text}</Text>
      </View>
    );
  };

  renderToggle = ()=>{
    const {showAnswer} = this.state;

    let text = 'Question';
    let color = red;

    if(!showAnswer){
      text = 'Answer';
      color = green;
    }

    return(
      <TouchableOpacity onPress={()=>this.setState({showAnswer: !showAnswer})}
      >
        <Text fontSize={20} color={color}>{text}</Text>
      </TouchableOpacity>
    );

  };

  render(){
    return (
      <View flex={2}
            alignItems='center'
            justifyContent='center'
      >
        {this.renderText()}
        {this.renderToggle()}
      </View>
    )
  }
}

export default QuestionView;
