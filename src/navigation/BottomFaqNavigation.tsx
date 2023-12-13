import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react'
import { TypeNavigation } from '../constants/typesNavigation';
import { QuestionAnswerScreen, ErrataCardsScreen, FlowChartScreen } from '../screen';
import { Image } from 'react-native';
import { 
  errataCardOff,
  errataCardOn,
  rulingGeneralOff,
  rulingGeneralOn,
  flowChartAtkOn,
  flowChartAtkOff
} from '../assets/icons'; 
import { iconOn, iconOff } from '../constants/colors';
import { useApp } from '../hooks';
import { msjHelp } from '../constants/msjHelp';

const iconErrataCard = ({ color, size, focused }) => (
  focused ? <Image style={{
     height:30,
     width:30
  }} source={errataCardOn} /> 
  : <Image style={{
    height:30,
    width:30
 }} source={errataCardOff} />
)
const iconRulingGeneral = ({ color, size, focused }) => (
  focused ? <Image style={{
     height:30,
     width:30
  }} source={rulingGeneralOn} /> 
  : <Image style={{
    height:30,
    width:30
 }} source={rulingGeneralOff} />
)
const iconFlowChartAtk = ({ color, size, focused }) => (
  focused ? <Image style={{
     height:30,
     width:30
  }} source={flowChartAtkOn} /> 
  : <Image style={{
    height:30,
    width:30
 }} source={flowChartAtkOff} />
)

const Tab = createBottomTabNavigator();
const BottomFaqNavigation = () => {

  const {setMsjHelp} = useApp()

  const msjAyudaQa = ()=>{
    setMsjHelp(msjHelp.QA)      
  }
  const msjAyudaErrataCards = ()=>{
    setMsjHelp(msjHelp.errataCards)      
  }
  const msjAyudaFlowChart = ()=>{
    setMsjHelp(msjHelp.flowChart)      
  }

  return (
    <Tab.Navigator
        screenOptions={{headerShown:false}}
    >
        <Tab.Screen 
          name={TypeNavigation.game.questionAnswer} 
          component={QuestionAnswerScreen}
          options={{
            tabBarIcon:iconRulingGeneral,
            tabBarActiveTintColor:iconOn,
            tabBarInactiveTintColor:iconOff,
            tabBarActiveBackgroundColor:iconOff,
            tabBarInactiveBackgroundColor:iconOn,
          }}
          listeners={{focus:msjAyudaQa}}
        />
        <Tab.Screen 
          name={TypeNavigation.game.errataCards} 
          component={ErrataCardsScreen}
          options={{
            tabBarIcon:iconErrataCard,
            tabBarActiveTintColor:iconOn,
            tabBarInactiveTintColor:iconOff,
            tabBarActiveBackgroundColor:iconOff,
            tabBarInactiveBackgroundColor:iconOn,
          }}
          listeners={{focus:msjAyudaErrataCards}}
        />
        <Tab.Screen 
          name={TypeNavigation.game.flowChart} 
          component={FlowChartScreen}
          options={{
            tabBarIcon:iconFlowChartAtk,
            tabBarActiveTintColor:iconOn,
            tabBarInactiveTintColor:iconOff,
            tabBarActiveBackgroundColor:iconOff,
            tabBarInactiveBackgroundColor:iconOn,
          }}
          listeners={{focus:msjAyudaFlowChart}}
        />
    </Tab.Navigator>
  )
}

export default BottomFaqNavigation