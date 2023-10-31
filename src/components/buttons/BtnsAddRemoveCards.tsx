import React from 'react'
import { Button, Text, TouchableOpacity } from 'react-native';
import { useCards } from '../../hooks';
import { TypeNavigation } from '../../constants/typesNavigation';
import { useAppSelector } from '../../hooks/useReducerHook';
import { btnsAddRemove } from '../../styles';

const style = btnsAddRemove

const BtnAddRemoveCards = ({ item }) => {
  const { addCards, addCardSelling, addCardWished, removeCardSelling, removeCards, removeCardWished } = useCards()
  const builderWishedSelling = useAppSelector(state => state.app.builderWishedSelling)

  const deckBuilder = <>
    <TouchableOpacity
      style={style.buttonAdd}
      onPress={() => addCards(item)}
    >
      <Text style={style.textButtonAdd}>Add</Text>
    </TouchableOpacity>
    {item.count &&
      <Text style={style.countDeckBuilder}>
        {item.count}
      </Text>
    }
    <TouchableOpacity
      style={style.buttonRemove}
      onPress={() => removeCards(item)}
    >
      <Text style={style.textButtonRemove}>Remove</Text>
    </TouchableOpacity>
  </>

  const cardsWished = <>
    <TouchableOpacity
      style={style.buttonAdd}
      onPress={() => addCardWished(item)}
    >
      <Text style={style.textButtonAdd}>Add</Text>
    </TouchableOpacity>
    {item.count &&
      <Text style={style.countCardBuy}>
        {item.count}
      </Text>
    }
    <TouchableOpacity
      style={style.buttonRemove}
      onPress={() => removeCardWished(item)}
    >
      <Text style={style.textButtonRemove}>Remove</Text>
    </TouchableOpacity>
  </>

  const cardsSelling = <>
    <TouchableOpacity
      style={style.buttonAdd}
      onPress={() => addCardSelling(item)}
    >
      <Text style={style.textButtonAdd}>Add</Text>
    </TouchableOpacity>
    {item.count &&
      <Text style={style.countCardSell}>
        {item.count}
      </Text>
    }
    <TouchableOpacity
      style={style.buttonRemove}
      onPress={() => removeCardSelling(item)}
    >
      <Text style={style.textButtonRemove}>Remove</Text>
    </TouchableOpacity>
  </>

  switch (builderWishedSelling) {
    case TypeNavigation.game.deckBuilder: return deckBuilder
    case TypeNavigation.game.cardsWished: return cardsWished
    case TypeNavigation.game.cardsSelling: return cardsSelling
  }
}

export default BtnAddRemoveCards