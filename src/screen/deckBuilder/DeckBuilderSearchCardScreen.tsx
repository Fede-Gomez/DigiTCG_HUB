import React, { useState } from 'react'
import { useAppSelector } from '../../hooks/useReducerHook'
import { View, FlatList, TextInput, ImageBackground } from 'react-native';
import { CardDigimon } from '../../components';
import { listCardsSearch } from '../../styles';

const DeckBuilderSearchCardScreen = () => {
    const [nameCard, setNameCard] = useState('');
    const cards = useAppSelector(state => state.cards.searched)
    const style = listCardsSearch
    const filteredCards = cards.filter((card) =>
      card.name.toLowerCase().includes(nameCard.toLowerCase())
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
            placeholderTextColor={'white'}
        />
        </View>
        <FlatList
          data={filteredCards}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          numColumns={3}
          maxToRenderPerBatch={10}
          showsVerticalScrollIndicator={false}
        />
      </ImageBackground>
    );
}

export default DeckBuilderSearchCardScreen