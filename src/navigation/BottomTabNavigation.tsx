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
  return (
    <Tab.Navigator
        screenOptions={{headerShown:false}}
    >
        <Tab.Screen 
          name={TypeNavigation.game.cardsView} 
          component={ViewCardsScreen} 
          options={{
            tabBarIcon: iconCardView, 
            tabBarActiveTintColor:'#C09F79',
            tabBarInactiveTintColor:'#3D0605',
            tabBarActiveBackgroundColor:'#3D0605', 
            tabBarInactiveBackgroundColor:'#C09F79',
            title:'Cartas'
          }} 
        />
        <Tab.Screen 
          name={TypeNavigation.game.cardSelected} 
          component={CardsSelectedScreen} 
          options={{
            tabBarIcon: iconCardSelect, 
            tabBarActiveTintColor:'#C09F79',
            tabBarInactiveTintColor:'#3D0605',
            tabBarActiveBackgroundColor:'#3D0605',  
            tabBarInactiveBackgroundColor:'#C09F79',
            title:'Cartas seleccionadas'
          }} 
        />
        <Tab.Screen 
          name={TypeNavigation.game.deckSelected} 
          component={DecksSelectedScreen} 
          options={{
            tabBarIcon: iconDeck, 
            tabBarActiveTintColor:'#C09F79',
            tabBarInactiveTintColor:'#3D0605',
            tabBarActiveBackgroundColor:'#3D0605',  
            tabBarInactiveBackgroundColor:'#C09F79',
            title:'Deck',
          }} 
        />
    </Tab.Navigator>
  )
}
