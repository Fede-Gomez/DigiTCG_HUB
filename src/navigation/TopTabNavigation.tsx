import React, { useState, useEffect } from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { TypeNavigation } from '../constants/typesNavigation';
import { BottomCardTabNavigation } from './BottomTabNavigation';
import { TcgPlayerScreen } from '../screen';
import { BackHandler, Button } from 'react-native';
import { ModalApoyoComentarios } from '../components';

const Tab = createMaterialTopTabNavigator();


export const TopTapNavigation = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
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
    <>
      <Button
        title='Apoyo y Comentarios'
        onPress={toggleModal}
      />
      <Tab.Navigator 
        screenOptions={{swipeEnabled:false}}
        initialRouteName={TypeNavigation.game.deckBuilder}
      >
        <Tab.Screen name={TypeNavigation.game.deckBuilder} component={BottomCardTabNavigation} />
        <Tab.Screen name={TypeNavigation.game.tcgPlayer} component={TcgPlayerScreen} />
      </Tab.Navigator>
      <ModalApoyoComentarios isModalVisible={isModalVisible} toggleModal={toggleModal}/>
    </>
  )
}
