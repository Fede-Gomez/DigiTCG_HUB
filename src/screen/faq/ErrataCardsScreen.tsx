import React from 'react'
import { Text, ImageBackground } from 'react-native';
import { backgroundErrataCard } from '../../assets/backgrounds';
import { ErrataCards } from '../../components';

const ErrataCardsScreen = () => {
  return (
    <ImageBackground
    source={backgroundErrataCard}
    resizeMode='cover'
    style={{
      flex:1,
    }}
  >
    <ErrataCards/>
</ImageBackground>
  )
}

export default ErrataCardsScreen