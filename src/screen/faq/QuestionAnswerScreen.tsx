import React from 'react'
import { QuestionAnswer } from '../../components/faqs';
import { ImageBackground } from 'react-native';
import { backgroundRulingGeneral } from '../../assets/backgrounds';

const QuestionAnswerScreen = () => {
  return (
    <ImageBackground
      source={backgroundRulingGeneral}
      resizeMode='cover'
      style={{flex:1}}
    >
          <QuestionAnswer/>
    </ImageBackground>
  )
}

export default QuestionAnswerScreen