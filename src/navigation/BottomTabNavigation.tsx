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

const Tab = createBottomTabNavigator();

export const BottomDeckBuilderTabNavigation = () => {
  return (
    <Tab.Navigator
        screenOptions={{headerShown:false}}
    >
        <Tab.Screen name={TypeNavigation.game.cardsView} component={DeckBuilderViewCardsScreen} />
        <Tab.Screen name={TypeNavigation.game.cardSelected} component={DeckBuilderCardsSelectedScreen} />
        <Tab.Screen name={TypeNavigation.game.deckSelected} component={DeckBuilderDecksSelectedScreen} />
        <Tab.Screen name={TypeNavigation.game.filterSelect} component={DeckBuilderFilterScreen} />
        <Tab.Screen name={TypeNavigation.game.searchCard} component={DeckBuilderSearchCardScreen} />
    </Tab.Navigator>
  )
}

export const BottomCardsWishedTabNavigation = () => {
  return (
    <Tab.Navigator
        screenOptions={{headerShown:false}}
    >
        <Tab.Screen name={TypeNavigation.game.cardsView} component={CardsWishedViewCardsScreen} />
        <Tab.Screen name={TypeNavigation.game.cardSelected} component={CardsWishedSelectedScreen} />
        <Tab.Screen name={TypeNavigation.game.filterSelect} component={CardsWishedFilterScreen} />
        <Tab.Screen name={TypeNavigation.game.searchCard} component={CardWishedSearchScreen} />
    </Tab.Navigator>
  )
}

export const BottomCardsSellingTabNavigation = () => {
  return (
    <Tab.Navigator
        screenOptions={{headerShown:false}}
    >
        <Tab.Screen name={TypeNavigation.game.cardsView} component={CardsSellingViewCardsScreen} />
        <Tab.Screen name={TypeNavigation.game.cardSelected} component={CardsSellingSelectedScreen} />
        <Tab.Screen name={TypeNavigation.game.filterSelect} component={CardsSellingFilterScreen} />
        <Tab.Screen name={TypeNavigation.game.searchCard} component={CardSellingSearchScreen} />
    </Tab.Navigator>
  )
}