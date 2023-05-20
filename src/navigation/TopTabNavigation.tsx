import React, { useState, useEffect } from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useCards } from '../hooks/useCards';
import { useAccount } from '../hooks/useAccount';
import { DeckBuilderScreen } from '../screen/DeckBuilderScreen';
import { TcgPlayerScreen } from '../screen/TcgPlayerScreen';
import { TypeNavigation } from '../constants/typesNavigation';
import { useAppSelector } from '../hooks/useReducerHook';

const Tab = createMaterialTopTabNavigator();


export const TopTapNavigation = () => {
  const {loadAllCards} = useCards()

  useEffect(() => {
        loadAllCards();
    }, [])
    

  return (
      <Tab.Navigator 
        screenOptions={{
          swipeEnabled:false
        }}
      >
        <Tab.Screen name={TypeNavigation.game.deckBuilder} component={DeckBuilderScreen} />
        <Tab.Screen name={TypeNavigation.game.tcgPlayer} component={TcgPlayerScreen} />
      </Tab.Navigator>
  )
}
