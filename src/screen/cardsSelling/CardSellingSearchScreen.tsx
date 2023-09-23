import React, { useState } from 'react'
import { useAppSelector } from '../../hooks/useReducerHook'
import { View, FlatList, TextInput, Button, ImageBackground } from 'react-native';
import { CardDigimon } from '../../components';
import { useCards } from '../../hooks';
import { listCardsSearch } from '../../styles';

const CardSellingSearchScreen = () => {
    const [nameCard, setNameCard] = useState('');
    const style = listCardsSearch
    const cards = useAppSelector(state => state.cards.searched)
    const filteredCards = cards.filter((card) =>
      card.name.toLowerCase().includes(nameCard.toLowerCase())
    );
    const {addCardSelling, removeCardSelling} = useCards()
    
    const addSell = (card)=>{    
      addCardSelling(card)
    }
   
    const removeSell = (card)=>{
      removeCardSelling(card)
    }

    const renderItem = ({ item }) => (
      <View style={style.container}>
        <CardDigimon card={item}/>
        <View style={{flexDirection:'row'}}>
          <Button
            title='Add'
            onPress={()=>addSell(item)}
          />
          <Button
            title='Remove'
            onPress={()=>removeSell(item)}
          />
        </View>
      </View>
    );

    return (
      <ImageBackground
        source={require('../../assets/backgrounds/searchCard.jpg')}
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

export default CardSellingSearchScreen