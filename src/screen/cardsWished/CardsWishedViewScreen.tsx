import { useNavigation, useNavigationState } from '@react-navigation/native'
import React from 'react'

export const CardsWishedViewCardsScreen = () => {
  const navigation = useNavigation()
  const state = useNavigationState(state => state.index);
  
  return (
    <>

    </>
  )
}
