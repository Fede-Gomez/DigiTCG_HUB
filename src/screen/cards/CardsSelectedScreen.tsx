import React from 'react'
import { ImageBackground } from 'react-native';
import { CardListCardsSelected } from '../../components'

const CardsSelectedScreen = () => {
  return (
    <ImageBackground
      source={require('../../assets/backgrounds/cardSelected.jpg')}
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