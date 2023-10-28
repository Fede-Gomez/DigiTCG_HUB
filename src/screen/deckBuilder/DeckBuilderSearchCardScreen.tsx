import React from 'react'
import { ImageBackground } from 'react-native';
import { CardListCardsSearched, ModalCard } from '../../components';
import { TypeNavigation } from '../../constants/typesNavigation';
import { useAppSelector } from '../../hooks/useReducerHook';

const DeckBuilderSearchCardScreen = () => {
  const cardInfo = useAppSelector(state => state.app.modalCardView)
    return (
      <ImageBackground
        source={require('../../assets/backgrounds/searchCard.jpg')}
        resizeMode='cover'
        style={{flex:1}}
      >
        <CardListCardsSearched topTab={TypeNavigation.game.deckBuilder}/>
      </ImageBackground>
    );
}

export default DeckBuilderSearchCardScreen