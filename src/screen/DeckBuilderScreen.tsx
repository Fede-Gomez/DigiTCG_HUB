import React, { useState } from 'react'
import { Text, View, Image, FlatList, Dimensions, Button, Alert, Pressable } from 'react-native'
import { useAppDispatch, useAppSelector } from '../hooks/useReducerHook'
import { CardDigimon } from '../components/cards'

export const DeckBuilderScreen = () => {

  const cards = useAppSelector(state => state.cards.listCards)

const renderItem = (item)=>{
  return <CardDigimon card={item.item.data}/>
}

return (
  <>
    <View style={{flexDirection:'row', justifyContent:'space-between'}}>
      <Button
        title='Deck Selected'
      />
      <Button
        title='Card Selected'
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
