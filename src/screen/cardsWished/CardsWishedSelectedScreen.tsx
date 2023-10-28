import React from 'react'
import { ImageBackground } from 'react-native';
import { useAppSelector } from '../../hooks/useReducerHook'
import { CardListCardsSelected } from '../../components'
import { TypeNavigation } from '../../constants/typesNavigation';

const CardsWishedSelectedScreen = () => {
    const cards = useAppSelector(state => state.cards.wished)
    
  return (
    <ImageBackground
      source={require('../../assets/backgrounds/cardSelected.jpg')}
      resizeMode='cover'
      style={{
        flex:1,        
      }}
    >
        <CardListCardsSelected topTab={TypeNavigation.game.cardsWished} cards={cards}/>
     </ImageBackground>
  )
}

export default CardsWishedSelectedScreen