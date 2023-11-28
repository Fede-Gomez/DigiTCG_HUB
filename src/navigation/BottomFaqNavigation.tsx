import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react'
import { TypeNavigation } from '../constants/typesNavigation';
import { QuestionAnswerScreen, ErrataCardsScreen, FlowChartScreen } from '../screen';

const Tab = createBottomTabNavigator();
const BottomFaqNavigation = () => {
  return (
    <Tab.Navigator
        screenOptions={{headerShown:false}}
    >
        <Tab.Screen 
          name={TypeNavigation.game.questionAnswer} 
          component={QuestionAnswerScreen} 
        />
        <Tab.Screen 
          name={TypeNavigation.game.errataCards} 
          component={ErrataCardsScreen} 
        />
        <Tab.Screen 
          name={TypeNavigation.game.flowChart} 
          component={FlowChartScreen} 
        />
    </Tab.Navigator>
  )
}

export default BottomFaqNavigation