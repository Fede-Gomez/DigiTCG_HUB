import React from 'react'
import { FlowChart } from '../../components';
import { ImageBackground } from 'react-native';
import { backgroundFlowChartAtk } from '../../assets/backgrounds';

const FlowChartScreen = () => {  
  return (
    <ImageBackground
    source={backgroundFlowChartAtk}
    resizeMode='cover'
    style={{
      flex:1,
    }}
  >
    <FlowChart/>
  </ImageBackground>
  )
}

export default FlowChartScreen