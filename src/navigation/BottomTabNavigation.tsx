import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CardSelectedScreen, DeckBuilderScreen, DeckSelectedScreen, FilterSelectedScreen, SearchCardScreen } from '../screen';
import { TypeNavigation } from '../constants/typesNavigation';

const Tab = createBottomTabNavigator();

export const BottomDeckBuilderTabNavigation = () => {
  return (
    <Tab.Navigator
        screenOptions={{headerShown:false}}
    >
        <Tab.Screen name={TypeNavigation.game.cardsView} component={DeckBuilderScreen} />
        <Tab.Screen name={TypeNavigation.game.cardSelected} component={CardSelectedScreen} />
        <Tab.Screen name={TypeNavigation.game.deckSelected} component={DeckSelectedScreen} />
        <Tab.Screen name={TypeNavigation.game.filterSelect} component={FilterSelectedScreen} />
        <Tab.Screen name={TypeNavigation.game.searchCard} component={SearchCardScreen} />
    </Tab.Navigator>
  )
}


