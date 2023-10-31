import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { 
  CardsSelectedScreen,
  DecksSelectedScreen,
  SearchCardScreen,
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
  searchOff, 
  searchOn 
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
const iconSearch = ({ color, size, focused }) => (
  focused ? <Image style={{
     height:30,
     width:30
  }} source={searchOn} /> 
  : <Image style={{
    height:30,
    width:30
 }} source={searchOff} />
)

export const BottomCardTabNavigation = () => {
  return (
    <Tab.Navigator
        screenOptions={{headerShown:false}}
    >
        <Tab.Screen name={TypeNavigation.game.cardsView} component={ViewCardsScreen} options={{tabBarIcon: iconCardView, tabBarShowLabel:false, tabBarActiveBackgroundColor:'#3D0605', tabBarInactiveBackgroundColor:'#C09F79'}} />
        <Tab.Screen name={TypeNavigation.game.cardSelected} component={CardsSelectedScreen} options={{tabBarIcon: iconCardSelect, tabBarShowLabel:false, tabBarActiveBackgroundColor:'#3D0605',  tabBarInactiveBackgroundColor:'#C09F79'}} />
        <Tab.Screen name={TypeNavigation.game.deckSelected} component={DecksSelectedScreen} options={{tabBarIcon: iconDeck, tabBarShowLabel:false, tabBarActiveBackgroundColor:'#3D0605',  tabBarInactiveBackgroundColor:'#C09F79'}} />
        <Tab.Screen name={TypeNavigation.game.searchCard} component={SearchCardScreen} options={{tabBarIcon: iconSearch, tabBarShowLabel:false, tabBarActiveBackgroundColor:'#3D0605',  tabBarInactiveBackgroundColor:'#C09F79'}} />
    </Tab.Navigator>
  )
}
