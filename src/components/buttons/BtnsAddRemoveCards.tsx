import React from 'react'
import { Text, TouchableOpacity } from 'react-native';
import { useCards } from '../../hooks';
import { TypeNavigation } from '../../constants/typesNavigation';
import { useAppSelector } from '../../hooks/useReducerHook';
import { btnsAddRemove } from '../../styles';
import Toast from 'react-native-toast-message'
const style = btnsAddRemove

const BtnAddRemoveCards = ({ item }) => {
  const { addCards, addCardSelling, addCardWished, removeCardSelling, removeCards, removeCardWished } = useCards()
  const builderWishedSelling = useAppSelector(state => state.app.builderWishedSelling)

const addNotification = ()=>{
  Toast.show({
    type: 'success',
    text1: `Agregado a ${builderWishedSelling}`
  });
}

const removeNotification = ()=>{
  Toast.show({
    type: 'error',
    text1: `Quitado de ${builderWishedSelling}`
  });
}

  const deckBuilder = <>
    <TouchableOpacity
      style={style.buttonAdd}
      onPress={() => (addCards(item), addNotification())}
    >
      <Text style={style.textButtonAdd}>Add</Text>
    </TouchableOpacity>
    <TouchableOpacity
      style={style.buttonRemove}
      onPress={() => (removeCards(item), removeNotification())}
    >
      <Text style={style.textButtonRemove}>Remove</Text>
    </TouchableOpacity>
  </>

  const cardsWished = <>
    <TouchableOpacity
      style={style.buttonAdd}
      onPress={() => (addCardWished(item), addNotification())}
    >
      <Text style={style.textButtonAdd}>Add</Text>
    </TouchableOpacity>
    <TouchableOpacity
      style={style.buttonRemove}
      onPress={() => (removeCardWished(item), removeNotification())}
    >
      <Text style={style.textButtonRemove}>Remove</Text>
    </TouchableOpacity>
  </>

  const cardsSelling = <>
    <TouchableOpacity
      style={style.buttonAdd}
      onPress={() => (addCardSelling(item), addNotification())}
    >
      <Text style={style.textButtonAdd}>Add</Text>
    </TouchableOpacity>
    <TouchableOpacity
      style={style.buttonRemove}
      onPress={() => (removeCardSelling(item), removeNotification())}
    >
      <Text style={style.textButtonRemove}>Remove</Text>
    </TouchableOpacity>
  </>

  switch (builderWishedSelling) {
    case TypeNavigation.game.deckBuilder: return deckBuilder
    case TypeNavigation.game.cardsBuy: return cardsWished
    case TypeNavigation.game.cardsSell: return cardsSelling
  }
}

export default BtnAddRemoveCards