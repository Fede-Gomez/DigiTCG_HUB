import React, { useState } from 'react'
import { TypeNavigation } from '../../constants/typesNavigation';
import { ButtonSaveDeck } from './BtnSaveDeck'
import { BtnShareCards } from './BtnShareCards'
import { Text, View, TouchableOpacity, Modal } from 'react-native';
import { useApp, useCards, useDeck } from '../../hooks'
import { useAppSelector } from '../../hooks/useReducerHook'
import { btnsHeader } from '../../styles';
import { filterOn } from '../../assets/icons';
import * as Animatable from 'react-native-animatable';
import FastImage from 'react-native-fast-image';
import { ModalDeckBuySell } from '../modals';

const buttonBack = (clearListCardsView, style) => {
  return (
    <TouchableOpacity
      style={style.buttonBackClear}
      onPress={() => clearListCardsView()}
    >
      <Text style={style.textButtonBackClear}>Volver</Text>
    </TouchableOpacity>
  )
}

export const BtnsHeadersCard = () => {
  const builderWishedSelling = useAppSelector(state => state.app.builderWishedSelling)
  const style = btnsHeader(builderWishedSelling)

  const { clearListCardsView } = useCards()
  const { setModalFilter } = useApp()
  const [isVisibleDeckBuySell, setIsVisibleDeckBuySell] = useState(false)
  
  const toogleModalDeckBuySell = ()=>{
    setIsVisibleDeckBuySell(!isVisibleDeckBuySell)
  }

  const toggleModal = () => {
    setModalFilter(true)
  };
  const handleButtonPress = () => {
    setIsVisibleDeckBuySell(!isVisibleDeckBuySell);
  };

  return (
    <View style={style.containerWithButtons}>
      {buttonBack(clearListCardsView, style)}
    <View>
      <TouchableOpacity onPress={handleButtonPress}>
        <Text style={style.textBtnDeckBuySell}>
          {builderWishedSelling}
        </Text>
      </TouchableOpacity>
    </View>
    <TouchableOpacity
      onPress={()=>toggleModal()}
      style={{backgroundColor:'#152C77', padding:10}}
    >
      <FastImage
        source={filterOn}
        style={{height:30, width:30}}
      />
    </TouchableOpacity>
    <ModalDeckBuySell 
      isModalVisible={isVisibleDeckBuySell} 
      toogleModalDeckBuySell={toogleModalDeckBuySell}
    />
  </View>
  )
}

export const BtnsHeadersCardSelecteds = () => {
  const builderWishedSelling = useAppSelector(state => state.app.builderWishedSelling)
  const [isVisibleDeckBuySell, setIsVisibleDeckBuySell] = useState(false)
  const style = btnsHeader(builderWishedSelling)
  const listPicked = useAppSelector(state => state.cards.picked)
  const listWished = useAppSelector(state => state.cards.wished)
  const listSelling = useAppSelector(state => state.cards.selling)

  const { saveCardsPicked, saveCardsBuy, saveCardsSell } = useDeck()
  const { clearListCardsPicked, clearListCardsSelling, clearListCardsWished } = useCards()

  const buttonClearList = (style) => {

    const clean = ()=>{
      switch (builderWishedSelling) {
        case TypeNavigation.game.deckBuilder: return clearListCardsPicked()
        case TypeNavigation.game.cardsBuy: return clearListCardsWished()
        case TypeNavigation.game.cardsSell: return clearListCardsSelling()
      }
    }

    return (
      <TouchableOpacity
        style={style.buttonBackClear}
        onPress={() => clean()}
      >
        <Text style={style.textButtonBackClear}>Limpiar</Text>
      </TouchableOpacity>
    )
  }

  const handleButtonPress = () => {
    switch (builderWishedSelling) {
      case TypeNavigation.game.deckBuilder: 
        saveCardsPicked;
        break;
      case TypeNavigation.game.cardsBuy: 
        saveCardsBuy;
        break;
      case TypeNavigation.game.cardsSell: 
        saveCardsSell
        break;
    }
    setIsVisibleDeckBuySell(!isVisibleDeckBuySell);
  };

  const toogleModalDeckBuySell = ()=>{
    setIsVisibleDeckBuySell(!isVisibleDeckBuySell)
  }

  const btnShare = ()=>{
    if( listPicked?.length != 0 && builderWishedSelling == TypeNavigation.game.deckBuilder)
      return <ButtonSaveDeck cards={listPicked} />
    if( listWished?.length != 0 && builderWishedSelling == TypeNavigation.game.cardsBuy)
      return <BtnShareCards message={`Compro`} cards={listWished} tipoOperacion='compra' titlePrompt={'Guardar y publicar'} />
    if( listSelling?.length != 0 && builderWishedSelling == TypeNavigation.game.cardsSell)
      return <BtnShareCards message={`Vendo`} cards={listSelling} tipoOperacion='venta' titlePrompt={'Guardar y publicar'} />
  }

  return(
    <View style={style.containerWithButtons}>
      {buttonClearList(style)}
      <View>
        <TouchableOpacity onPress={handleButtonPress}>
          <Text style={style.textBtnDeckBuySell}>
            {builderWishedSelling}
          </Text>
        </TouchableOpacity>
      </View>
      {btnShare()}
      <ModalDeckBuySell 
        isModalVisible={isVisibleDeckBuySell} 
        toogleModalDeckBuySell={toogleModalDeckBuySell}
      />
    </View>
  )
}