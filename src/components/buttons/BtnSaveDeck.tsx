import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { useDeck } from '../../hooks';
import { TypeNavigation } from '../../constants/typesNavigation';
import prompt from 'react-native-prompt-android';
import { Text, TouchableOpacity } from 'react-native';
import { useAppSelector } from '../../hooks/useReducerHook';

export const ButtonSaveDeck = ({cards}) => {
    const navigation = useNavigation()
    const { saveDeck }= useDeck()
    const decks = useAppSelector(state => state.user.profile.decks)    
    const createDeckOfSavePicked = (nameText:string)=>{
      if(Object.keys(decks).includes(nameText)){
        saveDeck('Se actualizo el deck', 'Error al actualizar deck', nameText,cards)        
      }else{
        saveDeck('Se guardo el deck', 'Error al guardar deck', nameText,cards)
      }
      navigation.navigate(TypeNavigation.game.home);
    }
  
    const showPrompt = ()=>{
      prompt(
        'Save deck',
        'Enter name deck',
        [
         {text: 'Cancel', onPress: () => {}, style: 'cancel'},
         {text: 'OK', onPress: nameText => createDeckOfSavePicked(nameText)},
        ],
        {
            cancelable: false,
            placeholder: 'name deck'
        }
      );
    }
  
    return (
      <TouchableOpacity
        onPress={()=>showPrompt()}
        style={{backgroundColor:'blue', padding:10}}
      >
        <Text
          style={{fontSize:20, fontWeight:'bold', color:'white'}}
        >Guardar deck</Text>
      </TouchableOpacity>
    ) 
}
