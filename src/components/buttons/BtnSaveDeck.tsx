import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { useDeck } from '../../hooks';
import { TypeNavigation } from '../../constants/typesNavigation';
import prompt from 'react-native-prompt-android';
import { Button } from 'react-native';

export const ButtonSaveDeck = ({cards}) => {
    const navigation = useNavigation()
    const { saveDeck }= useDeck()
    
    const createDeckOfSavePicked = (nameText:string)=>{      
      saveDeck(nameText,cards)
      navigation.navigate(TypeNavigation.game.homeGameTopBar);
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
      <>
        <Button 
          title={'Save deck'} 
          onPress={showPrompt}
        />
      </>
    ) 
}
