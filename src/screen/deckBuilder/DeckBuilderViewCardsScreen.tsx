import React, { useState, useEffect } from 'react'
import { View, FlatList, Button, ImageBackground } from 'react-native';
import { useAppSelector } from '../../hooks/useReducerHook'
import { CardDigimon } from '../../components/cards'
import { useCards } from '../../hooks'
import { listCardsView } from '../../styles/'

export const DeckBuilderViewCardsScreen = () => {
  const cards = useAppSelector(state => state.cards.listCards)
  const listCardsFiltered = useAppSelector(state => state.cards.listCardsFiltered)
  const [listCards, setListCards] = useState({})
  const {addCards, removeCards} = useCards()
  const style = listCardsView;

  useEffect(() => {
    listCardsFiltered.length === 0 ? setListCards(cards) : setListCards(listCardsFiltered)
  }, [listCardsFiltered])
  
  const add = (card)=>{
    addCards(card)
  }

  const remove = (card)=>{
      removeCards(card)        
  }


  const renderItem = ({item})=>{
    return <View style={style.container}>
    <CardDigimon card={item}/>
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

return (
  <ImageBackground
    source={require('../../assets/backgrounds/cardView.jpg')}
    style={{flex:1}}
  >
    <FlatList
      data={listCards}
      renderItem={renderItem}
      numColumns={3}
      removeClippedSubviews={true}
      maxToRenderPerBatch={10}
    />
  </ImageBackground>
  )
}
