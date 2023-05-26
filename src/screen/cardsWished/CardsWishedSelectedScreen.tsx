import React from 'react'
import { Button, FlatList, Text, View } from 'react-native';
import { useAppSelector } from '../../hooks/useReducerHook'
import { CardDigimon } from '../../components/cards'
import { useDeck } from '../../hooks';
import prompt from 'react-native-prompt-android';
import { TypeNavigation } from '../../constants/typesNavigation';
import { useNavigation } from '@react-navigation/native';

const CardsWishedSelectedScreen = () => {
    const navigation = useNavigation()
    const cards = useAppSelector(state => state.cards.listCardsPicked)
    const {saveDeck} = useDeck()
    const renderItem = (item)=>{
        return <CardDigimon card={item.item}/>
    }

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

    const renderHeader = () => {
        return <View style={{flex:1, flexDirection:'row', justifyContent: 'space-around'}}>
          <Button 
            title={'Save deck'} 
            onPress={showPrompt}
          />
        </View>
    }

  return (
    cards.length == 0 
    ?   <Text>Agrega cartas</Text>
    :   <FlatList
            ListHeaderComponent={renderHeader}
            keyExtractor={(item) => item.id.toString()}
            data={cards}
            renderItem={renderItem}
            numColumns={3}
        />
  )
}

export default CardsWishedSelectedScreen