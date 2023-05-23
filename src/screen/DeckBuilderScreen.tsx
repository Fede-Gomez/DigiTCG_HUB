import React from 'react'
import { View, FlatList, Button } from 'react-native'
import { useAppSelector } from '../hooks/useReducerHook'
import { CardDigimon } from '../components/cards'
import { TypeNavigation } from '../constants/typesNavigation'
import { useNavigation } from '@react-navigation/native'

export const DeckBuilderScreen = () => {

  const cards = useAppSelector(state => state.cards.listCards)
  const navigation = useNavigation()

const renderItem = (item)=>{
  return <CardDigimon card={item.item}/>
}

return (
  <>
    <View style={{flexDirection:'row', justifyContent:'space-between'}}>
      <Button
        title='Deck Selected'
        onPress={()=>navigation.navigate(TypeNavigation.game.deckSelected)}
      />
      <Button
        title='Cards Selected'
        onPress={()=>navigation.navigate(TypeNavigation.game.cardSelected)}
      />
      <Button
        title='Filter'
      />
      <Button
        title='Search'
      />
    </View>

    <FlatList
      data={cards}
      renderItem={renderItem}
      numColumns={3}
    />
  </>

  )
}
