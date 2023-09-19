import React from 'react'
import { Button, FlatList, Text, View, ImageBackground } from 'react-native';
import { useAppSelector } from '../../hooks/useReducerHook'
import { CardDigimon } from '../../components/cards'
import { useCards, useDeck } from '../../hooks';
import prompt from 'react-native-prompt-android';
import { TypeNavigation } from '../../constants/typesNavigation';
import { useNavigation } from '@react-navigation/native';
import { listCardsSelected } from '../../styles';

const DeckBuilderCardsSelectedScreen = () => {
    const navigation = useNavigation()
    const cards = useAppSelector(state => state.cards.listCardsPicked)
    const style = listCardsSelected
    const {saveDeck} = useDeck()
    const {addCards, removeCards} = useCards()

  
    const add = (card)=>{
      addCards(card)
    }
    const remove = (card)=>{
      removeCards(card)        
    }
    const renderItem = (item)=>{
        const {count} = item.item
        return <View style={style.container} >
          <CardDigimon card={item.item}/>
            <Text style={style.count}>{count}</Text>
          <View style={style.buttonsAddRemove}>
          <Button
            title='Add'
            onPress={()=>add(item)}
          />
          <Button
            title='Remove'
            onPress={()=>remove(item)}
          />
          </View>
        </View>
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
        return <View style={style.headerList}>
          <Button 
            title={'Save deck'} 
            onPress={showPrompt}
          />
        </View>
    }

  return (
    <ImageBackground
      source={require('../../assets/backgrounds/cardSelected.jpg')}
      resizeMode='cover'
      style={{
        flex:1,        
      }}
    >
      {cards.length == 0 
      ? <View style={style.addCardsContainer}>
          <Text style={style.addCards} >Agrega cartas</Text>
        </View>  
      :   <FlatList
              ListHeaderComponent={renderHeader}
              keyExtractor={(item) => item.id.toString()}
              data={cards}
              renderItem={renderItem}
              numColumns={3}
          />}
    </ImageBackground>
  )
}

export default DeckBuilderCardsSelectedScreen