import React, { useEffect } from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { TypeNavigation } from '../constants/typesNavigation';
import { CardsWishedScreen, DeckBuilderScreen, TcgPlayerScreen } from '../screen';
import { useCards } from '../hooks';
import { BottomCardsWishedTabNavigation, BottomDeckBuilderTabNavigation } from './BottomTabNavigation';

const Tab = createMaterialTopTabNavigator();


export const TopTapNavigation = () => {

  return (
      <Tab.Navigator 
        screenOptions={{
          swipeEnabled:false
        }}
      >
        <Tab.Screen name={TypeNavigation.game.deckBuilder} component={BottomDeckBuilderTabNavigation} />
        <Tab.Screen name={TypeNavigation.game.tcgPlayer} component={TcgPlayerScreen} />
        <Tab.Screen name={TypeNavigation.game.cardsWished} component={BottomCardsWishedTabNavigation} />
      </Tab.Navigator>
  )
}
