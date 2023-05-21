import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { DeckBuilderScreen } from './DeckBuilderScreen';
import { TcgPlayerScreen } from './TcgPlayerScreen';

const Tab = createMaterialTopTabNavigator();


export const HomeScreen = () => {

  return (
      <Tab.Navigator >
        <Tab.Screen name="Deck Builder" component={DeckBuilderScreen} />
        <Tab.Screen name="Tcg Player" component={TcgPlayerScreen} />
      </Tab.Navigator>
  )
}
