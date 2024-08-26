import React, { useRef, useState } from 'react'
import { ImageBackground } from 'react-native';
import { useAppSelector } from '../../hooks/useReducerHook'
import { CardListCardsView, Folder, ModalCard } from '../../components'
import { TypeNavigation } from '../../constants/typesNavigation';
import { backgroundCompra, backgroundDeck, backgroundVenta } from '../../assets/backgrounds';

const ViewCardsScreen = () => {
  const card = useAppSelector(state => state.cards.view)
  const cardInfo = useAppSelector(state => state.app.modalCardView)
  const builderWishedSelling = useAppSelector(state => state.app.builderWishedSelling)
  const fondo = useRef()

  switch (builderWishedSelling) {
    case TypeNavigation.game.deckBuilder: fondo.current = backgroundDeck
      break;
    case TypeNavigation.game.cardsBuy : fondo.current = backgroundCompra
      break;
    case TypeNavigation.game.cardsSell : fondo.current = backgroundVenta
      break;
  }

  if(card.count == 0){
    return (
      <ImageBackground
        source={fondo.current}
        style={{ flex: 1 }}
      >
        <Folder/>
      </ImageBackground>

    )
  } 

  return (
    <ImageBackground
      source={fondo.current}
      style={{ flex: 1 }}
    >
      <CardListCardsView/>
      {/* abre todos los modals de todas touchable de las cartas que hayan */}
      {/* <ModalCard card={cardInfo} /> */}
    </ImageBackground>
  )
}

export default ViewCardsScreen