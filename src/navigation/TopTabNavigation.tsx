import React, { useState, useEffect } from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { TypeNavigation } from '../constants/typesNavigation';
import { BottomCardTabNavigation } from './BottomTabNavigation';
import { CountMemoryScreen, TcgPlayerScreen } from '../screen';
import { BackHandler, View, TouchableOpacity, Text } from 'react-native';
import { ModalApoyoComentarios, ModalAyuda } from '../components';
import { useApp, useCards } from '../hooks';
import { useAppSelector } from '../hooks/useReducerHook';
import BottomFaqNavigation from './BottomFaqNavigation';
import { msjHelp } from '../constants/msjHelp';

const Tab = createMaterialTopTabNavigator();


export const TopTapNavigation = () => {
  const [isModalVisibleApoyoComentario, setIsModalVisibleApoyoComentario] = useState(false);
  const [isModalVisibleAyuda, setIsModalVisibleAyuda] = useState(false);
  const { setCardsBuySellAfterLogin } = useCards()
  const profile = useAppSelector(state => state.user.profile)
  const {setMsjHelp} = useApp()


  const msjTCGPlayer = ()=>{
    setMsjHelp(msjHelp.tcgPlayer)      
  }
  const msjCountMemory = ()=>{
    setMsjHelp(msjHelp.countMemory)      
  }
  
  const toggleModalApoyoComentario = () => {
    setIsModalVisibleApoyoComentario(!isModalVisibleApoyoComentario);
  };
  
  const toggleModalAyuda = () => {
    setIsModalVisibleAyuda(!isModalVisibleAyuda);
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

  useEffect(() => {
    setCardsBuySellAfterLogin(profile)
  }, [])
  
  return (
    <>
      <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-around', backgroundColor:'#2196F3', height:45}}>
        <TouchableOpacity
          onPress={toggleModalApoyoComentario}
        >
          <Text style={{color:'white', fontSize:20}}>Apoyo y Comentarios</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={toggleModalAyuda}
        >
          <Text style={{color:'white', fontSize:20}}>Ayuda</Text>
        </TouchableOpacity>
      </View>
      <Tab.Navigator 
        screenOptions={{swipeEnabled:false}}
        initialRouteName={TypeNavigation.game.deckBuilder}
      >
        <Tab.Screen name={TypeNavigation.game.deckBuilder} component={BottomCardTabNavigation} options={{title:'Cartas'}} />
        <Tab.Screen name={TypeNavigation.game.faq} component={BottomFaqNavigation} />
        <Tab.Screen name={TypeNavigation.game.countMemory} component={CountMemoryScreen} listeners={{focus:msjCountMemory}}/>
        <Tab.Screen name={TypeNavigation.game.tcgPlayer} component={TcgPlayerScreen} listeners={{focus:msjTCGPlayer}}/>
      </Tab.Navigator>
      <ModalApoyoComentarios isModalVisible={isModalVisibleApoyoComentario} toggleModal={toggleModalApoyoComentario}/>
      <ModalAyuda isModalVisible={isModalVisibleAyuda} toggleModal={toggleModalAyuda}/>
    </>
  )
}
