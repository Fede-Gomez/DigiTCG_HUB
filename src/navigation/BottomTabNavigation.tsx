import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { 
  DeckBuilderCardsSelectedScreen,
  DeckBuilderDecksSelectedScreen,
  DeckBuilderFilterScreen,
  DeckBuilderSearchCardScreen,
  DeckBuilderViewCardsScreen,
  CardWishedSearchScreen,
  CardsWishedFilterScreen,
  CardsWishedSelectedScreen,
  CardsWishedViewCardsScreen,
  CardSellingSearchScreen,
  CardsSellingFilterScreen,
  CardsSellingSelectedScreen,
  CardsSellingViewCardsScreen,
} from '../screen/index'

import { TypeNavigation } from '../constants/typesNavigation';
import '../assets/icons/deckOff.png'
import { Image } from 'react-native';
import { 
  deckOff, 
  deckOn, 
  cardsSelectOff, 
  cardsSelectOn, 
  cardViewOff, 
  cardViewOn, 
  filterOff, 
  filterOn, 
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
const iconFilter = ({ color, size, focused }) => (
  focused ? <Image style={{
     height:30,
     width:30
  }} source={filterOn} /> 
  : <Image style={{
    height:30,
    width:30
 }} source={filterOff} />
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

export const BottomDeckBuilderTabNavigation = () => {
  return (
    <Tab.Navigator
        screenOptions={{headerShown:false}}
    >
        <Tab.Screen name={TypeNavigation.game.cardsView} component={DeckBuilderViewCardsScreen} options={{tabBarIcon: iconCardView}} />
        <Tab.Screen name={TypeNavigation.game.cardSelected} component={DeckBuilderCardsSelectedScreen} options={{tabBarIcon: iconCardSelect}} />
        <Tab.Screen name={TypeNavigation.game.deckSelected} component={DeckBuilderDecksSelectedScreen} options={{tabBarIcon: iconDeck}} />
        <Tab.Screen name={TypeNavigation.game.filterSelect} component={DeckBuilderFilterScreen} options={{tabBarIcon: iconFilter}} />
        <Tab.Screen name={TypeNavigation.game.searchCard} component={DeckBuilderSearchCardScreen} options={{tabBarIcon: iconSearch}} />
    </Tab.Navigator>
  )
}

export const BottomCardsWishedTabNavigation = () => {
  return (
    <Tab.Navigator
        screenOptions={{headerShown:false}}
    >
        <Tab.Screen name={TypeNavigation.game.cardsView} component={CardsWishedViewCardsScreen} options={{tabBarIcon: iconCardView}}/>
        <Tab.Screen name={TypeNavigation.game.cardSelected} component={CardsWishedSelectedScreen} options={{tabBarIcon: iconCardSelect}}/>
        <Tab.Screen name={TypeNavigation.game.filterSelect} component={CardsWishedFilterScreen} options={{tabBarIcon: iconFilter}}/>
        <Tab.Screen name={TypeNavigation.game.searchCard} component={CardWishedSearchScreen} options={{tabBarIcon: iconSearch}}/>
    </Tab.Navigator>
  )
}

export const BottomCardsSellingTabNavigation = () => {
  return (
    <Tab.Navigator
        screenOptions={{headerShown:false}}
    >
        <Tab.Screen name={TypeNavigation.game.cardsView} component={CardsSellingViewCardsScreen} options={{tabBarIcon: iconCardView}}/>
        <Tab.Screen name={TypeNavigation.game.cardSelected} component={CardsSellingSelectedScreen} options={{tabBarIcon: iconCardSelect}}/>
        <Tab.Screen name={TypeNavigation.game.filterSelect} component={CardsSellingFilterScreen} options={{tabBarIcon: iconFilter}}/>
        <Tab.Screen name={TypeNavigation.game.searchCard} component={CardSellingSearchScreen} options={{tabBarIcon: iconSearch}}/>
    </Tab.Navigator>
  )
}