import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { 
  CardsSelectedScreen,
  DecksSelectedScreen,
  ViewCardsScreen,
} from '../screen/index'
import { TypeNavigation } from '../constants/typesNavigation';
import { Image } from 'react-native';
import { 
  deckOff, 
  deckOn, 
  cardsSelectOff, 
  cardsSelectOn, 
  cardViewOff, 
  cardViewOn, 
} from '../assets/icons'; 
import { iconOn, iconOff } from '../constants/colors';
import { msjHelp } from '../constants/msjHelp';
import { useApp } from '../hooks';

const Tab = createBottomTabNavigator();

const iconCardView = ({ color, size, focused }) => (
  focused ? <Image style={{
     height:30,
     width:30
  }} source={cardViewOn} /> 
  : <Image style={{
    height:30,
    width:30
 }} source={cardViewOff} />
)
const iconDeck = ({ color, size, focused }) => (
  focused ? <Image style={{
     height:30,
     width:30
  }} source={deckOn} /> 
  : <Image style={{
    height:30,
    width:30
 }} source={deckOff} />
)
const iconCardSelect = ({ color, size, focused }) => (
  focused ? <Image style={{
     height:30,
     width:30
  }} source={cardsSelectOn} /> 
  : <Image style={{
    height:30,
    width:30
 }} source={cardsSelectOff} />
)
export const BottomCardTabNavigation = () => {
  const {setMsjHelp} = useApp()

  const msjAyudaCartas = ()=>{
    setMsjHelp(msjHelp.cartas)      
  }
  const msjAyudaCartasSeleccionadas = ()=>{
    setMsjHelp(msjHelp.cartasSeleccionadas)      
  }
  const msjAyudaDeck = ()=>{
    setMsjHelp(msjHelp.deck)      
  }
  return (
    <Tab.Navigator
        screenOptions={{headerShown:false}}
    >
        <Tab.Screen 
          name={TypeNavigation.game.cardsView} 
          component={ViewCardsScreen} 
          options={{
            tabBarIcon: iconCardView, 
            tabBarActiveTintColor:iconOn,
            tabBarInactiveTintColor:iconOff,
            tabBarActiveBackgroundColor:iconOff,
            tabBarInactiveBackgroundColor:iconOn,
            title:'Cartas'
          }} 
          listeners={{focus:msjAyudaCartas}}
        />
        <Tab.Screen 
          name={TypeNavigation.game.cardSelected} 
          component={CardsSelectedScreen} 
          options={{
            tabBarIcon: iconCardSelect, 
            tabBarActiveTintColor:iconOn,
            tabBarInactiveTintColor:iconOff,
            tabBarActiveBackgroundColor:iconOff,
            tabBarInactiveBackgroundColor:iconOn,
            title:'Cartas seleccionadas'
          }}
          listeners={{focus:msjAyudaCartasSeleccionadas}}
        />
        <Tab.Screen 
          name={TypeNavigation.game.deckSelected} 
          component={DecksSelectedScreen} 
          options={{
            tabBarIcon: iconDeck, 
            tabBarActiveTintColor:iconOn,
            tabBarInactiveTintColor:iconOff,
            tabBarActiveBackgroundColor:iconOff,
            tabBarInactiveBackgroundColor:iconOn,
            title:'Deck',
          }}
          listeners={{focus:msjAyudaDeck}}
        />
    </Tab.Navigator>
  )
}
