import React from 'react'
import { View, FlatList, Button, TextInput, Image, TouchableOpacity } from 'react-native';
import { useCards } from '../../hooks';
import { TypeNavigation } from '../../constants/typesNavigation';

const BtnAddRemoveCards = ({ item, topTab })=>{
  const { addCards, addCardSelling, addCardWished, removeCardSelling, removeCards, removeCardWished } = useCards()

  const deckBuilder = <>
    <Button
      color={'green'}
      title='Add'
      onPress={() => addCards(item)}
    />
    <Button
      color={'red'}
      title='Remove'
      onPress={() => removeCards(item)}
    />
  </>

  const cardsWished = <>
    <Button
      color={'green'}
      title='Add'
      onPress={() => addCardWished(item)}
    />
    <Button
      color={'red'}
      title='Remove'
      onPress={() => removeCardWished(item)}
    />
  </>

  const cardsSelling = <>
    <Button
      color={'green'}
      title='Add'
      onPress={() => addCardSelling(item)}
    />
    <Button
      color={'red'}
      title='Remove'
      onPress={() => removeCardSelling(item)}
    />
  </>
  
  switch (topTab) {
    case TypeNavigation.game.deckBuilder: return deckBuilder
    case TypeNavigation.game.cardsWished: return cardsWished
    case TypeNavigation.game.cardsSelling: return cardsSelling
  }
}

export default BtnAddRemoveCards