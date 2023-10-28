import React from 'react'
import { ImageBackground } from 'react-native';
import { CardListCardsSearched } from '../../components';
import { TypeNavigation } from '../../constants/typesNavigation';

const CardWishedSearchScreen = () => {

  return (
      <ImageBackground
        source={require('../../assets/backgrounds/searchCard.jpg')}
        style={{flex:1}}
      >
        <CardListCardsSearched topTab={TypeNavigation.game.cardsWished}/>
      </ImageBackground>
    );
}

export default CardWishedSearchScreen