import React, { useState } from 'react'
import { useAppSelector } from '../../hooks/useReducerHook'
import { View, FlatList, TextInput, ImageBackground } from 'react-native';
import { CardDigimon } from '../../components/cards';
import { listCardsSearch } from '../../styles';

const DeckBuilderSearchCardScreen = () => {
    const [nameCard, setNameCard] = useState('');
    const cards = useAppSelector(state => state.cards.listCards)
    const style = listCardsSearch
    const filteredCards = cards.filter((card) =>
      card.data.name.toLowerCase().includes(nameCard.toLowerCase())
    );
    
    const renderItem = ({ item }) => (
      <View style={style.container}>
        <CardDigimon card={item}/>  
      </View>
    );

    return (
      <ImageBackground
        source={require('../../assets/backgrounds/searchCard.jpg')}
        resizeMode='cover'
        style={{flex:1}}
      >
      <View>
            <TextInput
                placeholder="Search card by name"
                onChangeText={setNameCard}
                value={nameCard}
                style={style.search}
            />
        </View>
        <FlatList
          data={filteredCards}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          numColumns={3}
        />
      </ImageBackground>
    );
}

export default DeckBuilderSearchCardScreen