import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { TypeNavigation } from '../constants/typesNavigation';
import { BottomCardsWishedTabNavigation, BottomDeckBuilderTabNavigation, BottomCardsSellingTabNavigation } from './BottomTabNavigation';
import { TcgPlayerScreen } from '../screen';

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
        <Tab.Screen name={TypeNavigation.game.cardsSelling} component={BottomCardsSellingTabNavigation} />
      </Tab.Navigator>
  )
}
