import React, {useRef} from 'react'
import { Image, ImageBackground } from 'react-native';
import { CardListCardsSelected } from '../../components'
import { useAppSelector } from '../../hooks/useReducerHook';
import { TypeNavigation } from '../../constants/typesNavigation';
import { backgroundCompra, backgroundDeck, backgroundVenta } from '../../assets/backgrounds';

const CardsSelectedScreen = () => {
  const builderWishedSelling = useAppSelector(state => state.app.builderWishedSelling)
  const fondo = useRef('')
  
  switch (builderWishedSelling) {
    case TypeNavigation.game.deckBuilder: fondo.current = backgroundDeck      
      break;
    case TypeNavigation.game.cardsBuy : fondo.current = backgroundCompra
      break;
    case TypeNavigation.game.cardsSell : fondo.current = backgroundVenta
      break;
  }

  return (
    <ImageBackground
      source={fondo.current}
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