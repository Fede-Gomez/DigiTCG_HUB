import React, { useState } from 'react'
import { useAppSelector } from '../hooks/useReducerHook'
import { View, FlatList, TextInput } from 'react-native';
import { CardDigimon } from '../components/cards';

const SearchCardScreen = () => {
    const [nameCard, setNameCard] = useState('');
    const cards = useAppSelector(state => state.cards.listCards)
    const filteredCards = cards.filter((card) =>
      card.data.name.toLowerCase().includes(nameCard.toLowerCase())
    );
    
    const renderItem = ({ item }) => (
      <View>
        <CardDigimon card={item}/>  
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

export default SearchCardScreen