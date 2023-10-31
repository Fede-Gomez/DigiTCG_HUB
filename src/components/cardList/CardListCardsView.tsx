import React, { useEffect, useState } from 'react'
import { View, FlatList, Button, TextInput, Image, TouchableOpacity, Text } from 'react-native';
import { useAppSelector } from '../../hooks/useReducerHook'
import { BtnAddRemoveCards, BtnsHeadersCard, CardDigimon, ModalFilter } from '..'
import { useApp, useCards } from '../../hooks'
import { listCardsSearch, listCardsView } from '../../styles'
import { filterOn, searchOn } from '../../assets/icons';
import ModalCard from '../modals/ModalCard';
import { TypeNavigation } from '../../constants/typesNavigation';


const CardListCardsView = () => {
  const card = useAppSelector(state => state.cards.view)
  const builderWishedSelling = useAppSelector(state => state.app.builderWishedSelling)
  
  const { clearListCardsView } = useCards()

  const style = listCardsView;

  const renderHeader = () => {
    return (
      <View>
          <BtnsHeadersCard />
          <Text style={
            builderWishedSelling == TypeNavigation.game.deckBuilder && style.titleDeckBuilder
            ||
            builderWishedSelling == TypeNavigation.game.cardsSelling && style.titleCardSell
            ||
            builderWishedSelling == TypeNavigation.game.cardsWished && style.titleCardBuy
          }>Estás en {builderWishedSelling}</Text>
        </View>
    )
  }

  const renderListEmpty = () => {
    return <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around' }}>
      <Button
        title={'No hay nada aca'}
        onPress={() => clearListCardsView()}
      />
    </View>
  }

  const renderItem = ({ item }) => {
    return (
    <View style={style.container}>
      <CardDigimon card={item} />
      <View style={style.buttonsAddRemove}>
        <BtnAddRemoveCards item={item} />
      </View>
    </View>

    )
  }

  
  return <>
      <FlatList
        ListEmptyComponent={renderListEmpty}
        ListHeaderComponent={renderHeader}
        data={ card }
        renderItem={renderItem}
        numColumns={2}
        stickyHeaderIndices={[0]}
        showsVerticalScrollIndicator={false}
      />
    </>
}

export default CardListCardsView