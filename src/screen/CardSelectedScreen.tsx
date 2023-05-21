import React from 'react'
import { FlatList, Text } from 'react-native';
import { useAppSelector } from '../hooks/useReducerHook'
import { CardDigimon } from '../components/cards'

const CardSelectedScreen = () => {

    const cards = useAppSelector(state => state.cards.listCardsPicked)

    const renderItem = (item)=>{
        return <CardDigimon card={item.item}/>
    }
console.log(cards.length);

  return (
    cards.length == 0 
    ?   <Text>Agrega cartas</Text>
    :   <FlatList
            data={cards}
            renderItem={renderItem}
            numColumns={3}
        />
  )
}

export default CardSelectedScreen