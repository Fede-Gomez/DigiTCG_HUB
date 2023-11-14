import React, { useState } from 'react'
import { TypeNavigation } from '../../constants/typesNavigation';
import { ButtonSaveDeck } from './BtnSaveDeck'
import { BtnShareCards } from './BtnShareCards'
import { Text, View, TouchableOpacity } from 'react-native';
import { useApp, useCards, useDeck } from '../../hooks'
import { useAppSelector } from '../../hooks/useReducerHook'
import { btnsHeader } from '../../styles';
import { filterOn } from '../../assets/icons';
import * as Animatable from 'react-native-animatable';
import { colorBackgroundCardBuy, colorBackgroundCardSell, colorBackgroundDeckBuilder, colorTextDesplegable } from '../../constants/colors';
import FastImage from 'react-native-fast-image';

const style = btnsHeader

const buttonBack = (clearListCardsView) => {
  return (
    <TouchableOpacity
      style={style.buttonBackClear}
      onPress={() => clearListCardsView()}
    >
      <Text style={style.textButtonBackClear}>Back</Text>
    </TouchableOpacity>
  )
}

const buttonClearList = (clearListCards) => {
  return (
    <TouchableOpacity
      style={style.buttonBackClear}
      onPress={() => clearListCards()}
    >
      <Text style={style.textButtonBackClear}>Limpiar</Text>
    </TouchableOpacity>
  )
}

export const BtnsHeadersCard = () => {
  const builderWishedSelling = useAppSelector(state => state.app.builderWishedSelling)
  const { clearListCardsView } = useCards()
  const { setModalFilter, setBuildWishSell } = useApp()
  const [expanded, setExpanded] = useState(false);
  const toggleModal = () => {
    setModalFilter(true)
  };
  const handleButtonPress = () => {
    setExpanded(!expanded);
  };

  const deckBuilder = () => {
    return (
      <View style={style.containerWithButtons}>
        {buttonBack(clearListCardsView)}
        <View>
          <TouchableOpacity onPress={handleButtonPress}>
            <Text style={{ ...style.textButtonDesplegable1, backgroundColor: colorBackgroundDeckBuilder, color: colorTextDesplegable }}>
              {TypeNavigation.game.deckBuilder}
            </Text>
          </TouchableOpacity>
          <Animatable.View
            animation={expanded ? 'fadeIn' : 'fadeOut'}
            duration={300}
            style={{display: !expanded ? "none": 'flex'}}
          >
            <TouchableOpacity>
              <Text
                style={{ ...style.textButtonDesplegable2, backgroundColor: colorBackgroundCardSell, color: colorTextDesplegable }}
                onPress={() => { setBuildWishSell(TypeNavigation.game.cardsSell) }}
              >
                {TypeNavigation.game.cardsSell}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text
                style={{ ...style.textButtonDesplegable3, backgroundColor: colorBackgroundCardBuy, color: colorTextDesplegable }}
                onPress={() => setBuildWishSell(TypeNavigation.game.cardsBuy)}
              >
                {TypeNavigation.game.cardsBuy}
              </Text>
            </TouchableOpacity>
          </Animatable.View>
        </View>
        <TouchableOpacity
          onPress={()=>toggleModal()}
          style={{backgroundColor:'#3D0605', padding:10}}
        >
          <FastImage
            source={filterOn}
            style={{height:30, width:30}}
          />
        </TouchableOpacity>
      </View>
    )
  }
  const cardBuy = () => {
    return (
      <View style={style.containerWithButtons}>
        {buttonBack(clearListCardsView)}
        <View>
          <TouchableOpacity onPress={handleButtonPress}>
            <Text
              style={{ ...style.textButtonDesplegable1, backgroundColor: colorBackgroundCardBuy, color: colorTextDesplegable }}
            >
              {TypeNavigation.game.cardsBuy}
            </Text>
          </TouchableOpacity>
          <Animatable.View
            animation={expanded ? 'fadeIn' : 'fadeOut'}
            duration={300}
            style={{display: !expanded ? "none": 'flex'}}
          >
            <TouchableOpacity>
              <Text
                style={{ ...style.textButtonDesplegable2, backgroundColor: colorBackgroundDeckBuilder, color: colorTextDesplegable }}
                onPress={() => { setBuildWishSell(TypeNavigation.game.deckBuilder) }}
              >
                {TypeNavigation.game.deckBuilder}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text
                style={{ ...style.textButtonDesplegable3, backgroundColor: colorBackgroundCardSell, color: colorTextDesplegable }}
                onPress={() => setBuildWishSell(TypeNavigation.game.cardsSell)}
              >
                {TypeNavigation.game.cardsSell}
              </Text>
            </TouchableOpacity>
          </Animatable.View>
        </View>
        <TouchableOpacity
          onPress={()=>toggleModal()}
          style={{backgroundColor:'#3D0605', padding:10}}
        >
          <FastImage
            source={filterOn}
            style={{height:30, width:30}}
          />
        </TouchableOpacity>
      </View>
    )
  }
  const cardSell = () => {
    return (
      <View style={style.containerWithButtons}>
        {buttonBack(clearListCardsView)}
        <View>
          <TouchableOpacity onPress={handleButtonPress}>
            <Text style={{ ...style.textButtonDesplegable1, backgroundColor: colorBackgroundCardSell, color: colorTextDesplegable }}>
              {TypeNavigation.game.cardsSell}
            </Text>
          </TouchableOpacity>
          <Animatable.View
            animation={expanded ? 'fadeIn' : 'fadeOut'}
            duration={300}
            style={{display: !expanded ? "none": 'flex'}}
          >
            <TouchableOpacity>
              <Text
                style={{ ...style.textButtonDesplegable2, backgroundColor: colorBackgroundDeckBuilder, color: colorTextDesplegable }}
                onPress={() => { setBuildWishSell(TypeNavigation.game.deckBuilder) }}
              >
                {TypeNavigation.game.deckBuilder}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text
                style={{ ...style.textButtonDesplegable3, backgroundColor: colorBackgroundCardBuy, color: colorTextDesplegable }}
                onPress={() => setBuildWishSell(TypeNavigation.game.cardsBuy)}
              >
                {TypeNavigation.game.cardsBuy}
              </Text>
            </TouchableOpacity>
          </Animatable.View>
        </View>
        <TouchableOpacity
          onPress={()=>toggleModal()}
          style={{backgroundColor:'#3D0605', padding:10}}
        >
          <FastImage
            source={filterOn}
            style={{height:30, width:30}}
          />
        </TouchableOpacity>
      </View>
    )
  }  
  switch (builderWishedSelling) {
    case TypeNavigation.game.deckBuilder: return deckBuilder()
    case TypeNavigation.game.cardsBuy: return cardBuy()
    case TypeNavigation.game.cardsSell: return cardSell()
  }
}

export const BtnsHeadersCardSelecteds = () => {

  const builderWishedSelling = useAppSelector(state => state.app.builderWishedSelling)
  const listPicked = useAppSelector(state => state.cards.picked)
  const listWished = useAppSelector(state => state.cards.wished)
  const listSelling = useAppSelector(state => state.cards.selling)
  const [expanded, setExpanded] = useState(false);
  const handleButtonPress = () => {
    setExpanded(!expanded);
  };
  const { saveCardsPicked, saveCardsBuy, saveCardsSell } = useDeck()
  const { setBuildWishSell } = useApp()
  const { clearListCardsPicked, clearListCardsSelling, clearListCardsWished } = useCards()


  const deckBuilder = () => {
    return (
      <View style={listPicked?.length == 0 ? style.containerAlone : style.containerWithButtons}>
        {listPicked?.length != 0 && buttonClearList(clearListCardsPicked)}
        <View>
          <TouchableOpacity onPress={handleButtonPress}>
            <Text style={{ ...style.textButtonDesplegable1, backgroundColor: colorBackgroundDeckBuilder, color: colorTextDesplegable }}>
              {TypeNavigation.game.deckBuilder}
            </Text>
          </TouchableOpacity>
          <Animatable.View
            animation={expanded ? 'fadeIn' : 'fadeOut'}
            duration={300}
            style={{ display: expanded ? 'flex' : 'none' }}
          >
            <TouchableOpacity>
              <Text
                style={{ ...style.textButtonDesplegable2, backgroundColor: colorBackgroundCardSell, color: colorTextDesplegable }}
                onPress={() => { setBuildWishSell(TypeNavigation.game.cardsSell), saveCardsPicked }}
              >
                {TypeNavigation.game.cardsSell}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text
                style={{ ...style.textButtonDesplegable3, backgroundColor: colorBackgroundCardBuy, color: colorTextDesplegable }}
                onPress={() => { setBuildWishSell(TypeNavigation.game.cardsBuy), saveCardsPicked }}
              >
                {TypeNavigation.game.cardsBuy}
              </Text>
            </TouchableOpacity>
          </Animatable.View>
        </View>
        <View>
          {listPicked?.length != 0 && <ButtonSaveDeck cards={listPicked} />}
        </View>
      </View>
    )
  }

  const cardBuy = () => {
    console.log(listWished);
    
    return (
      <View style={listWished?.length == 0 ? style.containerAlone : style.containerWithButtons}>
        {listWished?.length != 0 && buttonClearList(clearListCardsWished)}
        <View>
          <TouchableOpacity onPress={handleButtonPress}>
            <Text style={{ ...style.textButtonDesplegable1, backgroundColor: colorBackgroundCardBuy, color: colorTextDesplegable }}>
              {TypeNavigation.game.cardsBuy}
            </Text>
          </TouchableOpacity>
          <Animatable.View
            animation={expanded ? 'fadeIn' : 'fadeOut'}
            duration={300}
            style={{display: !expanded ? "none": 'flex'}}
          >
            <TouchableOpacity>
              <Text
                style={{ ...style.textButtonDesplegable2, backgroundColor: colorBackgroundCardSell, color: colorTextDesplegable }}
                onPress={() => { setBuildWishSell(TypeNavigation.game.cardsSell), saveCardsBuy }}
              >
                {TypeNavigation.game.cardsSell}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text
                style={{ ...style.textButtonDesplegable3, backgroundColor: colorBackgroundDeckBuilder, color: colorTextDesplegable }}
                onPress={() => { setBuildWishSell(TypeNavigation.game.deckBuilder), saveCardsBuy }}
              >
                {TypeNavigation.game.deckBuilder}
              </Text>
            </TouchableOpacity>
          </Animatable.View>
        </View>
        {listWished?.length != 0 && <BtnShareCards message={`Busco:\n`} cards={listWished} tipoOperacion='compra' titlePrompt={'Guardar y publicar'} />}
      </View>
    )
  }

  const cardSell = () => {
    return (
      <View style={listSelling?.length == 0 ? style.containerAlone : style.containerWithButtons}>
        {listSelling?.length != 0 && buttonClearList(clearListCardsSelling)}
        <View>
          <TouchableOpacity onPress={handleButtonPress}>
            <Text style={{ ...style.textButtonDesplegable1, backgroundColor: colorBackgroundCardSell, color: colorTextDesplegable }}>
              {TypeNavigation.game.cardsSell}
            </Text>
          </TouchableOpacity>
          <Animatable.View
            animation={expanded ? 'fadeIn' : 'fadeOut'}
            duration={300}
            style={{display: !expanded ? "none": 'flex'}}
          >
            <TouchableOpacity>
              <Text
                style={{ ...style.textButtonDesplegable2, backgroundColor: colorBackgroundDeckBuilder, color: colorTextDesplegable }}
                onPress={() => { setBuildWishSell(TypeNavigation.game.deckBuilder), saveCardsSell }}
              >
                {TypeNavigation.game.deckBuilder}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text
                style={{ ...style.textButtonDesplegable3, backgroundColor: colorBackgroundCardBuy, color: colorTextDesplegable }}
                onPress={() => { setBuildWishSell(TypeNavigation.game.cardsBuy), saveCardsSell }}
              >
                {TypeNavigation.game.cardsBuy}
              </Text>
            </TouchableOpacity>
          </Animatable.View>
        </View>
        {listSelling?.length != 0 && <BtnShareCards message={`Vendo:\n`} cards={listSelling} tipoOperacion='venta' titlePrompt={'Guardar y publicar'} />}
      </View>
    )
  }

  switch (builderWishedSelling) {
    case TypeNavigation.game.deckBuilder: return deckBuilder()
    case TypeNavigation.game.cardsBuy: return cardBuy()
    case TypeNavigation.game.cardsSell: return cardSell()
  }
}