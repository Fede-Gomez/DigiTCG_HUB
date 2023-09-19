import React, { useState, useEffect } from 'react'
import { FlatList, Button, View, ImageBackground } from 'react-native';
import { useAppSelector } from '../../hooks/useReducerHook';
import { CardDigimon } from '../../components/cards';
import { useCards } from '../../hooks';
import { listCardsView } from '../../styles';

export const CardsSellingViewCardsScreen = () => {
  const cards = useAppSelector(state => state.cards.listCards)
  const listCardsFiltered = useAppSelector(state => state.cards.listCardsFiltered)
  const [listCards, setListCards] = useState({})
  const {addCardWished, removeCardWished} = useCards()
  const style = listCardsView;

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
    return <View style={style.container}>
    <CardDigimon card={item}/>
    <View style={style.buttonsAddRemove}>
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
