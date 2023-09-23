import React, { useState, useEffect } from 'react'
import { FlatList, Button, View, ImageBackground } from 'react-native';
import { useAppSelector } from '../../hooks/useReducerHook';
import { CardDigimon, Folder } from '../../components';
import { useCards } from '../../hooks';
import { listCardsView } from '../../styles';

const CardsWishedViewCardsScreen = () => {
  const card = useAppSelector(state => state.cards.view)
  const { clearListCardsView } = useCards()
  const { addCardWished, removeCardWished } = useCards()
  const style = listCardsView;
  
  const addWish = (card)=>{        
    addCardWished(card)
  }
 
  const removeWish = (card)=>{
    removeCardWished(card)
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
        {card.count == 0
          ? <Folder/>
          : <FlatList
              ListEmptyComponent={renderListEmpty}
              ListHeaderComponent={renderHeader}
              data={card}
              renderItem={renderItem}
              numColumns={3}
            />
        }
      </ImageBackground>
    )
}

export default CardsWishedViewCardsScreen