import React from 'react'
import { CardListMyDeck } from '../../components'
import { ImageBackground } from 'react-native';
import { backgroundMyDeck } from '../../assets/backgrounds';

  const DecksSelectedScreen = () => {  
    return (
      <ImageBackground
        source={backgroundMyDeck}
        resizeMode='cover'
        style={{flex:1}}
      >
        <CardListMyDeck />
      </ImageBackground>
      )  
}

export default DecksSelectedScreen