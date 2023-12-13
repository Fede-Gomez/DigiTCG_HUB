import React from 'react'
import { ImageBackground, View } from 'react-native';
import { CardListCardsSelected, MemoryGauge } from '../../components'
import { backgroundMemoryGauge } from '../../assets/backgrounds';
const CountMemoryScreen = () => {
    return (
        <ImageBackground
          source={backgroundMemoryGauge}
          resizeMode='cover'
          style={{
            flex:1,
          }}
        >
          <MemoryGauge/>
        </ImageBackground>
      )
}

export default CountMemoryScreen