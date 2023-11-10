import React from 'react'
import { ImageBackground } from 'react-native';
import { CardListCardsSelected } from '../../components'
import { useAppSelector } from '../../hooks/useReducerHook';
import { TypeNavigation } from '../../constants/typesNavigation';
import { backgroundCompra, backgroundDeck, backgroundVenta } from '../../assets/backgrounds';

const CardsSelectedScreen = () => {
  const builderWishedSelling = useAppSelector(state => state.app.builderWishedSelling)
  let fondo;
  switch (builderWishedSelling) {
    case TypeNavigation.game.deckBuilder: fondo = backgroundDeck      
      break;
    case TypeNavigation.game.cardsBuy : fondo = backgroundCompra
      break;
    case TypeNavigation.game.cardsSell : fondo = backgroundVenta
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