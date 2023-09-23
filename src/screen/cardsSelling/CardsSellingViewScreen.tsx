import React, { useState, useEffect } from 'react'
import { FlatList, Button, View, ImageBackground } from 'react-native';
import { useAppSelector } from '../../hooks/useReducerHook';
import { CardDigimon, Folder } from '../../components';
import { useCards } from '../../hooks';
import { listCardsView } from '../../styles';

export const CardsSellingViewCardsScreen = () => {
  const cards = useAppSelector(state => state.cards.view)
  const { addCardSelling, removeCardSelling } = useCards()
  const { clearListCardsView } = useCards()
  const style = listCardsView;
  
  const addSell = (card)=>{    
    addCardSelling(card)
  }
 
  const removeSell = (card)=>{
    removeCardSelling(card)
  }

  const renderHeader = () => {
    return <View style={{flex:1, flexDirection:'row', justifyContent: 'space-around'}}>
      <Button 
        title={'Back'}
        onPress={()=>clearListCardsView()}
      />
    </View>
  }

  const renderListEmpty = () => {
    return <View style={{flex:1, flexDirection:'row', justifyContent: 'space-around'}}>
      <Button 
        title={'No hay nada aca'}
        onPress={()=>clearListCardsView()}
      />
    </View>
  }

  const renderItem = ({item})=>{        
    return <View style={style.container}>
    <CardDigimon card={item}/>
    <View style={style.buttonsAddRemove}>
        <Button
          title='Add'
          onPress={()=>addSell(item)}
        />
        <Button
          title='Remove'
          onPress={()=>removeSell(item)}
        />
      </View>
    </View>
  }
  return (
    <ImageBackground
      source={require('../../assets/backgrounds/cardView.jpg')}
      style={{flex:1}}
    >
      {cards.count == 0
          ? <Folder/>
          : <FlatList
              ListEmptyComponent={renderListEmpty}
              ListHeaderComponent={renderHeader}
              data={cards}
              renderItem={renderItem}
              numColumns={3}
            />
      }
    </ImageBackground>
    )
}
