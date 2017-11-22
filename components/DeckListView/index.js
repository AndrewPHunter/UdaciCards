import React, {Component} from 'react';
import {View, FlatList} from 'react-native';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Cell from './deckList.cell';
import Separator from './deckList.separator';
import {removeDeck} from '../../actions/deck.actions';

class DeckListView extends Component{

  static propTypes = {
    decks: PropTypes.array.isRequired,
    selectDeck: PropTypes.func.isRequired,
    removeDeck: PropTypes.func.isRequired
  };

  deleteDeck = (deck)=>{
    this.props.removeDeck(deck);
  };


  render(){
    const {decks, selectDeck} = this.props;

    return(
      <View style={{paddingTop: 22, flex: 1}}>
        <FlatList
          data={decks}
          keyExtractor={item=>item.id}
          renderItem={({item})=><Cell deck={item}
                                      onDelete={this.deleteDeck.bind(null, item)}
                                      onSelect={selectDeck.bind(null, item.id, item.title)}
          />}
          ItemSeparatorComponent={Separator}
        />
      </View>
    );
  }

}

const mapStateToProps = ({decks})=>({
  decks
});

const mapDispatchToProps = (dispatch, {navigation})=>({
  removeDeck: (deck)=>dispatch(removeDeck(deck)),
  selectDeck: (id, title)=>navigation.navigate('Deck', {id, title})
});

export default connect(
mapStateToProps,
mapDispatchToProps
)(DeckListView);
