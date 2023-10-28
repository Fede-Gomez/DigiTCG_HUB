import React, { useEffect, useState } from 'react'
import { View, FlatList, Button, TextInput, Image, TouchableOpacity } from 'react-native';
import { useAppSelector } from '../../hooks/useReducerHook'
import { BtnAddRemoveCards, CardDigimon, ModalFilter } from '..'
import { useApp, useCards } from '../../hooks'
import { listCardsSearch, listCardsView } from '../../styles'
import { filterOn, searchOn } from '../../assets/icons';
import ModalCard from '../modals/ModalCard';


const CardListCardsView = ({topTab}) => {
  const card = useAppSelector(state => state.cards.view)
  const { clearListCardsView } = useCards()

  const styleCard = listCardsView;

  const renderHeader = () => {
    return <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around', marginTop:8 }}>
      <Button
        color={'black'}
        title={'Back'}
        onPress={() => clearListCardsView()}
      />
    </View>
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
    return <TouchableOpacity >
    <View style={styleCard.container}>
      <CardDigimon card={item} />
      <View style={styleCard.buttonsAddRemove}>
        <BtnAddRemoveCards item={item} topTab={topTab}/>
      </View>
    </View>
    </TouchableOpacity>
  }

  
  return <>
      <FlatList
        ListEmptyComponent={renderListEmpty}
        ListHeaderComponent={renderHeader}
        data={ card }
        renderItem={renderItem}
        initialNumToRender={2}
        maxToRenderPerBatch={4}
        numColumns={3}
        removeClippedSubviews={true}
      />
    </>
}

export default CardListCardsView