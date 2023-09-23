import React from 'react'
import { View, FlatList, Button, ImageBackground, Text } from 'react-native';
import { useAppSelector } from '../../hooks/useReducerHook'
import { CardDigimon, Folder } from '../../components'
import { useCards } from '../../hooks'
import { listCardsView, folder } from '../../styles'

  const DeckBuilderViewCardsScreen = () => {
  const card = useAppSelector(state => state.cards.view)
  const {addCards, removeCards, clearListCardsView} = useCards()
  const styleCard = listCardsView; 
  const styleFolder = folder;

  const add = (cards)=>{
    addCards(cards)
  }

  const remove = (card)=>{
      removeCards(card)        
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
    return <View style={styleCard.container}>
    <CardDigimon card={item}/>
    <View style={styleCard.buttonsAddRemove}>
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
    {card.count == 0
      ? <View style={styleFolder.container}>
          <Folder/>
        </View>
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

export default DeckBuilderViewCardsScreen