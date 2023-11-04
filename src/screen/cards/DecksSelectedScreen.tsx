import React from 'react'
import { CardListMyDeck } from '../../components'
import { ImageBackground } from 'react-native';

  const DecksSelectedScreen = () => {  
    return (
      <ImageBackground
        source={require('../../assets/backgrounds/myDecks.jpg')}
        resizeMode='cover'
        style={{flex:1}}
      >
        <CardListMyDeck />
      </ImageBackground>
      )  
}

export default DecksSelectedScreen