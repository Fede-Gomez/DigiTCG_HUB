import React from 'react'
import { Text, View } from 'react-native'
import { useAppDispatch, useAppSelector } from '../hooks/useReducerHook'

export const DeckBuilderScreen = () => {

  const {cards} = useAppSelector(state => state.cards)

  return (
    <View>
      <Text>{JSON.stringify(cards)}</Text>
    </View>
  )
}
