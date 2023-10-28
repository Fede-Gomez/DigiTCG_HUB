import React, { useEffect } from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { TypeNavigation } from '../constants/typesNavigation';
import { BottomCardsWishedTabNavigation, BottomDeckBuilderTabNavigation, BottomCardsSellingTabNavigation } from './BottomTabNavigation';
import { TcgPlayerScreen } from '../screen';
import { BackHandler } from 'react-native';

const Tab = createMaterialTopTabNavigator();


export const TopTapNavigation = () => {
  useEffect(() => {
    const backAction = () => {
      // Aquí puedes agregar la lógica que desees para manejar el botón "back"
      // Si deseas deshabilitarlo completamente, simplemente devuelve true.
      // Si deseas personalizar su comportamiento, puedes hacerlo aquí.
      return true;
    };

    const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);

    return () => backHandler.remove();
  }, []);
  return (
      <Tab.Navigator 
        screenOptions={{
          swipeEnabled:false
        }}
      >
        <Tab.Screen name={TypeNavigation.game.deckBuilder} component={BottomDeckBuilderTabNavigation} />
        <Tab.Screen name={TypeNavigation.game.cardsWished} component={BottomCardsWishedTabNavigation} />
        <Tab.Screen name={TypeNavigation.game.cardsSelling} component={BottomCardsSellingTabNavigation} />
        <Tab.Screen name={TypeNavigation.game.tcgPlayer} component={TcgPlayerScreen} />
      </Tab.Navigator>
  )
}
