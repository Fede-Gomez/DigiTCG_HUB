import React from 'react'
import { useDeck } from '../../hooks';
import prompt from 'react-native-prompt-android';
import { Text, TouchableOpacity } from 'react-native';

export const BtnChangeNameDeck = ({cards, nameDeck, setDeckChoice}) => {
    const {changeNameDeck} = useDeck()
    const showPrompt = ()=>{
      prompt(
        'Cambiar nombre',
        `Escribe el nuevo nombre del deck "${nameDeck}" `,
        [
         {text: 'Cancel', onPress: () => {
          setDeckChoice(nameDeck)
         }, style: 'cancel'},
         {text: 'OK', onPress: newName => {
          if(newName == '') 
              newName = 'Deck'+Math.random()
           setDeckChoice(newName),
            changeNameDeck(newName, nameDeck, cards)
          }},
        ],
        {
            cancelable: false,
            placeholder: 'name deck',
        }
      );
    }
  
    return (
      <TouchableOpacity
        onPress={()=>showPrompt()}
        style={{backgroundColor:'black', padding:10}}
      >
        <Text
          style={{fontSize:20, color:'white'}}
        >Cambiar nombre</Text>
      </TouchableOpacity>
    ) 
}
