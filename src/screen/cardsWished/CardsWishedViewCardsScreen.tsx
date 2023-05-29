import React, { useState, useEffect } from 'react'
import { FlatList, Button, View } from 'react-native';
import { useAppSelector } from '../../hooks/useReducerHook';
import { CardDigimon } from '../../components/cards';
import { useCards } from '../../hooks';

export const CardsWishedViewCardsScreen = () => {
  const cards = useAppSelector(state => state.cards.listCards)
  const listCardsFiltered = useAppSelector(state => state.cards.listCardsFiltered)
  const [listCards, setListCards] = useState({})
  const {addCardWished, removeCardWished} = useCards()

  useEffect(() => {
    listCardsFiltered.length === 0 ? setListCards(cards) : setListCards(listCardsFiltered)
  }, [listCardsFiltered])
  
  const addWish = (card)=>{    
    addCardWished(card)
  }
 
  const removeWish = (card)=>{
    removeCardWished(card)
  }

  const renderItem = ({item})=>{        
    return <View style={{flexDirection:'column'}}>
      <CardDigimon card={item}/>
      <View style={{flexDirection:'row'}}>
        <Button
          title='Add'
          onPress={()=>addWish(item)}
        />
        <Button
          title='Remove'
          onPress={()=>removeWish(item)}
        />
      </View>
    </View>
  }
  return (
    <>
      <FlatList
        data={listCards}
        renderItem={renderItem}
        numColumns={3}
      />
    </>
    )
}
