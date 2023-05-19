import React, { useState, useEffect } from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { DeckBuilderScreen } from './DeckBuilderScreen';
import { TcgPlayerScreen } from './TcgPlayerScreen';
import { useCards } from '../hooks/useCards';
import { useAccount } from '../hooks/useAccount';

const Tab = createMaterialTopTabNavigator();


export const HomeScreen = () => {

  return (
      <Tab.Navigator >
        <Tab.Screen name="Deck Builder" component={DeckBuilderScreen} />
        <Tab.Screen name="Tcg Player" component={TcgPlayerScreen} />
      </Tab.Navigator>
  )
}
