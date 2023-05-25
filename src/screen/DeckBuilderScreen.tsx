import React, {useState,useEffect} from 'react'
import { View, FlatList, Button } from 'react-native'
import { useAppSelector } from '../hooks/useReducerHook'
import { CardDigimon } from '../components/cards'
import { TypeNavigation } from '../constants/typesNavigation'
import { useNavigation } from '@react-navigation/native'

export const DeckBuilderScreen = () => {
  const [listCardsFiltered, setListCardsFiltered] = useState(useAppSelector(state => state.cards.listCardsFiltered))

  const cards = useAppSelector(state => state.cards.listCards)
  const [listCards, setListCards] = useState({})
  const navigation = useNavigation()

  useEffect(() => {
    // console.log();
    // console.log('asi esta en deckBuilder el listCardFiltered');
    // console.log(listCardsFiltered);
    // console.log();
    
    listCardsFiltered.length === 0 ? setListCards(cards) : setListCards(listCardsFiltered)
  }, [listCardsFiltered])
  
  const renderItem = (item)=>{
    return <CardDigimon card={item.item}/>
  }

return (
  <>
    <View style={{flexDirection:'row', justifyContent:'space-between'}}>
      <Button
        title={TypeNavigation.game.deckSelected}
        onPress={()=>navigation.navigate(TypeNavigation.game.deckSelected)}
      />
      <Button
        title={TypeNavigation.game.cardSelected}
        onPress={()=>navigation.navigate(TypeNavigation.game.cardSelected)}
      />
      <Button
        title='Filter'
        onPress={()=>navigation.navigate(TypeNavigation.game.filterSelect)}
      />
      <Button
        title='Search'
      />
    </View>
    <FlatList
      data={listCards}
      renderItem={renderItem}
      numColumns={3}
    />
  </>

  )
}
