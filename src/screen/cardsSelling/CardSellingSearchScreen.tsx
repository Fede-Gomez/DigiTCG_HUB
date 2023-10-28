import React from 'react'
import { ImageBackground } from 'react-native';
import { CardListCardsSearched } from '../../components';
import { TypeNavigation } from '../../constants/typesNavigation';

const CardSellingSearchScreen = () => {

    return (
      <ImageBackground
        source={require('../../assets/backgrounds/searchCard.jpg')}
        style={{flex:1}}
      >
        <CardListCardsSearched topTab={TypeNavigation.game.cardsSelling}/>
      </ImageBackground>
    );
}

export default CardSellingSearchScreen