import React, {useState} from 'react'
import { FlatList, View, Button, TextInput, TouchableOpacity, Image, Text } from 'react-native';
import { useAppSelector } from '../../hooks/useReducerHook';
import { useApp, useCards } from '../../hooks';
import { listCardsSearch, listCardsView } from '../../styles';
import CardDigimon from '../cards/CardDigimon';

import { BtnAddRemoveCards, BtnsHeadersSearchCard, ModalFilter } from '..';
import { TypeNavigation } from '../../constants/typesNavigation';


const CardListCardsSearched = () => {
    const [nameCard, setNameCard] = useState('');
    const builderWishedSelling = useAppSelector(state => state.app.builderWishedSelling)

    const cards = useAppSelector(state => state.cards.searched)

    const style = listCardsSearch
    const styleCard = listCardsView;

    const filteredCards = cards?.filter((card) =>
      card.name?.toLowerCase().includes(nameCard.toLowerCase())
    );

      

    const renderItem = ({ item }) => (
        <View style={style.container}>
          <CardDigimon card={item}/>
          <View style={styleCard.buttonsAddRemove}>
          <BtnAddRemoveCards item={item}/>
        </View>
        </View>
      );
    const renderHeader = () => {
        return(
          <View>
            <BtnsHeadersSearchCard nameCard={nameCard} setNameCard={setNameCard}/>
            <Text style={
              builderWishedSelling == TypeNavigation.game.deckBuilder && style.titleDeckBuilder
              ||
              builderWishedSelling == TypeNavigation.game.cardsSelling && style.titleCardSell
              ||
              builderWishedSelling == TypeNavigation.game.cardsWished && style.titleCardBuy
              }>
                Estás en {builderWishedSelling}
            </Text>
          </View>
        ) 
      }

  return <>
    <FlatList
        data={filteredCards}
        renderItem={renderItem}
        ListHeaderComponent={renderHeader}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        stickyHeaderIndices={[0]}
        initialNumToRender={1}
        maxToRenderPerBatch={1}
        showsVerticalScrollIndicator={false}
        removeClippedSubviews={true}
    />
    <ModalFilter />
  </>
}

export default CardListCardsSearched