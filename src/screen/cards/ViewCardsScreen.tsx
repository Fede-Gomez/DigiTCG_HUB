import React, { useEffect, useState } from 'react'
import { ImageBackground } from 'react-native';
import { useAppSelector } from '../../hooks/useReducerHook'
import { CardListCardsView, Folder, ModalCard } from '../../components'

const ViewCardsScreen = () => {
  const card = useAppSelector(state => state.cards.view)
  const cardInfo = useAppSelector(state => state.app.modalCardView)
  
  return (
    <ImageBackground
      source={require('../../assets/backgrounds/cardView.jpg')}
      style={{ flex: 1 }}
    >
      {card.count == 0
        ? <Folder />
        : <>
          <CardListCardsView/>
        </>
      }
      {/* abre todos los modals de todas touchable de las cartas que hayan */}
      <ModalCard card={cardInfo} />
    </ImageBackground>
  )
}

export default ViewCardsScreen