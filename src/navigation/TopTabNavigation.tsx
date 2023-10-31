import React, { useEffect } from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { TypeNavigation } from '../constants/typesNavigation';
import { BottomCardTabNavigation } from './BottomTabNavigation';
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
        screenOptions={{swipeEnabled:false}}
        initialRouteName={TypeNavigation.game.deckBuilder}
      >
        <Tab.Screen name={TypeNavigation.game.deckBuilder} component={BottomCardTabNavigation} options={{title:'Cards'}} />
        <Tab.Screen name={TypeNavigation.game.tcgPlayer} component={TcgPlayerScreen} />
      </Tab.Navigator>
  )
}
