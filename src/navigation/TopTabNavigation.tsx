import React, { useState, useEffect } from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useCards } from '../hooks/useCards';
import { useAccount } from '../hooks/useAccount';
import { DeckBuilderScreen } from '../screen/DeckBuilderScreen';
import { TcgPlayerScreen } from '../screen/TcgPlayerScreen';
import { TypeNavigation } from '../constants/typesNavigation';

const Tab = createMaterialTopTabNavigator();


export const TopTapNavigation = () => {
useCards()
  return (
      <Tab.Navigator >
        <Tab.Screen name={TypeNavigation.game.deckBuilder} component={DeckBuilderScreen} />
        <Tab.Screen name={TypeNavigation.game.tcgPlayer} component={TcgPlayerScreen} />
      </Tab.Navigator>
  )
}
