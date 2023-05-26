import React, { useState } from 'react'
import { useAppSelector } from '../../hooks/useReducerHook'
import { View, FlatList, TextInput, Button } from 'react-native';
import { CardDigimon } from '../../components/cards';
import { useCards } from '../../hooks';

const CardWishedSearchScreen = () => {
    const [nameCard, setNameCard] = useState('');
    const cards = useAppSelector(state => state.cards.listCards)
    const filteredCards = cards.filter((card) =>
      card.data.name.toLowerCase().includes(nameCard.toLowerCase())
    );
    const {addCardWished, removeCardWished} = useCards()
    const addWish = (card)=>{    
      addCardWished(card)
    }
   
    const removeWish = (card)=>{
      removeCardWished(card)
    }

    const renderItem = ({ item }) => (
      <View style={{flexDirection:'column'}}>
      <CardDigimon card={item}/>
      <View style={{flexDirection:'row'}}>
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
    );

    return (
      <>
      <View >
            <TextInput
                placeholder="Search card by name"
                onChangeText={setNameCard}
                value={nameCard}
            />
        </View>
        <FlatList
          data={filteredCards}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          numColumns={3}
        />
      </>
    );
}

export default CardWishedSearchScreen