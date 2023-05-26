import React, {useState,useEffect} from 'react'
import { View, FlatList, Button } from 'react-native'
import { useAppSelector } from '../../hooks/useReducerHook'
import { CardDigimon } from '../../components/cards'
// import { TypeNavigation } from '../constants/typesNavigation'
import { useNavigation } from '@react-navigation/native'
import { useCards } from '../../hooks'

export const DeckBuilderCardsViewScreen = () => {
  const cards = useAppSelector(state => state.cards.listCards)
  const listCardsFiltered = useAppSelector(state => state.cards.listCardsFiltered)
  const [listCards, setListCards] = useState({})
  const {addCards, removeCards} = useCards()

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
    return <View style={{flexDirection:'column'}}>
    <CardDigimon card={item}/>
    <View style={{flexDirection:'row'}}>
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
  <>
    <FlatList
      data={listCards}
      renderItem={renderItem}
      numColumns={3}
    />
  </>
  )
}
