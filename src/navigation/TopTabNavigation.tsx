import React, { useEffect } from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useCards } from '../hooks/useCards';
import { TypeNavigation } from '../constants/typesNavigation';
import { DeckBuilderScreen, TcgPlayerScreen } from '../screen';

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
