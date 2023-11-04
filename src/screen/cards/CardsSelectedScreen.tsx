import React from 'react'
import { ImageBackground } from 'react-native';
import { CardListCardsSelected } from '../../components'
import { useAppSelector } from '../../hooks/useReducerHook';
import { TypeNavigation } from '../../constants/typesNavigation';

const CardsSelectedScreen = () => {
  const builderWishedSelling = useAppSelector(state => state.app.builderWishedSelling)
  let fondo;
  switch (builderWishedSelling) {
    case TypeNavigation.game.deckBuilder: fondo = require('../../assets/backgrounds/deck.jpg')        
      break;
    case TypeNavigation.game.cardsBuy : fondo = require('../../assets/backgrounds/compra.jpg')
      break;
    case TypeNavigation.game.cardsSell : fondo = require('../../assets/backgrounds/venta.jpg')
      break;
  }
  return (
    <ImageBackground
      source={fondo}
      resizeMode='cover'
      style={{
        flex:1,
      }}
    >
      <CardListCardsSelected/>
    </ImageBackground>
  )
}

export default CardsSelectedScreen