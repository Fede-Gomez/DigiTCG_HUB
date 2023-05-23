import React, {useState,useEffect} from 'react'
import { View, FlatList, Button } from 'react-native'
import { useAppSelector } from '../hooks/useReducerHook'
import { CardDigimon } from '../components/cards'
import { TypeNavigation } from '../constants/typesNavigation'
import { useNavigation } from '@react-navigation/native'
import Modal from 'react-native-modal'
import { Modaal } from '../components/cards/Modaal'
import { ModalFilter } from '../components/modals/ModalFilter'

export const DeckBuilderScreen = () => {

  const cards = useAppSelector(state => state.cards.listCards)
  const [isModalFilterVisible, setIsModalFilterVisibleirst] = useState(false)
  const [first, setfirst] = useState(false)
  const [listCards, setListCards] = useState(cards)
  const navigation = useNavigation()

  useEffect(() => {
    setListCards(cards)
  }, [])
  

  const renderItem = (item)=>{
    return <CardDigimon card={item.item}/>
  }

  const toggleModalFilter = () => {
    setIsModalFilterVisibleirst(!isModalFilterVisible);
  };

  const modalFilter = () =>{
    return(
      <Modal
            isVisible={isModalFilterVisible}

        >
          <View>
            <Button title="Back" onPress={toggleModalFilter} />
          </View>
      </Modal>
    )
  }
console.log(isModalFilterVisible);

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
        // onPress={()=>navigation.navigate(TypeNavigation.game.cardSelected}
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
